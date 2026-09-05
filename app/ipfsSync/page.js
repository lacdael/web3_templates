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
import { v4 as uuid } from 'uuid';
import { createHeliaNode } from '../helia';
import { useHelia } from '../components/HeliaProvider';
import { useActionLog } from '../components/ActionConsole';

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
];

const PROVIDER_NETWORK = 'Sepolia';
const PROVIDER_CHAIN_ID = 11155111;
const PROVIDER_RPC = { 11155111 : 'https://rpc-sepolia.rockx.com'};
const CONTRACT_ADDR = "0xEaa9b42a7c7D2e866EdA8b23d50894d510d1C3b5";
const CONTRACT_NETWORK = "11155111";

export default function IPFSSyncPage({ callback }) {
    const [connected, setConnected] = useState(false);
    const [web3ModalReady, setWeb3ModalReady] = useState(false);
    const [ipfsOnline, setIpfsOnline] = useState(false);
    const [address, setAddress] = useState("");
    const [contractAddr, setContractAddr] = useState("");
    
    const [msgData, setMsgData] = useState('');
    const [msgs, setMsgs] = useState({});
    const [addRsp, setAddRsp] = useState(null);
    const [catPath, setCatPath] = useState('');
    const [catRsp, setCatRsp] = useState('');
    const [publishCID, setPublishCID] = useState('');
    const [publishRsp, setPublishRsp] = useState(null);
    const [resolveCID, setResolveCID] = useState('');
    const [resolveRsp, setResolveRsp] = useState(null);
    const [contractCID, setContractCID] = useState('');
    const [ipnsFiles, setIpnsFiles] = useState([]);
    const [mergedMsgs, setMergedMsgs] = useState({});

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
        if (callback) callback("message", msg);
        else actionLog?.(`message: ${msg}`);
    };

    const stmp = () => {
        let d = new Date();
        return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    };

    useEffect(() => {
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
                contractRef.current = new web3.eth.Contract(abi, CONTRACT_ADDR);
                setContractAddr(CONTRACT_ADDR);

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
        setIpfsOnline(false);
        setContractAddr("");
        setAddress("");
        notify("disconnected");
    };

    const submitMsg = () => {
        let tmp = {};
        tmp[uuid()] = { time: stmp(), text: msgData };
        setMsgs(prev => ({ ...prev, ...tmp }));
        notify("Message added to local database");
    };

    const addFile = async (path, content) => {
        if (!nodeRef.current || !nodeRef.current.isOnline() || !path || !content) return;
        try {
            const result = await nodeRef.current.add({ path, content });
            setAddRsp(result);
            notify(`File added to IPFS: ${result.cid.toString()}`);
        } catch (e) {
            notify(`add file error: ${e.message || e}`);
        }
    };

    const catFile = async (path) => {
        if (!nodeRef.current || !nodeRef.current.isOnline() || !path) return;
        try {
            let arr = [];
            let length = 0;
            for await (const chunk of nodeRef.current.cat(path)) {
                arr.push(chunk);
                length += chunk.length;
            }
            let out = new Uint8Array(length);
            let ptr = 0;
            arr.forEach(item => {
                out.set(item, ptr);
                ptr += item.length;
            });
            setCatRsp(new TextDecoder().decode(out));
            notify(`Read file: ${path}`);
        } catch (e) {
            notify(`read file error: ${e.message || e}`);
        }
    };

    const publish = async (path) => {
        if (!nodeRef.current || !nodeRef.current.isOnline() || !path) return;
        try {
            const res = await nodeRef.current.name.publish(path);
            setPublishRsp(res);
            notify(`Published to IPNS: ${res.name || res.cid || path}`);
        } catch (e) {
            notify(`IPNS publish error: ${e.message || e}`);
        }
    };

    const resolve = async (path) => {
        if (!nodeRef.current || !nodeRef.current.isOnline() || !path) return;
        try {
            const arr = [];
            for await (const name of nodeRef.current.name.resolve(path)) {
                arr.push(name);
            }
            setResolveRsp(arr);
            notify(`Resolved ${arr.length} IPNS entr${arr.length === 1 ? 'y' : 'ies'}`);
        } catch (e) {
            notify(`IPNS resolve error: ${e.message || e}`);
        }
    };

    const contractAddFile = async (ipnsCID) => {
        if (!contractRef.current || !address) return;
        try {
            await contractRef.current.methods.addFile(ipnsCID).send({ from: address });
            notify(`IPNS CID added to contract: ${ipnsCID}`);
        } catch (e) {
            notify(`contract add error: ${e.message || e}`);
        }
    };

    const contractGetFiles = async () => {
        if (!contractRef.current) return;
        try {
            const users = await contractRef.current.methods.getUsers().call();
            const cids = await Promise.all(users.map(async (u) => {
                return await contractRef.current.methods.cids(u).call();
            }));
            setIpnsFiles(cids);
            notify(`Loaded ${cids.length} IPNS file${cids.length === 1 ? '' : 's'} from contract`);
        } catch (e) {
            notify(`contract read error: ${e.message || e}`);
        }
    };

    const merge = async () => {
        try {
            let currentMsgs = Object.assign({}, msgs);
            for (let i = 0; i < ipnsFiles.length; i++) {
                const resolved = [];
                for await (const name of nodeRef.current.name.resolve(ipnsFiles[i])) {
                    resolved.push(name);
                }
                for (let j = 0; j < resolved.length; j++) {
                    let arr = [];
                    let length = 0;
                    for await (const chunk of nodeRef.current.cat(resolved[j])) {
                        arr.push(chunk);
                        length += chunk.length;
                    }
                    let out = new Uint8Array(length);
                    let ptr = 0;
                    arr.forEach(item => {
                        out.set(item, ptr);
                        ptr += item.length;
                    });
                    let obj = JSON.parse(new TextDecoder().decode(out));
                    for (let key in obj) {
                        if (!(key in currentMsgs)) {
                            currentMsgs[key] = obj[key];
                        }
                    }
                }
            }
            setMergedMsgs(currentMsgs);
            notify(`Messages merged (${Object.keys(currentMsgs).length} total)`);
        } catch (e) {
            notify(`merge failed: ${e.message || e}`);
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    IPFS Files Sync
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    This example treats a small message list as a file that can travel between browser sessions. Write the local database to IPFS, publish its reference through IPNS, record that reference in a Sepolia contract, and merge the resolved copies back into the local view.
                </Typography>

                <Box sx={{ mb: 3 }}>
                    {!connected ? (
                        <Button variant="contained" onClick={start} disabled={!web3ModalReady}>
                            {web3ModalReady ? "Connect Wallet & IPFS" : "Loading wallet…"}
                        </Button>
                    ) : (
                        <Button variant="outlined" onClick={end}>Disconnect</Button>
                    )}
                </Box>

                {connected && (
                    <>
                        <Typography variant="h6">ipfs : {ipfsOnline ? "online" : "offline"}</Typography>
                        <Typography variant="body2" sx={{ mb: 2 }}>Address: {address}</Typography>

                        <TextField
                            fullWidth
                            label="message"
                            variant="outlined"
                            margin="normal"
                            value={msgData}
                            onChange={(e) => setMsgData(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={submitMsg}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1, maxHeight: '200px', overflow: 'auto' }}>
                            <pre>{JSON.stringify(msgs, null, 2)}</pre>
                        </Box>

                        <Button 
                            variant="contained" 
                            sx={{ mt: 2 }}
                            onClick={() => addFile("/db.json", JSON.stringify(msgs))}
                        >
                            Write File to IPFS (/db.json)
                        </Button>

                        {addRsp && (
                            <Typography variant="body2" sx={{ mt: 1 }}>
                                {addRsp.path} : {addRsp.cid.toString()}
                            </Typography>
                        )}

                        <TextField
                            fullWidth
                            label="file CID to cat"
                            variant="outlined"
                            margin="normal"
                            sx={{ mt: 4 }}
                            value={catPath}
                            onChange={(e) => setCatPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => catFile(catPath)}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                            <Typography variant="body2">{catRsp}</Typography>
                        </Box>

                        <TextField
                            fullWidth
                            label="file CID to publish"
                            variant="outlined"
                            margin="normal"
                            sx={{ mt: 4 }}
                            value={publishCID}
                            onChange={(e) => setPublishCID(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => publish(publishCID)}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {publishRsp && (
                            <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <pre>{JSON.stringify(publishRsp, null, 2)}</pre>
                            </Box>
                        )}

                        <TextField
                            fullWidth
                            label="IPNS CID"
                            variant="outlined"
                            margin="normal"
                            sx={{ mt: 4 }}
                            value={resolveCID}
                            onChange={(e) => setResolveCID(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => resolve(resolveCID)}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {resolveRsp && (
                            <Box sx={{ p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <pre>{JSON.stringify(resolveRsp)}</pre>
                            </Box>
                        )}

                        <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>Contract Interaction</Typography>
                        <TextField
                            fullWidth
                            label="IPNS CID to submit"
                            variant="outlined"
                            margin="normal"
                            value={contractCID}
                            onChange={(e) => setContractCID(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={() => contractAddFile(contractCID)}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />

                        <Button 
                            variant="contained" 
                            sx={{ mt: 2 }}
                            onClick={contractGetFiles}
                        >
                            Get IPNS hashes from contract
                        </Button>

                        <Box component="ul" sx={{ mt: 2 }}>
                            {ipnsFiles.map((v, i) => (
                                <Typography component="li" key={i} variant="body2">{v}</Typography>
                            ))}
                        </Box>

                        <Button 
                            variant="contained" 
                            color="secondary"
                            sx={{ mt: 4 }}
                            onClick={merge}
                        >
                            Merge All Messages
                        </Button>

                        <Box sx={{ mt: 2, p: 1, bgcolor: '#e0f7fa', borderRadius: 1 }}>
                            <pre>{JSON.stringify(mergedMsgs, null, 2)}</pre>
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
}
