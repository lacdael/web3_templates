'use client'

import * as React from 'react';
import { useState, useEffect } from "react";

import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

//import { create } from 'ipfs';
import { v4 as uuid } from 'uuid';
import ABI from "../assets/eip712-sign.json";

import { createWeb3Modal,
	defaultWagmiConfig,
	useWeb3ModalState,
	useWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiConfig,
	useContractEvent,
	useDisconnect,
	useAccount } from 'wagmi'
import { getContract,
    readContract,
    watchContractEvent,
    sendTransaction,
	signTypedData,
    signMessage,
    prepareWriteContract,
    writeContract
} from '@wagmi/core'


import { sepolia } from 'viem/chains'
//Solidity 0.8.7
const CONTRACT_ADDRESS = "0x72A6c6c4409404454c5b23eFeB93aB653F25336D";
const CONTRACT_NETWORK = "11155111";


/*
const providerOptions = {
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            'rpc' : { 11155111 : 'https://rpc-sepolia.rockx.com' },
            'network': 'Sepolia',
            'chainid': 11155111,
            infuraId: "INFURA_ID" // required
        }
    }
};
*/

/*
const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});

*/

export default function EIP712Sign( props ) {

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = props.vars['PROJECT_ID'];
//const projectId = "PROJECT_ID";// process.env.PROJECT_ID

//console.log( process.env );

// 2. Create wagmiConfig
const metadata = {
  name: 'EIP-712 Sign',
  description: 'EIP-712 Sign Example',
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

	return (
           <WagmiConfig config={wagmiConfig}> 
		<EIP712Sign_
			action={props.action}
			callback={props.callback} />
</WagmiConfig>
	);
}

function EIP712Sign_( props ) {

    const { address, isConnecting, isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    const [referalCode, setReferalCode] = useState('');
    const [state, setState] = useState({
            codeToSign: '',
            codeToCheck: '',
            signingData:''
        });
    const { open: modelIsOpen , selectedNetworkId } = useWeb3ModalState()
const { disconnect } = useDisconnect()


    const end = async () => {
	console.log("end");
        props.callback( "message", "disconnected" );
        props.callback( "onlineState", false );
	disconnect();
    }
   

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

 useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: 'ReferalCode',
    listener: ( data ) => {
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

 useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: 'Sign',
    listener: ( data ) => {
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


    const contractGetReferalCode = async () => {
	prepareWriteContract({
        	address: CONTRACT_ADDRESS,
                        abi: ABI,
                        functionName: 'getReferalCode',
                        args: [ ],
        }).then( ({request}) => {
        	writeContract(request).catch( e => props.callback( "message", `Error: ${e}` ));
	}).catch( e => props.callback( "message", `Error: ${e}` ));
    }


    const contractSubmitReferal = async ( aCode , aV , aR , aS ) => {
	prepareWriteContract({
        	address: CONTRACT_ADDRESS,
		abi: ABI,
		functionName: 'submitReferal',
		args: [ aCode, aV, aR, aS  ],
        }).then( ({request}) => {
        	writeContract(request).then( (rsp) => {
	    		console.log( rsp );
			//const signer = ( "events" in r && "Signed" in r.events ) ? r.events.Signed.returnValues._by : "?";
            		//props.callback( "message", `Referal code signed by: ${signer}` );
       			//props.callback( "message", `Referal code: ${rsp["hash"]}` );
			//setState(prev => ({ ...prev, referalCode : `${rsp["hash"]}` }));
                }).catch( e => props.callback( "message", `Error: ${e}` ));
	}).catch( e => props.callback( "message", `Error: ${e}` ));

    }

    const contractGetSignings = async ( anAddress ) => {
	readContract({
             address: CONTRACT_ADDRESS,
             abi: ABI,
             functionName: "signings",
             args: [ anAddress  ]
        }).then( (rsp) => {
            setState(prev =>(
		    { ...prev,
			signingData : JSON.stringify( rsp, (_, v) => typeof v === 'bigint' ? v.toString() : v , 2  )
		    }));
	});
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
		    onKeyUp={ e => setState(prev=>({...prev, codeToSign : e.target.value })) }
		    onBlur={ e => setState(prev=>({...prev, codeToSign : e.target.value })) }

		    InputProps={{
			endAdornment: (
			    <IconButton onClick={ e => sign( state.codeToSign ) } >
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
		    onKeyUp={ e => setState(prev =>({ ...prev,codeToCheck : e.target.value })) }
		    onBlur={ e => setState( prev =>({ ...prev,codeToCheck : e.target.value })) }

		    InputProps={{
			endAdornment: (
			    <IconButton onClick={ e => contractGetSignings( state.codeToCheck ) } >
			    <SubdirectoryArrowLeftIcon />
			    </IconButton>
			),
		    }} />
            	<div style={{margin:`1em`}} >{ state.signingData }</div>
            </>
        );
}
