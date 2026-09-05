"use client"

import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Script from 'next/script';
import abi from "../../assets/verifier.json";
import { useActionLog } from '../components/ActionConsole';

/* Placeholder ABI retained in the deployed artifact. */
const contractAbi = abi;
/*
const placeholderAbi = [
    {
        "inputs": [
            { "internalType": "uint256[2]", "name": "a", "type": "uint256[2]" },
            { "internalType": "uint256[2][2]", "name": "b", "type": "uint256[2][2]" },
            { "internalType": "uint256[2]", "name": "c", "type": "uint256[2]" },
            { "internalType": "uint256[1]", "name": "input", "type": "uint256[1]" }
        ],
        "name": "verifyProof",
        "outputs": [ { "internalType": "bool", "name": "", "type": "bool" } ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256[2]", "name": "a", "type": "uint256[2]" },
            { "internalType": "uint256[2][2]", "name": "b", "type": "uint256[2][2]" },
            { "internalType": "uint256[2]", "name": "c", "type": "uint256[2]" },
            { "internalType": "uint256[1]", "name": "input", "type": "uint256[1]" }
        ],
        "name": "doProof",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]; */

const PROVIDER_NETWORK = 'Sepolia';
const PROVIDER_CHAIN_ID = 11155111;
const PROVIDER_RPC = { 11155111 : 'https://rpc-sepolia.rockx.com'};
const CONTRACT_ADDR = "0x5ADC69669cFF2B9E6ffE56a3A8EFD31106203354";
const CONTRACT_NETWORK = "11155111";

export default function ZKExamplePage({ callback }) {
    const [connected, setConnected] = useState(false);
    const [address, setAddress] = useState("");
    const [aInput, setAInput] = useState('');
    const [bInput, setBInput] = useState('');
    const [response, setResponse] = useState('');
    const [snarkReady, setSnarkReady] = useState(false);
    const [web3ModalReady, setWeb3ModalReady] = useState(false);
    
    const web3Ref = useRef(null);
    const contractRef = useRef(null);
    const web3ModalRef = useRef(null);
    const actionLog = useActionLog();

    const notify = (msg) => {
        console.log(msg);
        if (callback) callback("message", msg);
        else actionLog?.(`message: ${msg}`);
    };

    useEffect(() => {
        const init = async () => {
            const Web3Modal = (await import("web3modal")).default;
            const WalletConnectProvider = (await import("@walletconnect/web3-provider")).default;

            const providerOptions = {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        rpc : PROVIDER_RPC,
                        chainId : PROVIDER_CHAIN_ID,
                    }
                }
            };

            web3ModalRef.current = new Web3Modal({
                network: "mainnet",
                cacheProvider: true,
                providerOptions
            });
            setWeb3ModalReady(true);
            notify("Wallet connection ready");

        };
        init().catch(error => notify(`Wallet setup error: ${error.message || error}`));
    }, []);

    const start = async () => {
        try {
            if (!web3ModalRef.current) {
                notify("Wallet connection is still loading");
                return;
            }
            const Web3 = (await import("web3")).default;
            const provider = await web3ModalRef.current.connect();
            const web3 = new Web3(provider);
            web3Ref.current = web3;

            const chainId = await web3.eth.getChainId();
            if ("" + chainId === CONTRACT_NETWORK || "0x" + chainId.toString(16) === CONTRACT_NETWORK) {
                
                provider.on("accountsChanged", (accounts) => {
                    const nextAddress = accounts[0] || "";
                    setAddress(nextAddress);
                    notify(nextAddress ? `Wallet account changed: ${nextAddress}` : "Wallet account disconnected");
                });

                provider.on("chainChanged", (chainId) => {
                    notify(`Wallet network changed: ${chainId}`);
                });

                provider.on("disconnect", () => {
                    notify("Wallet provider disconnected");
                    end();
                });

                contractRef.current = new web3.eth.Contract(contractAbi, CONTRACT_ADDR);
                
                const accounts = await web3.eth.getAccounts();
                if (accounts[0]) {
                    setAddress(accounts[0]);
                }

                setConnected(true);
                notify(`Connected wallet: ${accounts[0] || "unknown"}`);
            } else {
                notify(`wrong network - use ${PROVIDER_NETWORK}`);
            }
        } catch (e) {
            notify(`wallet error: ${e.message || e}`);
        }
    };

    const end = async () => {
        if (web3ModalRef.current) {
            web3ModalRef.current.clearCachedProvider();
        }
        setConnected(false);
        setAddress("");
        notify("disconnected");
    };

    const prove = async () => {
        if (!snarkReady || !window.snarkjs) {
            notify("snarkjs not loaded");
            return;
        }
        if (!connected) {
            notify("Please connect wallet first");
            return;
        }

        try {
            if (aInput === '' || bInput === '' || Number.isNaN(Number(aInput)) || Number.isNaN(Number(bInput))) {
                notify("Enter valid numeric values for both inputs");
                return;
            }

            let signals = {
                a: parseInt(aInput),
                b: parseInt(bInput)
            };

            let output = [signals["a"] * signals["b"]];

            // In Next.js, these assets should be in the /public folder
            const { proof, publicSignals } = await window.snarkjs.groth16.fullProve(
                signals, 
                "/assets/product.wasm", 
                "/assets/product_0001.zkey"
            );

            notify(`Proof generated for product ${output[0]}`);

            let a = proof.pi_a.slice(0, 2);
            let b = [proof.pi_b[0].reverse(), proof.pi_b[1].reverse()];
            let c = proof.pi_c.slice(0, 2);

            await contractRef.current.methods.doProof(
                a,
                b,
                c,
                output
            ).send({ from: address }).then(r => {
                setResponse(JSON.stringify(r, null, 2));
                notify(`Proof submitted and verified: ${r.transactionHash || "confirmed"}`);
            });

        } catch (e) {
            notify(`Proof generation or submission error: ${e.message || e}`);
        }
    };

    return (
        <Container maxWidth="md">
            <Script
                src="https://unpkg.com/snarkjs@0.7.5/build/snarkjs.min.js"
                strategy="afterInteractive"
                onLoad={() => {
                    setSnarkReady(true);
                    notify("snarkjs loaded");
                }}
                onError={() => notify("Unable to load snarkjs")}
            />
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    zkSNARK Example
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    This example turns two browser inputs into a zero-knowledge proof of their product. The proof assets and snarkjs bundle produce the witness locally; a Sepolia verifier contract then checks the result without receiving the original inputs as the proof itself.
                </Typography>

                <Box sx={{ mb: 3 }}>
                    {!connected ? (
                        <Button variant="contained" onClick={start} disabled={!web3ModalReady}>
                            {web3ModalReady ? "Connect Wallet" : "Loading wallet…"}
                        </Button>
                    ) : (
                        <Button variant="outlined" onClick={end}>Disconnect</Button>
                    )}
                </Box>

                {connected && (
                    <>
                        <Typography variant="body2" sx={{ mb: 2 }}>Address: {address}</Typography>

                        <TextField
                            fullWidth
                            label="input A"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={aInput}
                            onChange={(e) => setAInput(e.target.value)}
                        />

                        <TextField
                            fullWidth
                            label="input B"
                            variant="outlined"
                            margin="normal"
                            type="number"
                            value={bInput}
                            onChange={(e) => setBInput(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={prove}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />

                        <Box sx={{ mt: 4, p: 2, bgcolor: '#f5f5f5', borderRadius: 1, minHeight: '100px', overflow: 'auto' }}>
                            <Typography variant="h6" gutterBottom>Response:</Typography>
                            <pre>{response}</pre>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
}
