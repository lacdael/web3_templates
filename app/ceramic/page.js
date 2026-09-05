"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import definition from "../../assets/00-basicProfile-runtime.json";
import { useActionLog } from '../components/ActionConsole';

const CERAMIC_URL = process.env.NEXT_PUBLIC_CERAMIC_URL || "http://localhost:7007";
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

export default function CeramicPage({ callback }) {
  const [provider, setProvider] = useState(null);
  const [compose, setCompose] = useState(null);
  const [result, setResult] = useState({});
  const [status, setStatus] = useState("Not connected");
  const [profile, setProfile] = useState({ name: "John Doe", username: "User12345", description: "It's me", gender: "male", emoji: ":/" });
  const actionLog = useActionLog();
  const notify = (message) => {
    console.log(message);
    if (callback) callback("message", message);
    else actionLog?.(`message: ${message}`);
  };

  const connect = async () => {
    try {
      if (!projectId) {
        notify("NEXT_PUBLIC_PROJECT_ID is not configured");
        throw new Error("NEXT_PUBLIC_PROJECT_ID is not configured");
      }
      notify(`Connecting to Ceramic at ${CERAMIC_URL}`);
      const [{ default: UniversalProvider }, { DIDSession }, { EthereumWebAuth, getAccountId }, { ComposeClient }] = await Promise.all([
        import("@walletconnect/universal-provider"), import("did-session"), import("@didtools/pkh-ethereum"), import("@composedb/client")
      ]);
      const walletProvider = await UniversalProvider.init({ logger: "info", projectId, metadata: { name: "Web3 Templates Ceramic", description: "ComposeDB example", url: window.location.origin, icons: ["https://avatars.githubusercontent.com/u/37784886"] } });
      const [address] = await walletProvider.request({ method: "eth_requestAccounts" });
      const accountId = await getAccountId(walletProvider, address);
      const authMethod = await EthereumWebAuth.getAuthMethod(walletProvider, accountId);
      const client = new ComposeClient({ ceramic: CERAMIC_URL, definition });
      const session = await DIDSession.authorize(authMethod, { resources: client.resources });
      client.setDID(session.did);
      setProvider(walletProvider); setCompose(client); setStatus(`Connected: ${address}`);
      notify(`Ceramic connected with wallet ${address}`);
    } catch (error) {
      setStatus(error.message || "Unable to connect to Ceramic");
      notify(`Ceramic connection failed: ${error.message || error}`);
    }
  };

  const queryProfiles = async () => {
    if (!compose) return notify("Connect to Ceramic first");
    try {
      notify("Querying Ceramic Basic Profiles");
      const response = await compose.executeQuery("query { basicProfileIndex(first: 3) { edges { node { id name emoji gender username description } } } }");
      setResult(response);
      notify(response.errors ? "Ceramic query failed" : "Ceramic profiles loaded");
    } catch (error) {
      notify(`Ceramic query error: ${error.message || error}`);
    }
  };

  const createProfile = async () => {
    if (!compose) return notify("Connect to Ceramic first");
    try {
      const value = Object.fromEntries(Object.entries(profile).map(([key, item]) => [key, item.replaceAll('"', '\\"')]));
      notify(`Creating Ceramic profile for ${value.username}`);
      const response = await compose.executeQuery(`mutation { createBasicProfile(input: { content: { name: "${value.name}", username: "${value.username}", emoji: "${value.emoji}", description: "${value.description}", gender: "${value.gender}" } }) { document { id name emoji gender username description } } }`);
      setResult(response);
      notify(response.errors ? "Ceramic mutation failed" : "Ceramic profile created");
    } catch (error) {
      notify(`Ceramic mutation error: ${error.message || error}`);
    }
  };

  const disconnect = async () => {
    try {
      await provider?.disconnect?.();
      setProvider(null); setCompose(null); setStatus("Not connected");
      notify("Ceramic disconnected");
    } catch (error) {
      notify(`Ceramic disconnect error: ${error.message || error}`);
    }
  };

  return <Box sx={{ my: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>Ceramic</Typography>
    <Typography sx={{ mb: 2 }}>This example uses a wallet to open a ComposeDB session and work with a Basic Profile document. Query existing profiles, edit the fields, and create a new document against the Ceramic node configured below.</Typography>
    <Typography sx={{ mb: 2 }}>Ceramic endpoint: <code>{CERAMIC_URL}</code></Typography>
    <Button variant="contained" onClick={provider ? disconnect : connect}>{provider ? "Disconnect" : "Connect wallet"}</Button>
    <Typography sx={{ my: 2 }}>{status}</Typography>
    {provider && <>
      {Object.entries(profile).map(([key, value]) => <TextField key={key} fullWidth margin="normal" label={key} value={value} onChange={(event) => setProfile((current) => ({ ...current, [key]: event.target.value }))} />)}
      <Button sx={{ mr: 1 }} variant="outlined" onClick={queryProfiles}>Get data</Button><Button variant="outlined" onClick={createProfile}>Create profile</Button>
      <Box component="pre" sx={{ mt: 3, whiteSpace: "pre-wrap" }}>{JSON.stringify(result, null, 2)}</Box>
    </>}
  </Box>;
}
