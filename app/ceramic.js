'use client'

import * as React from 'react';
import { useState, useEffect } from "react";
import UniversalProvider from '@walletconnect/universal-provider'
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { sepolia } from 'viem/chains'

import {
	createWeb3Modal,
	defaultWagmiConfig
	} from '@web3modal/wagmi/react'
import { WagmiConfig,
	useContractEvent,
	useDisconnect,
	useAccount } from 'wagmi'

import { DIDSession } from 'did-session'
import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'
import { ComposeClient }from '@composedb/client'

//Solidity 0.8.7
const CONTRACT_ADDRESS = "0x72A6c6c4409404454c5b23eFeB93aB653F25336D";
const CONTRACT_NETWORK = "11155111";

//THIS IS THE PROVIDER
//https://0.12.x.wagmi.sh/react/hooks/usePublicClient

export default function Cermamic( props ) {

    const projectId = props.vars['PROJECT_ID'];
    const [_online, set_Online] = useState(false);

    const end = async () => {
	console.log("end");
    }

    // 2. Create wagmiConfig
    const metadata = {
	  name: 'Ceramic test',
	  description: 'Ceramic test',
	  icons: ['https://avatars.githubusercontent.com/u/37784886']
    }

    const chains = [ sepolia ]
    const wagmiConfig = defaultWagmiConfig({
      chains,
      projectId,
      metadata,
    })

    // 3. Create modal
    createWeb3Modal({ wagmiConfig, projectId, chains })

    useEffect(() => {
	console.log('Button press: ${props.action}');
    	if ( props.action && !_online ) {
		set_Online( true );
		start();
	}
    }, [ props.action ]);

    const stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

    const start = async () => {
        const ethProvider = await UniversalProvider.init({
            logger: 'info',
	    //relayUrl: 'ws://<relay-url>',
	    projectId: projectId,
	    metadata: {
	       name: 'React App',
	       description: 'React App for WalletConnect',
	       url: 'https://walletconnect.com/',
	       icons: ['https://avatars.githubusercontent.com/u/37784886']
	    },
            client: undefined // optional instance of @walletconnect/sign-client
        })

	const addresses = await ethProvider.request({ method: 'eth_requestAccounts' })
        const accountId = await getAccountId(ethProvider, addresses[0])
        const authMethod = await EthereumWebAuth.getAuthMethod(ethprovider, accountId)
	const compose = new ComposeClient({ ceramic: 'http://localhost:7007', definition })
        const session = await DIDSession.get(accountId, authMethod, { resources: compose.resources})
        compose.setDID(session.did)
	
	const rslt = await compose.executeQuery(`
		query {
		 basicProfileIndex(first:2){
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
    
    return (
           <WagmiConfig config={wagmiConfig}> 
		<Ceramic_
			action={props.action}
			callback={props.callback} />
</WagmiConfig>
	);

}




function Ceramic_( props ) {

    const [rslt, setRslt] = useState({});
    return (
	<>
		<h1> Ceramic</h1>
	    	<p>Start Ceramic node on <em>http://localhost:7007</em></p>
            	<br/>
	    	<p>{ JSON.stringify( rslt, null, 2 ) }</p>
        </>
    );
}
