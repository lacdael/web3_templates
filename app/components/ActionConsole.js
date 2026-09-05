"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const MAX_ENTRIES = 100;
const ActionLogContext = createContext(null);

function timestamp() {
  return new Date().toLocaleTimeString([], { hour12: false });
}

export default function ActionConsole({ entries, onClear }) {
  return (
    <Paper
      data-action-console
      component="section"
      elevation={3}
      sx={{ mt: 4, mb: 3, overflow: "hidden", bgcolor: "#101414", color: "#d8f3dc" }}
      aria-label="Action console"
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ px: 2, py: 1, bgcolor: "#1b2420" }}>
        <Typography variant="subtitle2" sx={{ fontFamily: "monospace", letterSpacing: 1 }}>
          ACTION CONSOLE
        </Typography>
        <Button
          data-console-control
          size="small"
          onClick={onClear}
          sx={{ color: "#b7d8bd", minWidth: 0 }}
        >
          Clear
        </Button>
      </Stack>
      <Box
        sx={{ height: 170, overflowY: "auto", p: 2, fontFamily: "monospace", fontSize: "0.8rem" }}
      >
        {entries.length === 0 ? (
          <Typography component="div" sx={{ color: "#7d9482", fontFamily: "inherit", fontSize: "inherit" }}>
            No actions yet.
          </Typography>
        ) : entries.map((entry, index) => (
          <Box component="div" key={`${entry.id}-${index}`} sx={{ lineHeight: 1.6, overflowWrap: "anywhere" }}>
            <Box component="span" sx={{ color: "#7d9482", mr: 1 }}>{entry.time}</Box>
            {entry.message}
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export function useActionEntries() {
  const [entries, setEntries] = useState([]);
  const idRef = useRef(0);

  const onLog = useCallback((message) => {
    setEntries((current) => [
      ...current,
      { id: idRef.current++, time: timestamp(), message: String(message) },
    ].slice(-MAX_ENTRIES));
  }, []);

  const onClear = useCallback(() => setEntries([]), []);

  return { entries, onLog, onClear };
}

export function ActionConsoleProvider({ onLog, children }) {
  return (
    <ActionLogContext.Provider value={onLog}>
      {children}
    </ActionLogContext.Provider>
  );
}

export function useActionLog() {
  return useContext(ActionLogContext);
}
