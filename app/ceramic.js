'use client'

import * as React from 'react';
import { useState, useEffect } from "react";
/*****************/
/***Material UI***/
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
/****************/

/***Web 3.0******/
import { sepolia } from 'viem/chains'
import { createConfig, configureChains, mainnet } from '@wagmi/core'
import { createPublicClient, http } from 'viem'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { WagmiProvider,
	useContractEvent,
	useDisconnect,
	useWalletClient,
	useAccount } from 'wagmi'
import { getWalletClient } from '@wagmi/core'

import {
	useWeb3ModalState,
	useWeb3Modal } from '@web3modal/wagmi/react'
import { DIDSession } from 'did-session'
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'
import { ComposeClient } from '@composedb/client'
import { CeramicClient } from "@ceramicnetwork/http-client"

import definition from '@/assets/00-basicProfile-runtime.json'

const queryClient = new QueryClient()
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
//Solidity 0.8.7
const CONTRACT_ADDRESS = "0x72A6c6c4409404454c5b23eFeB93aB653F25336D";
const CONTRACT_NETWORK = "11155111";

const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [ sepolia ]
const config = defaultWagmiConfig({
  chains, // required
  projectId, // required
  metadata, // required
  enableWalletConnect: true, // Optional - true by default
  enableInjected: true, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
})

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: false
})

const ceramic = new CeramicClient("http://localhost:7007");

const composeClient = new ComposeClient({
  ceramic: "http://localhost:7007", definition });
        
const authenticateEthPKH = async ( provider, address, ceramic, compose ) => {
  const sessionStr = localStorage.getItem("ceramic:eth_did"); // for production you will want a better place than localStorage for your sessions.
  let session;

  if (sessionStr) {
    session = await DIDSession.fromSession(sessionStr);
  }
  if (!session || (session.hasSession && session.isExpired)) {
    // request ethereum accounts.
    const accountId = await getAccountId(provider, address );
    const authMethod = await EthereumWebAuth.getAuthMethod( provider, accountId);

    /**
     * Create DIDSession & provide capabilities for resources that we want to access.
     * @NOTE: The specific resources (ComposeDB data models) are provided through
     * "compose.resources" below.
     */

    session = await DIDSession.authorize(authMethod, { resources: compose.resources });
    // Set the session in localStorage.
    localStorage.setItem("ceramic:eth_did", session.serialize());
  }
  console.log(`did: ${ JSON.stringify( session.did , null , 2 ) }`);
  // Set our Ceramic DID to be our session DID.
  compose.setDID(session.did);
  ceramic.did = session.did;
  return;
};


export default function Cermamic( props ) {

    return (
           <WagmiProvider config={config}>
		<QueryClientProvider client={queryClient}>
			<Ceramic_
				action={props.action}
				callback={props.callback} />
	    	</QueryClientProvider>
	    </WagmiProvider>
	);
}

function Ceramic_( props ) {

    const { modelIsOpen , selectedNetworkId } = useWeb3ModalState()
    const { address, connector, isConnecting, isDisconnected } = useAccount()
    const [rslt, setRslt] = useState({});
    const [formName, setFormName] = useState("John Doei1");
    const [formUserName, setFormUserName] = useState("User12345");
    const [formDescription, setFormDescription] = useState("It's me");
    const [formGender, setFormGender] = useState("male");
    const [formEmoji, setFormEmoji] = useState(":/");
    
    const { open, close } = useWeb3Modal()

    useEffect(() => {
        try{
	if ( isDisconnected || !address){
        	props.callback( "onlineState", false );
	 } else 
        	props.callback( "onlineState", true );
	    } catch(e){
		console.log(e);
	    }
    }, [ isDisconnected ]);

    useEffect(() => {
        try{
		if ( !modelIsOpen || !isConnecting ) {
		open( );
		
		}
	    } catch(e){
		console.log(e);
	    }
    }, [ props.action ]);

const end = async () => {
	console.log("end");
    }

    const stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

    const start = async () => {
    
    }

    const startCeramic = () => {
	    if ( connector === undefined ) {
		   console.log( "Connector is undefined");
		    return
	    }
        connector.getProvider().then( ( provider ) => {
	   authenticateEthPKH( provider, address, ceramic, composeClient );
	} ).catch( e => error.log(e));
   }
    
    const getCeramicData = async () => {
	if ( ceramic.did === undefined ) return;
	const rslt = await composeClient.executeQuery(`
		query {
		 basicProfileIndex(first:3){
		    edges{
		      node{
			id
			name
			emoji
			gender
			username
			description
		      }
		    }
		  }
		}`);
	
	 setRslt( rslt );
    }
 
    
    const doCeramicMutation = async () => {
	if ( ceramic.did === undefined ) return;
	const update = await composeClient.executeQuery(`
            mutation { createBasicProfile(
	        input:{
	            content: {
		        name: "${formName}",
		        username: "${formUserName}",
		        emoji: "${formEmoji}",
		        description: "${formDescription}",
		        gender: "${formGender}"
		    }
	        }
            ) {
	    	document {
      		    id
                    name
                    emoji
                    gender
                    username
                    description
                }
            }
       }`);






//	mutation 
//          createBasicProfile($i: CreateBasicProfileInput! {
//            content: {
//              name: "${formName}"
//              username: "${formUserName}"
//              description: "${formDescription}"
//              gender: "${formGender}"
//              emoji: "${formEmoji}"
//            }
//          }) 
//      );
      if (update.errors) {
        alert(update.errors);
      } 
	console.log( update );
    }


    const styleDot = {
	    "height": `25px`,
	    "width": `25px`,
	    "backgroundColor": composeClient.did ? `green`: `red`,
	    "borderRadius": `50%`,
	    "display": `inline-block`
    }

    return (
	<>
		<h1> Ceramic</h1>
	    	<p>Start Ceramic node on <em>http://localhost:7007</em></p>
            	<br/>
     		<span style={styleDot}></span>
	    	<Button variant="contained" onClick={ e => startCeramic() } > Ceramic client init </Button>
	        <hr/>
     		<Button variant="contained" onClick={ e => getCeramicData() } > Get data </Button>
	    	<p>{ JSON.stringify( rslt, null, 2 ) }</p>
	    	<hr/>
	    

	    <TextField fullWidth id="input-name" label="Form: name"
		    onKeyUp={ e => setFormName( e.target.value ) }
		    onBlur={ e => setFormName( e.target.value ) }/>
 	    <TextField fullWidth id="input-username" label="Form: username"
		    onKeyUp={ e => setFormUserName( e.target.value ) }
		    onBlur={ e => setFormUserName( e.target.value ) }/>
 	    <TextField fullWidth id="input-description" label="Form: description"
		    onKeyUp={ e => setFormDescription( e.target.value ) }
		    onBlur={ e => setFormDescription( e.target.value ) }/>
 	    <TextField fullWidth id="input-gender" label="Form: gender"
		    onKeyUp={ e => setFormGender( e.target.value ) }
		    onBlur={ e => setFormGender( e.target.value ) }/>
 	    <TextField fullWidth id="input-emoji" label="Form: emoji"
		    onKeyUp={ e => setFormEmoji( e.target.value ) }
		    onBlur={ e => setFormEmoji( e.target.value ) }/>
		    <Button variant="contained" onClick={ e => doCeramicMutation() } > Do Mutation </Button>


	</>
    );
}
