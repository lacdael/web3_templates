"use client"

import "./globals.css";
import * as React from 'react';
import { useState } from "react";
import Link from 'next/link';

//UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ActionConsole, { ActionConsoleProvider, useActionEntries } from './components/ActionConsole';

import {
	createWeb3Modal,
	defaultWagmiConfig
	} from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { sepolia } from 'viem/chains'
import { HeliaProvider } from './components/HeliaProvider'

const theme = createTheme({
    palette: {
        primary: {
            main: green[500],
        },
        secondary: {
            main: '#11cb5f',
        },
    },
});

const CONTEXT_LIBP2P = "libp2p";
const CONTEXT_IPFS = "ipfs";
const CONTEXT_IPFS_SYNC = "ipfs-sync";
const CONTEXT_EIP712 = "eip712"; 
const CONTEXT_CONTRACT = "ipfs files list";
const CONTEXT_ZKEXAMPLE = "zk example";
const CONTEXT_CERAMIC = "ceramic"; 
const CONTEXT_NOSTR = "nostr"; 

const CONTEXT_ARRAY = [
	CONTEXT_IPFS,
	CONTEXT_CONTRACT,
	CONTEXT_IPFS_SYNC,
	CONTEXT_EIP712,
	CONTEXT_LIBP2P,
	CONTEXT_CERAMIC,
	CONTEXT_ZKEXAMPLE,
	CONTEXT_NOSTR
];

const CONTEXT_TO_PATH = {
    [CONTEXT_EIP712]: '/eip712',
    [CONTEXT_CERAMIC]: '/ceramic',
    [CONTEXT_CONTRACT]: '/ipfsFiles',
    [CONTEXT_IPFS]: '/ipfs',
    [CONTEXT_IPFS_SYNC]: '/ipfsSync',
    [CONTEXT_LIBP2P]: '/libp2p',
    [CONTEXT_ZKEXAMPLE]: '/zkExample',
};

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || 'YOUR_PROJECT_ID';

const metadata = {
  name: 'Web3 Templates',
  description: 'Web3 Templates Example',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [ sepolia ]
const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
})

createWeb3Modal({ wagmiConfig, projectId, chains })

export default function RootLayout({ children }) {
    const [showMenu, setShowMenu] = useState(false);
    const [message, setMessage] = useState(null);
    const { entries, onLog, onClear } = useActionEntries();

    const eventHandler = ( what , data ) => {
        onLog(`${what}: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
        switch( what ) {
            case "message": {
                setMessage( data );
            } break;
        }
    }

  return (
    <html lang="en">
      <body>
        <ActionConsoleProvider onLog={onLog}>
        <ThemeProvider theme={theme}>
            <HeliaProvider>
              <WagmiConfig config={wagmiConfig}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={ () => setShowMenu(true) }
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Web3 Templates
                            </Typography>
                            <Drawer
                                anchor="left"
                                open={ showMenu }
                                onClose={ () => setShowMenu(false) }
                            >
                                <List>
                                    { CONTEXT_ARRAY.map( ( s , i ) => (
                                        <ListItem disablePadding key={i} onClick={ () => setShowMenu(false) }>
                                            <Link href={CONTEXT_TO_PATH[s] || '#'} passHref style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                                <ListItemButton>
                                                    <ListItemText primary={ s } />
                                                </ListItemButton>
                                            </Link>
                                        </ListItem>
                                    ))}
                                </List>
                            </Drawer>
                        </Toolbar>
                    </AppBar>
                </Box>
                <Snackbar
                    open={ message != null }
                    autoHideDuration={4000}
                    onClose={ () => setMessage(null) }
                    message={ message }
                />
                <Container maxWidth="md">
                    {React.Children.map(children, child =>
                        React.cloneElement(child, { callback: eventHandler })
                    )}
                    <ActionConsole entries={entries} onLog={onLog} onClear={onClear} />
                </Container>
              </WagmiConfig>
            </HeliaProvider>
        </ThemeProvider>
        </ActionConsoleProvider>
      </body>
    </html>
  );
}
