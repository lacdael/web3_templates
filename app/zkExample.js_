import * as React from 'react';
//UI
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
//WEB3
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { create } from 'ipfs';
import { v4 as uuid } from 'uuid';
import abi from "./contracts/verifier.json";
//0.8,7
const CONTRACT_ADDR = "0x5ADC69669cFF2B9E6ffE56a3A8EFD31106203354"

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

export default class ZKExample extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            response: '',
            a: '',
            b: '',
        }
        this.web3 = null;
        this.c = null;

    }

    componentWillMount(){
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // Check if the suplied props is changed

        if(prevProps.online !== this.props.online ) {
            if ( this.props.online ) this.start();
            else this.end();
        }
    }


    prove = async () => {

        try{

            let signals = {
                a : parseInt(this.state.a),
                b : parseInt(this.state.b)
            }

            let output = [ signals["a"] * signals["b"] ];

 const { proof, publicSignals } =
      await window.snarkjs.groth16.fullProve( signals, "/assets/product.wasm", "/assets/product_0001.zkey");

    console.log( JSON.stringify(proof, null, 1) );

      let a = proof.pi_a.slice(0, 2) // pi_a
      let b = [ proof.pi_b[0].reverse(), proof.pi_b[1].reverse()] // pi_b
      let c = proof.pi_c.slice(0, 2) // pi_c


        console.log(`${JSON.stringify(a)},\n${JSON.stringify(b)},\n${JSON.stringify(c)},\n${ JSON.stringify(output)}`);

        this.c.methods.doProof(
            a,
            b,
            c,
            output
        ).send({from: this.state.address }).then( r => {
            this.setState( {  response: JSON.stringify( r , null , 2 ) });
            console.log( JSON.stringify( r , null , 2 ) );
        } );

        } catch (e) {
            console.error(`prove error ${e}`);
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

    render(){
        return (
            <>
            <h1> zkSNARK Example</h1>

 <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="input A"
            onKeyUp={ e => this.setState({ a : e.target.value }) }
            onBlur={ e => this.setState({ a : e.target.value }) }
            InputProps={{
                inputMode: 'numeric', pattern: '[0-9]*',
            }}
            />

            <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="input B"
            onKeyUp={ e => this.setState({ b : e.target.value }) }
            onBlur={ e => this.setState({ b : e.target.value }) }
            InputProps={{
                inputMode: 'numeric', pattern: '[0-9]*',
                endAdornment: (
                    <IconButton onClick={ e => this.prove(  ) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />
            <br/>
            <br/>
            <div>{ this.state.response }</div>


            </>
        );
    }

}
