"use client"

import React, { useEffect, useRef, useMemo } from 'react';
import { NostrProvider, useNostrEvents, dateToUnix } from 'nostr-react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NOSTR_IMG from '../components/nostr.png';
import { useActionLog } from '../components/ActionConsole';

function TextWithBreaks({ text }) {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </>
  );
}


const Note = ({ content, created_at, id, tags = [] }) => {
    const imageTags = tags.filter(tag => tag[0] === 'r');
    const imageUrls = imageTags.map(tag => tag[1]);
    return (
        <Card key={id} sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="caption" color="text.secondary" component="div" sx={{ mb: 1 }}>
                    {new Date(created_at * 1000).toLocaleString()}
                </Typography>
                <Typography component="div" sx={{ whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                    <TextWithBreaks text={content} />
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, px: 2, pb: 2 }}>
                {imageUrls.map((url, index) => (
                    <Box
                        component="img"
                        src={url}
                        alt={`Note Image ${index + 1}`}
                        key={index}
                        sx={{
                            maxWidth: '100%',
                            width: { xs: '100%', sm: 'auto' },
                            maxHeight: 360,
                            objectFit: 'contain',
                        }}
                    />
                ))}
            </Box>
        </Card>
    );
};

const publicKey = "0a69cf2560597cd4dfff9a75f40261d902a91b139cdacea10d54a52b43219250";

const relays = [
        'wss://relay.damus.io',
        'wss://nostr-pub.wellorder.net',
	"wss://relay.nostr.bg",
	"wss://nos.lol",
    ];

const getTwoMonthsAgoTimestamp = () => {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);
  return now;//Math.floor(now.getTime() / 1000); // Convert to Unix timestamp
};

const ProfileFeed = ({ callback }) => {
  const actionLog = useActionLog();
  const sinceRef = useRef(getTwoMonthsAgoTimestamp());

  const { events = [], isLoading, error } = useNostrEvents({
    filter: {
      authors: [publicKey],
      since: dateToUnix(sinceRef.current),
      limit: 10,
      kinds: [1],
    },
  });
  useEffect(() => {
    if (error) {
      const message = `Nostr relay error: ${error.message || error}`;
      console.error(message);
      if (callback) callback("log", message);
      else actionLog?.(`log: ${message}`);
    }
  }, [error]);

  const filtered = useMemo(() => {
    if (!Array.isArray(events)) return [];
    return events.filter((event) => {
      if (!event || !Array.isArray(event.tags)) return true;
      return !event.tags.some((tag) => tag?.[0] === "e");
    });
  }, [events]);

  if (error) {
    return <Typography sx={{ py: 2 }}>Failed to load posts.</Typography>;
  }

  return (
    <Box sx={{ px: { xs: 1, sm: 2 } }}>
      <Typography variant="body1" sx={{ pt: 2, mb: 1 }}>
        This page reads a public Nostr feed from several relays and presents the returned notes as a small timeline. The feed is deliberately simple so the relay-backed nature of the data remains visible.
      </Typography>
      <FeedHeader
        callback={callback}
        email="c.lacdael@poetry.me.uk"
        publicKey="npub1pf5u7ftqt97dfhllnf6lgqnpmyp2jxcnnndvaggd2jjjksepjfgqwrpnfw"
      />
      {isLoading && filtered.length === 0 && (
        <Typography sx={{ py: 2 }}>Fetching Nostr posts...</Typography>
      )}
      {!isLoading && filtered.length === 0 && (
        <Typography sx={{ py: 2 }}>No posts found.</Typography>
      )}
      {filtered.map((e) => (
        <Note key={e.id ?? Math.random()} {...e} />
      ))}
    </Box>
  );
};



const FeedHeader = ({ email, publicKey, callback }) => {
    const actionLog = useActionLog();
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        }, (err) => {
            const message = `Could not copy text: ${err.message || err}`;
            console.error(message);
            if (callback) callback("log", message);
            else actionLog?.(`log: ${message}`);
        });
    };

    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            alignItems={{ xs: 'flex-start', sm: 'center' }}
            sx={{ py: 3 }}
        >
            <Box component="img" src={NOSTR_IMG} alt="Nostr" sx={{ width: 64, height: 64 }} />
            <Stack spacing={0.5} sx={{ minWidth: 0 }}>
                <Typography>
                    <Box component="strong">Nostr:&nbsp;</Box>{email}
                </Typography>
                <Stack direction="row" spacing={0.5} alignItems="center" sx={{ minWidth: 0 }}>
                    <Typography sx={{ flexShrink: 0 }}>
                        <Box component="strong">Pub:&nbsp;</Box>
                    </Typography>
                    <Typography noWrap sx={{ minWidth: 0, textOverflow: 'ellipsis', overflow: 'hidden' }}>
                        {publicKey}
                    </Typography>
                    <Tooltip title="Copy public key">
                        <IconButton aria-label="Copy public key" size="small" onClick={() => copyToClipboard(publicKey)}>
                            <ContentCopyIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
        </Stack>
    );
};




export default function Page({ callback }) {
  return (
    <NostrProvider relayUrls={relays} debug={true}>
      <ProfileFeed callback={callback} />
  </NostrProvider>
 );
}
