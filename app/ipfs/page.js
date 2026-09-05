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
import Divider from '@mui/material/Divider';
import { createHeliaNode } from '../helia';
import { useHelia } from '../components/HeliaProvider';
import { useActionLog } from '../components/ActionConsole';

export default function IPFSFilesPage({ callback }) {
    const [connected, setConnected] = useState(false);
    const [ipfsOnline, setIpfsOnline] = useState(false);
    const [heliaError, setHeliaError] = useState(null);
    
    const [addPath, setAddPath] = useState('');
    const [addContent, setAddContent] = useState('');
    const [addRslt, setAddRslt] = useState(null);
    const [catPath, setCatPath] = useState('');
    const [catRslt, setCatRslt] = useState('');
    const [lsPath, setLsPath] = useState('');
    const [lsRslt, setLsRslt] = useState(null);
    const [mkdirPath, setMkdirPath] = useState('');
    const [statPath, setStatPath] = useState('');
    const [statRsp, setStatRsp] = useState(null);
    const [rmPath, setRmPath] = useState('');
    const [readPath, setReadPath] = useState('');
    const [readRslt, setReadRslt] = useState('');
    const [writePath, setWritePath] = useState('');
    const [writeContent, setWriteContent] = useState('');
    const [lsFilesPath, setLsFilesPath] = useState('');
    const [lsFileRslt, setLsFileRslt] = useState(null);
    const [publishPath, setPublishPath] = useState('');
    const [publishRslt, setPublishRslt] = useState(null);
    const [resolvePath, setResolvePath] = useState('');
    const [resolveRslt, setResolveRslt] = useState([]);
    const [history, setHistory] = useState([]);

    const nodeRef = useRef(null);
    const nodePromiseRef = useRef(null);
    const helia = useHelia();
    const actionLog = useActionLog();

    const getNode = async () => {
        if (!helia) return null;
        if (nodeRef.current) return nodeRef.current;
        if (!nodePromiseRef.current) {
            nodePromiseRef.current = createHeliaNode(helia)
                .then(node => {
                    nodeRef.current = node;
                    setIpfsOnline(node.isOnline());
                    setHeliaError(null);
                    return node;
                })
                .catch(error => {
                    nodePromiseRef.current = null;
                    setHeliaError(error);
                    throw error;
                });
        }
        return nodePromiseRef.current;
    };

    useEffect(() => {
        if (helia) {
            void getNode().catch(error => {
                notify(`Failed to prepare Helia: ${error.message || error}`);
            });
        }
    }, [helia]);

    const notify = (msg) => {
        console.log(msg);
        if (callback) callback("message", msg);
        else actionLog?.(`message: ${msg}`);
    };

    const check = () => {
        return nodeRef.current && nodeRef.current.isOnline();
    };

    const start = async () => {
        try {
            const node = await getNode();
            if (!node) return;
            const online = node.isOnline();
            setIpfsOnline(online);
            setConnected(true);
            notify(online ? "connected" : "disconnected");
            if (callback) callback("ipfs", online);
        } catch (e) {
            notify(`Error starting IPFS: ${e.message || e}`);
        }
    };

    const end = async () => {
        setConnected(false);
        setIpfsOnline(false);
        notify("disconnected");
        if (callback) callback("ipfs", false);
    };

    const addFile = async () => {
        if (!check() || (!addPath && !addContent)) return;
        let data = {};
        if (addPath) data["path"] = addPath;
        if (addContent) data["content"] = addContent;

        try {
            const result = await nodeRef.current.add(data);
            setAddRslt(result);
            setHistory(prev => [...prev, result.cid.toString()]);
            notify(`File added to IPFS: ${result.cid.toString()}`);
        } catch (e) {
            notify(`add file error: ${e.message || e}`);
        }
    };

    const catFile = async () => {
        if (!check() || !catPath) return;
        try {
            let arr = [];
            let length = 0;
            for await (const chunk of nodeRef.current.cat(catPath)) {
                arr.push(chunk);
                length += chunk.length;
            }
            let out = new Uint8Array(length);
            let ptr = 0;
            arr.forEach(item => {
                out.set(item, ptr);
                ptr += item.length;
            });
            setCatRslt(new TextDecoder().decode(out));
            notify(`Read file: ${catPath}`);
        } catch (e) {
            notify(`read file error: ${e.message || e}`);
        }
    };

    const lsFile = async () => {
        if (!check() || !lsPath) return;
        try {
            const arr = [];
            for await (const file of nodeRef.current.ls(lsPath)) {
                arr.push(file);
            }
            setLsRslt(arr);
            notify(`Listed ${arr.length} IPFS file${arr.length === 1 ? '' : 's'}`);
        } catch (e) {
            notify(`list files error: ${e.message || e}`);
        }
    };

    const mkdir = async () => {
        if (!check() || !mkdirPath) return;
        try {
            await nodeRef.current.files.mkdir(mkdirPath);
            notify(`Directory created: ${mkdirPath}`);
        } catch (e) {
            notify(`mkdir error: ${e.message || e}`);
        }
    };

    const stat = async () => {
        if (!check() || !statPath) return;
        try {
            const stats = await nodeRef.current.files.stat(statPath);
            setStatRsp(`${stats.type} ${stats.size} bytes`);
            notify(`Stat: ${stats.type} ${stats.size} bytes`);
        } catch (e) {
            notify(`stat error: ${e.message || e}`);
        }
    };

    const rm = async () => {
        if (!check() || !rmPath) return;
        try {
            await nodeRef.current.files.rm(rmPath);
            notify(`Removed: ${rmPath}`);
        } catch (e) {
            notify(`remove error: ${e.message || e}`);
        }
    };

    const read = async () => {
        if (!check() || !readPath) return;
        try {
            let arr = [];
            let length = 0;
            for await (const chunk of nodeRef.current.files.read(readPath)) {
                arr.push(chunk);
                length += chunk.length;
            }
            let out = new Uint8Array(length);
            let ptr = 0;
            arr.forEach(item => {
                out.set(item, ptr);
                ptr += item.length;
            });
            setReadRslt(new TextDecoder().decode(out));
            notify(`Read file: ${readPath}`);
        } catch (e) {
            notify(`file read error: ${e.message || e}`);
        }
    };

    const write = async () => {
        if (!check() || !writePath || !writeContent) return;
        try {
            await nodeRef.current.files.write(writePath, writeContent, { parents: true, create: true });
            notify(`File written: ${writePath}`);
        } catch (e) {
            notify(`file write error: ${e.message || e}`);
        }
    };

    const lsMutable = async () => {
        if (!check() || !lsFilesPath) return;
        try {
            const arr = [];
            for await (const file of nodeRef.current.files.ls(lsFilesPath)) {
                arr.push(file);
            }
            setLsFileRslt(arr);
            notify(`Listed ${arr.length} mutable file${arr.length === 1 ? '' : 's'}`);
        } catch (e) {
            notify(`mutable file list error: ${e.message || e}`);
        }
    };

    const publish = async () => {
        if (!check() || !publishPath) return;
        try {
            const res = await nodeRef.current.name.publish(publishPath);
            setPublishRslt(res);
            notify(`Published to IPNS: ${res.name || res.cid || publishPath}`);
        } catch (e) {
            notify(`IPNS publish error: ${e.message || e}`);
        }
    };

    const resolve = async () => {
        if (!check() || !resolvePath) return;
        try {
            const arr = [];
            for await (const name of nodeRef.current.name.resolve(resolvePath)) {
                arr.push(name);
            }
            setResolveRslt(arr);
            notify(`Resolved ${arr.length} IPNS entr${arr.length === 1 ? 'y' : 'ies'}`);
        } catch (e) {
            notify(`IPNS resolve error: ${e.message || e}`);
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    IPFS FILES API
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    This page starts a small IPFS node in the browser so the movement of a file can be followed from one operation to the next. Add content, read it by CID, work with mutable files, and use IPNS to give a changing file a name.
                </Typography>

                <Box sx={{ mb: 3 }}>
                    {!connected ? (
                        <Button variant="contained" onClick={start} disabled={!helia || Boolean(heliaError)}>
                            {helia ? "Connect IPFS" : "Starting Helia…"}
                        </Button>
                    ) : (
                        <Button variant="outlined" onClick={end}>Disconnect</Button>
                    )}
                    {heliaError && (
                        <Typography color="error" sx={{ mt: 1 }}>
                            Helia failed to start: {heliaError.message || String(heliaError)}
                        </Typography>
                    )}
                </Box>

                {connected && (
                    <>
                        <Typography variant="h6" sx={{ mb: 2 }}>
                            IPFS Status: {ipfsOnline ? "Online" : "Offline"}
                        </Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>ipfs.add()</Typography>
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
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2">{addRslt.cid.toString()}</Typography>
                            </Box>
                        )}

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>ipfs.cat()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={catPath}
                            onChange={(e) => setCatPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={catFile}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {catRslt && (
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{catRslt}</Typography>
                            </Box>
                        )}

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>ipfs.ls()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={lsPath}
                            onChange={(e) => setLsPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={lsFile}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {lsRslt && (
                            <Box component="ul" sx={{ mt: 1 }}>
                                {lsRslt.map((a, j) => (
                                    <Typography component="li" key={j} variant="body2">
                                        {a.type} : {a.path}
                                    </Typography>
                                ))}
                            </Box>
                        )}

                        <Divider sx={{ my: 4 }} />
                        <Typography variant="h4" gutterBottom>IPFS MUTABLE FILES API</Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>file.mkdir()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={mkdirPath}
                            onChange={(e) => setMkdirPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={mkdir}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>file.stat()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={statPath}
                            onChange={(e) => setStatPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={stat}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {statRsp && (
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2">{statRsp}</Typography>
                            </Box>
                        )}

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>file.rm()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={rmPath}
                            onChange={(e) => setRmPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={rm}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>file.read()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={readPath}
                            onChange={(e) => setReadPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={read}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {readRslt && (
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap' }}>{readRslt}</Typography>
                            </Box>
                        )}

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>file.write()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={writePath}
                            onChange={(e) => setWritePath(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label="Content"
                            variant="outlined"
                            margin="normal"
                            value={writeContent}
                            onChange={(e) => setWriteContent(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={write}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>file.ls()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={lsFilesPath}
                            onChange={(e) => setLsFilesPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={lsMutable}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {lsFileRslt && (
                            <Box component="ul" sx={{ mt: 1 }}>
                                {lsFileRslt.map((a, j) => (
                                    <Typography component="li" key={j} variant="body2">
                                        {a.type} : {a.name} : {a.cid.toString()}
                                    </Typography>
                                ))}
                            </Box>
                        )}

                        <Divider sx={{ my: 4 }} />
                        <Typography variant="h4" gutterBottom>IPFS NAME API</Typography>

                        <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>name.publish()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={publishPath}
                            onChange={(e) => setPublishPath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={publish}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {publishRslt && (
                            <Box sx={{ mt: 1, p: 1, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                                <Typography variant="body2" sx={{ fontFamily: 'monospace' }}>
                                    {JSON.stringify(publishRslt, null, 2)}
                                </Typography>
                            </Box>
                        )}

                        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>name.resolve()</Typography>
                        <TextField
                            fullWidth
                            label="Path"
                            variant="outlined"
                            margin="normal"
                            value={resolvePath}
                            onChange={(e) => setResolvePath(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={resolve}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />
                        {resolveRslt.length > 0 && (
                            <Box component="ul" sx={{ mt: 1 }}>
                                {resolveRslt.map((a, j) => (
                                    <Typography component="li" key={j} variant="body2">{a}</Typography>
                                ))}
                            </Box>
                        )}

                        <Divider sx={{ my: 4 }} />
                        <Typography variant="h5" gutterBottom>History (Add CID)</Typography>
                        <Box component="ul">
                            {history.map((i, j) => (
                                <Typography component="li" key={j} variant="body2">{i}</Typography>
                            ))}
                        </Box>
                    </>
                )}
            </Box>
        </Container>
    );
}
