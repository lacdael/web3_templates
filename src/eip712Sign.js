import * as React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { create } from 'ipfs';
import { v4 as uuid } from 'uuid';
import abi from "./contracts/referals.json";
//0.8,7
const CONTRACT_ADDR = "0x72A6c6c4409404454c5b23eFeB93aB653F25336D";
const CONTRACT_NETWORK = "11155111";

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

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});


export default class EIP712Sign extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            referalCode: '',
            codeToSign: '',
            codeToCheck: '',
            signingData:''
        }
        this.web3 = null;
        this.c = null;

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // Check if the suplied props is changed
        if(prevProps.online !== this.props.online ) {
            if ( this.props.online ) this.start();
            else this.end();
        }
    }

    start = async () => {
        try{
            const provider = await web3Modal.connect();
            if ( ""+parseInt( provider.chainId , 16 ) === CONTRACT_NETWORK ) {

                this.web3 = new Web3(provider);
                // Subscribe to accounts change
                provider.on("accountsChanged", (accounts: string[]) => {
                    console.log(accounts);
                    this.setState({ address : accounts[0] });
                });

                // Subscribe to chainId change
                provider.on("chainChanged", (chainId: number) => {
                    console.log(chainId);
                });

                // Subscribe to provider connection
                provider.on("connect", (info: { chainId: number }) => {
                    console.log(info);
                });

                // Subscribe to provider disconnection
                provider.on("disconnect", (error: { code: number; message: string }) => {
                    console.log(error);
                });

                this.initContract();

                this.props.callback( "message", "connected");
            } else {
                this.props.callback( "message", "wrong network - use Sepolia");
            }

        } catch(e) {
            console.error(e);
        }
    }

    end = async () => {

        web3Modal.clearCachedProvider();
        this.setState({contract : "", ipfsOnline : false });
        this.props.callback( "message", "disconnected" );
    }

    stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

    initContract = async () =>  {
        this.c = new this.web3.eth.Contract( abi , CONTRACT_ADDR );
        this.setState({contract: CONTRACT_ADDR});

        const accounts = await this.web3.eth.requestAccounts();
        const addr = accounts[0];
        if ( addr ) {
            this.setState({ address : addr , contract : CONTRACT_ADDR });
        }

    }


    contractGetReferalCode = async () => {
        this.c.methods.getReferalCode( ).send({ from: this.state.address  }).then( ( r ) => {
            console.log(r);
            if ( "events" in r && "ReferalCode" in r.events ) {
                const code = r.events.ReferalCode.returnValues._code;
                this.props.callback( "message", `Referal code: ${code}` );
                this.setState({ referalCode : `${code}` });
            }
        } );
    }


    contractSubmitReferal = async ( aCode , aV , aR , aS ) => {
        this.c.methods.submitReferal(  aCode , aV , aR , aS ).send({ from: this.state.address  }).then( ( r ) => {
            const signer = ( "events" in r && "Signed" in r.events ) ? r.events.Signed.returnValues._by : "?";
            this.props.callback( "message", `Referal code signed by: ${signer}` );
        } );
    }

    contractGetSignings = async ( anAddress ) => {
        this.c.methods.signings( anAddress ).call().then( r => {
            this.setState({ signingData : JSON.stringify( r, null , 2  ) });
        } );
    }


    sign = async ( codeStr  ) => {

        let aCode;
        try {
            aCode = parseInt( codeStr );
        } catch( e  ) {
            return;
        }


        const msgParams = JSON.stringify({
            domain: {
                // Defining the chain aka Rinkeby testnet or Ethereum Main Net
                chainId: 11155111,
                // Give a user friendly name to the specific contract you are signing for.
                name: 'Referals',
                // If name isn't enough add verifying contract to make sure you are establishing contracts with the proper entity
                verifyingContract: '0xBC2BaCEF89a144acf941d2b24BfE674EdE6D832E',
                // Just let's you know the latest version. Definitely make sure the field name is correct.
                version: '1',
            },

            // Defining the message signing data content.
            message: {
                code: aCode,
            },
            // Refers to the keys of the *types* object below.
            primaryType: 'Referal',
            types: {
                // TODO: Clarify if EIP712Domain refers to the domain the contract is hosted on
                EIP712Domain: [
                    { name: 'name', type: 'string' },
                    { name: 'version', type: 'string' },
                    { name: 'chainId', type: 'uint256' },
                    { name: 'verifyingContract', type: 'address' },
                ],
                // Refer to PrimaryType
                Referal: [
                    { name: 'code', type: 'uint256' },
                ],
            },
        });

        var from = await this.web3.eth.getAccounts();

        var params = [from[0], msgParams];
        var method = 'eth_signTypedData_v4';

        this.web3.currentProvider.sendAsync(
            {
                method,
                params,
                from: from[0],
            },
            ( (err, result) => {
                if (err) return console.dir(err);
                if (result.error) {
                    alert(result.error.message);
                }
                if (result.error) return console.error('ERROR', result);
                console.log('TYPED SIGNED:' + JSON.stringify(result.result));

                const signature = result.result.substring(2);
                const r = "0x" + signature.substring(0, 64);
                const s = "0x" + signature.substring(64, 128);
                const v = parseInt(signature.substring(128, 130), 16);

                console.log( `${v} , ${r}, ${s}` );
                this.contractSubmitReferal( aCode , v , r , s );

            }
        ).bind(this)
        )}



    render(){
        return (
            <>
            <h1> EIP-712 Sign Referal</h1>
            <Button variant="contained" onClick={ e => this.contractGetReferalCode() } > Get Referal Code</Button>
            <div>{ this.state.referalCode }</div>
            <br/>
            <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="referal Code To Sign"
            onKeyUp={ e => this.setState({ codeToSign : e.target.value }) }
            onBlur={ e => this.setState({ codeToSign : e.target.value }) }

            InputProps={{
                endAdornment: (
                    <IconButton onClick={ e => this.sign( this.state.codeToSign ) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />
            <br/>
            <br/>
            <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="get address signature count"
            onKeyUp={ e => this.setState({ codeToCheck : e.target.value }) }
            onBlur={ e => this.setState({ codeToCheck : e.target.value }) }

            InputProps={{
                endAdornment: (
                    <IconButton onClick={ e => this.contractGetSignings( this.state.codeToCheck ) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />
            <div>{ this.state.signingData }</div>


            </>
        );
    }

}
