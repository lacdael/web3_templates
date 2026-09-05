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
import { useActionLog } from '../components/ActionConsole';

// We'll import these dynamically or handle them in useEffect to avoid SSR issues
// import Web3Modal from "web3modal";
// import Web3 from "web3";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import ethProvider from "eth-provider";
// import { create } from 'ipfs';

import abi from "../../assets/ipfsFilesList.json";
import { createHeliaNode } from '../helia';
import { useHelia } from '../components/HeliaProvider';

/*
 * The ABI is kept alongside the deployed contract artifact. Keeping one
 * source of truth prevents this page drifting from the Solidity contract.
 */
const contractAbi = abi;
/*
const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "cid",
                "type": "string"
            }
        ],
        "name": "addFile",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUsers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }
        ],
        "name": "cids",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]; */

const PROVIDER_NETWORK = 'Sepolia';
const PROVIDER_CHAIN_ID = 11155111;
const PROVIDER_RPC = { 11155111 : 'https://rpc-sepolia.rockx.com'};
const CONTRACT_ADDR = "0xEaa9b42a7c7D2e866EdA8b23d50894d510d1C3b5";
const CONTRACT_NETWORK = "11155111";

export default function IPFSFilesPage({ callback }) {
    const [ipfsOnline, setIpfsOnline] = useState(false);
    const [contractAddr, setContractAddr] = useState("");
    const [address, setAddress] = useState("");
    const [addPath, setAddPath] = useState("");
    const [addContent, setAddContent] = useState("");
    const [addRslt, setAddRslt] = useState(null);
    const [ipfsFiles, setIpfsFiles] = useState([]);
    const [connected, setConnected] = useState(false);
    const [web3ModalReady, setWeb3ModalReady] = useState(false);
    const [mounted, setMounted] = useState(false);
    
    const nodeRef = useRef(null);
    const web3Ref = useRef(null);
    const contractRef = useRef(null);
    const web3ModalRef = useRef(null);
    const helia = useHelia();
    const actionLog = useActionLog();

    useEffect(() => {
        if (helia && !nodeRef.current) {
            createHeliaNode(helia).then(node => {
                nodeRef.current = node;
                setIpfsOnline(node.isOnline());
                notify(`IPFS node ready (${node.isOnline() ? 'online' : 'offline'})`);
            }).catch(error => notify(`IPFS startup error: ${error.message || error}`));
        }
    }, [helia]);

    const notify = (msg) => {
        console.log(msg);
        if (callback) {
            callback("message", msg);
        } else actionLog?.(`message: ${msg}`);
    };

    useEffect(() => {
        setMounted(true);
        // Initialize Web3Modal on client side
        const init = async () => {
            const Web3Modal = (await import("web3modal")).default;
            const WalletConnectProvider = (await import("@walletconnect/web3-provider")).default;
            const ethProvider = (await import("eth-provider")).default;

            const providerOptions = {
                frame: {
                    package: ethProvider,
                    options: {
                        rpc : PROVIDER_RPC,
                        chainId : PROVIDER_CHAIN_ID,
                        infuraId: "INFURA_ID"
                    }
                },
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        rpc : PROVIDER_RPC,
                        chainId : PROVIDER_CHAIN_ID,
                        infuraId: "INFURA_ID"
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

                // Init IPFS
                if (!nodeRef.current) {
                    if (!helia) {
                        notify("Helia is still loading");
                        return;
                    }
                    nodeRef.current = await createHeliaNode(helia);
                }
                setIpfsOnline(nodeRef.current.isOnline());
                notify(`IPFS ${nodeRef.current.isOnline() ? 'online' : 'offline'}`);

                // Init Contract
                contractRef.current = new web3.eth.Contract(contractAbi, CONTRACT_ADDR);
                setContractAddr(CONTRACT_ADDR);

                const accounts = await web3.eth.getAccounts();
                if (accounts[0]) {
                    setAddress(accounts[0]);
                }

                setConnected(true);
                notify(`Connected wallet: ${accounts[0] || "unknown"}`);
            } else {
                notify("wrong network - use Sepolia");
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
        setIpfsOnline(false);
        setContractAddr("");
        setAddress("");
        notify("disconnected");
    };

    const addFile = async () => {
        if (!nodeRef.current || !nodeRef.current.isOnline()) return;
        if (!addPath && !addContent) return;

        let data = {};
        if (addPath) data["path"] = addPath;
        if (addContent) data["content"] = addContent;

        try {
            const result = await nodeRef.current.add(data);
            setAddRslt(result);
            
            await contractRef.current.methods.addFile(result.cid.toString()).send({ from: address });
            notify(`File added and CID stored on-chain: ${result.cid.toString()}`);
        } catch (e) {
            notify(`add file error: ${e.message || e}`);
        }
    };

    const getFiles = async () => {
        if (!contractRef.current) return;
        
        try {
            const users = await contractRef.current.methods.getUsers().call();
            const cids = await Promise.all(users.map(async (u) => {
                return await contractRef.current.methods.cids(u).call();
            }));
            setIpfsFiles(cids);
            notify(`Loaded ${cids.length} file${cids.length === 1 ? '' : 's'} from contract`);
        } catch (e) {
            notify(`get files error: ${e.message || e}`);
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    IPFS Files
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    This example joins two kinds of storage. A browser IPFS node holds the file content, while a Sepolia contract keeps the CID associated with a wallet address. Add a file, submit its reference, and then read the shared list back from the chain.
                </Typography>
                
                <Box sx={{ mb: 3 }}>
                    {!connected ? (
                        <Button variant="contained" onClick={start} disabled={!mounted || !web3ModalReady}>
                            {mounted && web3ModalReady ? "Connect Wallet & IPFS" : "Loading wallet…"}
                        </Button>
                    ) : (
                        <Button variant="outlined" onClick={end}>Disconnect</Button>
                    )}
                </Box>

                {connected && (
                    <>
                        <Typography variant="h6">ipfs : {ipfsOnline ? "online" : "offline"}</Typography>
                        <Typography variant="h6">contract : {contractAddr ? `${contractAddr.substring(0, 6)}...${contractAddr.substring(contractAddr.length - 4)}` : "not connected"}</Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>Address: {address}</Typography>

                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={addPath}
                            onChange={(e) => setAddPath(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Content"
                            variant="outlined"
                            margin="normal"
                            value={addContent}
                            onChange={(e) => setAddContent(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={addFile}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        
                        {addRslt && (
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f0f0f0', borderRadius: 1 }}>
                                <Typography variant="body2">Added CID: {addRslt.cid.toString()}</Typography>
                            </Box>
                        )}

                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" onClick={getFiles}>Get Files from Contract</Button>
                            <Box component="ul" sx={{ mt: 2 }}>
                                {ipfsFiles.map((f, i) => (
                                    <Typography component="li" key={i}>{f}</Typography>
                                ))}
                            </Box>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
}
