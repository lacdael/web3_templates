'use client'

import * as React from 'react';
import { useState, useEffect } from "react";

/****Material UI****/
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
/*****************/

/*****WEB 3.0*****/
import { v4 as uuid } from 'uuid';
import ABI from "../assets/eip712-sign.json";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { sepolia } from 'wagmi/chains'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
	useWeb3ModalState,
	useWeb3Modal } from '@web3modal/wagmi/react'
import {
	useReadContract,
	useWriteContract,
	useWatchContractEvent,
	useDisconnect,
	useAccount } from 'wagmi'
import {
    signTypedData,
    signMessage,
} from '@wagmi/core'
/*****************/

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

export default function EIP712Sign( props ) {
	
	return (
		<WagmiProvider config={config}>
      			<QueryClientProvider
				client={queryClient}>
				<EIP712Sign_
					action={props.action}
					callback={props.callback} />
			</QueryClientProvider>
    		</WagmiProvider>
	);
}

function EIP712Sign_( props ) {

    const { address, isConnecting, isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    const [referalCode, setReferalCode] = useState('');
    const [codeToCheck, setCodeToCheck] = useState('');
    const [signingData, setSigningData ] = useState('');
    const { open: modelIsOpen , selectedNetworkId } = useWeb3ModalState()
    const { disconnect } = useDisconnect()
    const { hash, writeContract } = useWriteContract()

    const end = async () => {
	console.log("end");
        props.callback( "message", "disconnected" );
        props.callback( "onlineState", false );
	disconnect();
    }

    const wagmiContractConfig = { address: CONTRACT_ADDRESS,abi: ABI };

    const { 
    	data,
	refetch,
    	error, 
    	isPending 
    } = useReadContract({
	...wagmiContractConfig,
	functionName: "signings",
    	args: [ codeToCheck ],
	});

    useEffect( () => {
	setSigningData( JSON.stringify( data, (_, v) => typeof v === 'bigint' ? v.toString() : v , 2  ) );
    }, [ data ] );

    useEffect(() => {
	if ( isDisconnected || !address){
        	props.callback( "onlineState", false );
	}
    }, [ isDisconnected ]);
    

    //Button press
    useEffect(() => {
	    try{
    	
	if ( !modelIsOpen || !isConnecting ) {

		if ( address && ! isDisconnected ) {
			open( );
			
		} else {
			open();
		}
	}
	    } catch(e){
		console.log(e);
	    }

    }, [ props.action ]);
    
    useEffect(() => {
    	
	if ( !modelIsOpen ) {
	    if ( isDisconnected && !isConnecting ) props.callback( "onlineState", false );
	    else if ( !isDisconnected && !isConnecting ) props.callback( "onlineState", true );
	}

    }, [ modelIsOpen ]);


 


    const stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: 'ReferalCode',
    onLogs ( data ) {
	    try{
	const a = data[0]["args"]["_to"];
	const code = data[0]["args"]["_code"];
      if ( a === address ){
	      props.callback( "message", `Referal code: ${code}` );
              setReferalCode(`${code}`);
      }
	    } catch (e) {
		console.error(e);
	    }
    }
  })

useWatchContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: 'Sign',
    onLogs ( data ) {
	    try{
		    console.log("Sign event");
		    console.log( data );
	const a = data[0]["args"]["_by"];
	const code = data[0]["args"]["_code"];
      if ( a === address ){
	      
	      console.log( `Submitted referal for code: ${code}` );
	      props.callback( "message", `Submitted referal for code: ${code}` );
      }
	    } catch (e) {
		console.error(e);
	    }
    }
  })


    const contractGetReferalCode = () => {
	writeContract({
        	address: CONTRACT_ADDRESS,
                        abi: ABI,
                        functionName: 'getReferalCode',
                        args: [ ],
        });
    }


    const contractSubmitReferal = ( aCode , aV , aR , aS ) => {
	writeContract({
        	address: CONTRACT_ADDRESS,
		abi: ABI,
		functionName: 'submitReferal',
		args: [ aCode, aV, aR, aS  ],
        });
    }

    const contractGetSignings = ( aCodeToCheck ) => {
	readContract({
        address: CONTRACT_ADDRESS,
        abi: ABI,
        functionName: "signings",
    	args: [ aCodeToCheck ],
	}).then( ( data ) => {
	    setState(prev => (
		{ ...prev,
		signingData : JSON.stringify( data, (_, v) => typeof v === 'bigint' ? v.toString() : v , 2  )
	    }));
	}).catch( (e) => error.log( e ) );
    }

    const sign = async ( codeStr  ) => {

        let aCode;
        try {
            aCode = parseInt( codeStr );
        } catch( e  ) {
            return;
        }

        const domain = {
                // Defining the chain aka Rinkeby testnet or Ethereum Main Net
                chainId: 11155111,
                // Give a user friendly name to the specific contract you are signing for.
                name: 'Referals',
                // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
                verifyingContract: '0xBC2BaCEF89a144acf941d2b24BfE674EdE6D832E',
                // Just let's you know the latest version. Definitely make sure the field name is correct.
                version: '1',
            };
	const message = {
                code: aCode,
        };
            // Refers to the keys of the *types* object below.
        const primaryType = 'Referal'
        const types = {
                // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
                /*EIP712Domain: [
                    { name: 'name', type: 'string' },
                    { name: 'version', type: 'string' },
                    { name: 'chainId', type: 'uint256' },
                    { name: 'verifyingContract', type: 'address' },
                ],*/
                // Refer to PrimaryType
                Referal: [
                    { name: 'code', type: 'uint256' },
                ],
        };
        
	const signature = await signTypedData({
  		domain,
		message,
		primaryType,
		types,
	});
	
        console.log('TYPED SIGNED:' + JSON.stringify(signature));
        const sig = signature.substring(2);
        const r = "0x" + sig.substring(0, 64);
        const s = "0x" + sig.substring(64, 128);
        const v = parseInt(sig.substring(128, 130), 16);

        console.log( `${v} , ${r}, ${s}` );
        contractSubmitReferal( aCode , v , r , s );

    	}

        return (
            <>


		<h1> EIP-712 Sign Referal</h1>
            	<Button variant="contained" onClick={ e => contractGetReferalCode() } > Get Referal Code</Button>
            	<div style={{margin:`1em`}} >{ referalCode }</div>
            	<br/>
            	<TextField
		    fullWidth
		    id="input-with-icon-textfield"
		    label="referal Code To Sign"
		    onKeyUp={ e => setCodeToSign( e.target.value ) }
		    onBlur={ e => setCodeToSign( e.target.value ) }

		    InputProps={{
			endAdornment: (
			    <IconButton onClick={ e => sign( codeToSign ) } >
			    <SubdirectoryArrowLeftIcon />
			    </IconButton>
			),
		    }} />
            	<br/>
            	<br/>
            	<TextField
		    fullWidth
		    id="input-with-icon-textfield"
		    label="Enter referal code - get address signature count"
		    onKeyUp={ e => setCodeToCheck( e.target.value ) }
		    onBlur={ e => setCodeToCheck( e.target.value ) }

		    InputProps={{
			endAdornment: (
			    <IconButton onClick={ e => refetch() } >
			    <SubdirectoryArrowLeftIcon />
			    </IconButton>
			),
		    }} />
            	<div style={{margin:`1em`}} >{ signingData }</div>
            </>
        );
}
