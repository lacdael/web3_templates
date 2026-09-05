"use client"

import * as React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Web3 Templates
        </Typography>
        <Typography variant="body1" gutterBottom>
          These examples are small working environments for following data as it moves between a browser, a wallet, a contract, and the wider network. Select a context to begin:
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            ['/ipfs', 'IPFS'],
            ['/ipfsFiles', 'IPFS Files'],
            ['/ipfsSync', 'IPFS Sync'],
            ['/eip712', 'EIP-712 Sign'],
            ['/zkExample', 'zkSNARK'],
            ['/libp2p', 'Libp2p'],
            ['/ceramic', 'Ceramic'],
            ['/nostr', 'NoStr'],
          ].map(([href, label]) => (
            <Button key={href} variant="contained" component={Link} href={href}>{label}</Button>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
