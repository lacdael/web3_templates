"use client"

import * as React from 'react';
import { useState, useEffect } from "react";

import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

//import { create } from 'ipfs';
import { v4 as uuid } from 'uuid';
import ABI from "../../assets/eip712-sign.json";
import { useActionLog } from '../components/ActionConsole';

import {
	useWeb3ModalState,
	useWeb3Modal } from '@web3modal/wagmi/react'
import {
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

export default function Page( { callback } ) {
	return (
		<Eip712SignContent
			callback={callback} />
	);
}

function Eip712SignContent( props ) {

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
    const actionLog = useActionLog();

    const componentLog = (msg) => {
        console.log(msg);
        if (props.callback) props.callback("log", msg);
        else actionLog?.(`log: ${msg}`);
    };


    const end = async () => {
	componentLog("Wallet disconnected");
        props.callback?.( "message", "disconnected" );
        props.callback?.( "onlineState", false );
	disconnect();
    }


   /* useEffect(() => {
	if ( isDisconnected || !address){
        	props.callback?.( "onlineState", false );
	}
    }, [ isDisconnected ]);
*/

    useEffect(() => {

	if ( !modelIsOpen ) {
	    if ( isDisconnected && !isConnecting ) {
                componentLog("Wallet is disconnected");
                props.callback?.( "onlineState", false );
            }
	    else if ( !isDisconnected && !isConnecting ) {
                componentLog(`Wallet connected: ${address || "unknown"}`);
                props.callback?.( "onlineState", true );
            }
	}

    }, [ modelIsOpen ]);




    const stmp = () => {
        let d = new Date();
        return `${ d.getHours() }:${ d.getMinutes() }:${ d.getSeconds() }`;
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
	      // props.callback( "message", `Referal code: ${code}` );
              setReferalCode(`${code}`);
              componentLog(`Referral code received: ${code}`);
      }
	    } catch (e) {
		componentLog(`Referral code event error: ${e.message || e}`);
	    }
    }
  })

 useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: 'Sign',
    listener: ( data ) => {
	    try{
	const a = data[0]["args"]["_by"];
	const code = data[0]["args"]["_code"];
      if ( a === address ){

	      componentLog( `Submitted referral for code: ${code}` );
	      // props.callback( "message", `Submitted referal for code: ${code}` );
      }
	    } catch (e) {
		componentLog(`Sign event error: ${e.message || e}`);
	    }
    }
  })


    const contractGetReferalCode = async () => {
	componentLog("Requesting referral code");
	prepareWriteContract({
        	address: CONTRACT_ADDRESS,
                        abi: ABI,
                        functionName: 'getReferalCode',
                        args: [ ],
	        }).then( ({request}) => {
	        componentLog("Wallet request received; submitting referral code request");
                writeContract(request)
                    .then(() => componentLog("Referral code request submitted"))
                    .catch(e => componentLog(`Referral code transaction error: ${e.message || e}`));
	}).catch( e => componentLog(`Referral code error: ${e.message || e}`));
    }


    const contractSubmitReferal = async ( aCode , aV , aR , aS ) => {
	componentLog(`Submitting signed referral code ${aCode}`);
	prepareWriteContract({
        	address: CONTRACT_ADDRESS,
		abi: ABI,
		functionName: 'submitReferal',
		args: [ aCode, aV, aR, aS  ],
	        }).then( ({request}) => {
          	writeContract(request).then( (rsp) => {
			componentLog(`Wallet response received for referral submission: ${rsp?.hash || "submitted"}`);
			//const signer = ( "events" in r && "Signed" in r.events ) ? r.events.Signed.returnValues._by : "?";
            		//props.callback( "message", `Referal code signed by: ${signer}` );
       			//props.callback( "message", `Referal code: ${rsp["hash"]}` );
			//setState(prev => ({ ...prev, referalCode : `${rsp["hash"]}` }));
				}).catch( e => componentLog(`Referral submission error: ${e.message || e}`));
	}).catch( e => componentLog(`Referral submission error: ${e.message || e}`));

    }

    const contractGetSignings = async ( anAddress ) => {
	componentLog(`Requesting signing count for ${anAddress}`);
	readContract({
             address: CONTRACT_ADDRESS,
             abi: ABI,
             functionName: "signings",
             args: [ anAddress  ]
        }).then( (rsp) => {
			componentLog("Signing count response received");
            setState(prev =>(
			{ ...prev,
			signingData : JSON.stringify( rsp, (_, v) => typeof v === 'bigint' ? v.toString() : v , 2  )
		    }));
	}).catch( e => componentLog(`Signing count error: ${e.message || e}`));
    }

    const sign = async ( codeStr  ) => {
	componentLog(`Requesting EIP-712 signature for code ${codeStr}`);

        let aCode;
        try {
            aCode = parseInt( codeStr );
            if (Number.isNaN(aCode)) throw new Error("code must be a number");
        } catch( e  ) {
            componentLog(`Invalid referral code: ${e.message || e}`);
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

	let signature;
	try {
	    signature = await signTypedData({
	    	 domain,
		message,
		primaryType,
		types,
	    });
	} catch (e) {
	    componentLog(`EIP-712 signature error: ${e.message || e}`);
	    return;
	}
	componentLog("Wallet signature response received");
        const sig = signature.substring(2);
        const r = "0x" + sig.substring(0, 64);
        const s = "0x" + sig.substring(64, 128);
        const v = parseInt(sig.substring(128, 130), 16);

        componentLog(`Signature parsed (v=${v})`);
        contractSubmitReferal( aCode , v , r , s );

    	}

        return (
            <>


		<h1> EIP-712 Sign Referal</h1>
		<p>This example follows a referral code through a wallet signature. Request a code from the Sepolia contract, sign it with EIP-712, submit the signature, and look up how many times the code has been used.</p>
		<Button variant="outlined" onClick={address ? end : open}>
		    {address && !isDisconnected ? "Disconnect wallet" : "Connect wallet"}
		</Button>
		<br/>
		<br/>
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
