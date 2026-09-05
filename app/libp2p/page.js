"use client"

import * as React from 'react';
import { useState, useRef } from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useHelia } from '../components/HeliaProvider';
import { useActionLog } from '../components/ActionConsole';

export default function Libp2pPage({ callback }) {
    const [connected, setConnected] = useState(false);
    const [peerID, setPeerID] = useState(null);
    const [otherPeerId, setOtherPeerId] = useState('');
    const [toSend, setToSend] = useState('');
    const [log, setLog] = useState([]);
    const [pubsubAvailable, setPubsubAvailable] = useState(false);
    
    const nodeRef = useRef(null);
    const helia = useHelia();
    const actionLog = useActionLog();
    const topic = "rec-jdf89shfkj&";

    const notify = (msg) => {
        console.log(msg);
        if (callback) callback("message", msg);
        else actionLog?.(`message: ${msg}`);
    };

    const storeLog = (m) => {
        setLog(prev => {
            const newLog = [...prev, m];
            if (newLog.length > 50) newLog.shift();
            return newLog;
        });
    };

    const start = async () => {
        if (nodeRef.current) {
            notify("Libp2p is already connected");
            return;
        }
        if (!helia?.libp2p) {
            notify("Libp2p is still loading");
            return;
        }
        const node = helia.libp2p;

        try {
            const { toString: uint8ArrayToString } = await import("uint8arrays/to-string");

            node.addEventListener('peer:discovery', (evt) => {
                node.dial(evt.detail.multiaddrs ?? evt.detail.id).catch(err => {
                    notify(`Could not dial discovered peer ${evt.detail.id}: ${err.message || err}`);
                });
                notify(`Discovered peer: ${evt.detail.id}`);
            });

            node.addEventListener('peer:connect', (evt) => {
                notify(`Connected to peer: ${evt.detail.toString()}`);
            });

            node.addEventListener('peer:disconnect', (evt) => {
                notify(`Disconnected from peer: ${evt.detail.toString()}`);
            });

            const pubsub = node.services.pubsub;
            if (pubsub) {
                pubsub.addEventListener("message", (evt) => {
                    const dataStr = uint8ArrayToString(evt.detail.data);
                    storeLog(`<<-- ${dataStr} on topic ${evt.detail.topic}`);
                    notify(`Received pubsub message on ${evt.detail.topic}: ${dataStr}`);
                });
                await pubsub.subscribe(topic);
                setPubsubAvailable(true);
                notify(`Subscribed to pubsub topic: ${topic}`);
            } else {
                notify("Libp2p pubsub unavailable");
            }
            
            nodeRef.current = node;
            setPeerID(node.peerId.toString());
            setConnected(true);
            notify(`Libp2p connected: ${node.peerId.toString()}`);
        } catch (e) {
            notify(`Error starting libp2p: ${e.message || e}`);
        }
    };

    const end = async () => {
        nodeRef.current = null;
        setConnected(false);
        setPubsubAvailable(false);
        setPeerID(null);
        notify("disconnected");
    };

    const find = async () => {
        if (!nodeRef.current) {
            notify("Connect Libp2p before finding a peer");
            return;
        }
        if (!otherPeerId) {
            notify("Enter a peer ID first");
            return;
        }
        try {
            const { peerIdFromString } = await import('@libp2p/peer-id');
            const anId = peerIdFromString(otherPeerId);
            await nodeRef.current.peerStore.get(anId);
            await nodeRef.current.dial(anId);
            notify(`Peer found and connected: ${otherPeerId}`);
        } catch (e) {
            notify(`Peer not found: ${e.message || e}`);
        }
    };

    const send = async () => {
        if (!nodeRef.current?.services.pubsub) {
            notify("Libp2p pubsub is unavailable");
            return;
        }
        if (!toSend) {
            notify("Enter a message first");
            return;
        }
        try {
            const { fromString } = await import("uint8arrays/from-string");
            await nodeRef.current.services.pubsub.publish(topic, fromString(toSend));
            storeLog("-->> " + toSend);
            notify(`Published pubsub message on ${topic}: ${toSend}`);
            setToSend('');
        } catch (e) {
            notify(`Pubsub publish error: ${e.message || e}`);
        }
    };

    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Libp2p
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    This page puts two browser nodes into the same small conversation. Start a Libp2p node, share its peer ID, watch discovery and connection events, and publish messages on the shared topic when a pubsub service is available.
                </Typography>

                <Box sx={{ mb: 3 }}>
                    {!connected ? (
                    <Button variant="contained" onClick={start}>Connect Libp2p</Button>
                    ) : (
                        <Button variant="outlined" onClick={end}>Disconnect</Button>
                    )}
                </Box>

                {connected && (
                    <>
                        <Typography variant="body2" sx={{ mb: 2, fontFamily: 'monospace' }}>
                            Your Peer ID: {peerID}
                        </Typography>
                        {!pubsubAvailable && (
                            <Typography variant="body2" sx={{ mb: 2 }}>
                                Libp2p is connected. Pubsub messaging is unavailable in this browser bundle.
                            </Typography>
                        )}

                        {pubsubAvailable && <TextField
                            fullWidth
                            label="other peer ID"
                            variant="outlined"
                            margin="normal"
                            value={otherPeerId}
                            onChange={(e) => setOtherPeerId(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={find}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />}

                        <Box 
                            sx={{ 
                                height: '300px', 
                                bgcolor: '#f0f0f0', 
                                p: 2, 
                                mt: 2, 
                                overflowY: 'auto',
                                fontFamily: 'monospace',
                                border: '1px solid #ccc'
                            }}
                        >
                            {log.map((v, i) => (
                                <div key={i}>{v}</div>
                            ))}
                        </Box>

                        {pubsubAvailable && <TextField
                            fullWidth
                            label="> To send"
                            variant="outlined"
                            margin="normal"
                            value={toSend}
                            onChange={(e) => setToSend(e.target.value)}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={send}>
                                        <SubdirectoryArrowLeftIcon />
                                    </IconButton>
                                ),
                            }}
                        />}
                    </>
                )}
            </Box>
        </Container>
    );
}
