import * as React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import ethProvider from "eth-provider";
import { create } from 'ipfs';

import abi from "./contracts/ipfsFilesList.json";

const PROVIDER_NETWORK = 'Sepolia';
const PROVIDER_CHAIN_ID = 11155111;
const PROVIDER_RPC = { 11155111 : 'https://rpc-sepolia.rockx.com'};

const providerOptions = {
    frame: {
        package: ethProvider, // required
        options: {
            rpc : PROVIDER_RPC,
            network : PROVIDER_NETWORK,
            chainId : PROVIDER_CHAIN_ID,
            infuraId: "INFURA_ID" // required
        }
    },
    walletconnect: {
        package: WalletConnectProvider, // required
        options: {
            rpc : PROVIDER_RPC,
            network : PROVIDER_NETWORK,
            chainId : PROVIDER_CHAIN_ID,
            infuraId: "INFURA_ID" // required
        }
    }
};

const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
});


const CONTRACT_ADDR = "0xEaa9b42a7c7D2e866EdA8b23d50894d510d1C3b5";
const CONTRACT_NETWORK = "11155111";


export default class IPFSContract extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ipfsOnline : false,
            contract: "",
            addPath: "",
            addContent:"",
            addRslt:null,
            ipfsFiles: [ ]
        }
        this.node = null;
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

                this.initIPFS();
                this.initContract();
                this.props.callback( "message", "connected");
            } else {
                this.props.callback( "message", "wrong network - use Sepolia");
            }

            //this.props.callback( "ipfs", this.node.isOnline() );
        } catch(e) {
            console.error(e);
        }
    }

    initIPFS = async () => {

        this.node = await create( );
        this.setState({ ipfsOnline: this.node.isOnline()  });
        this.props.callback( "message", this.node.isOnline() ? "online" : "offline");
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


    end = async () => {
        this.node.stop();
        web3Modal.clearCachedProvider();
        this.setState({contract : "", ipfsOnline : false });
        this.props.callback( "message", "disconnected" );
        //this.props.callback( "ipfs", false );
    }

    stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

    addFile = async ( path , content ) => {
        if ( ! this.node.isOnline() && ( !path && ! content ) ) return;
        let data = {};
        if ( path ) data["path"] = path;
        if ( content ) data["content"] = content;

        const result = await this.node.add( data )
        this.setState( s => ({ addRslt: result }) );
        this.c.methods.addFile( result.cid.toString() ).send({ from: this.state.address  }).then( () => {
            this.props.callback( "message", "file added" );
            console.log("file added");
        } );
    }

    getFiles = () => {
        //get
        this.c.methods.getUsers( ).call().then( r => {
            console.log("users"+JSON.stringify(r) );
            r.map( a => {
                console.log(`address : ${a}`);
                this.c.methods.cids( a ).call().then( r1 => {
                    const cid = r1;
                    console.log(`cid : ${cid}`);

                    this.setState({ipfsFiles: [ ... this.state.ipfsFiles ,  cid ] } );
                });
            });
        });
    }

    render(){
        return (
            <>
            <h2>ipfs : { this.state.ipfsOnline ? "online" : "offline" } </h2>
            <h2> contract : {this.state.contract.length > 0 ? this.state.contract.substring(0,5)+"..." : ""  } </h2>

            <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Path"
            onKeyUp={ e => this.setState({ addPath : e.target.value }) }
            onBlur={ e => this.setState({ addPath : e.target.value }) }
            /> <TextField
            fullWidth
            id="input-with-icon-textfield"
            label="Content"
            onKeyUp={ e => this.setState({ addContent : e.target.value }) }
            onBlur={ e => this.setState({ addContent : e.target.value }) }

            InputProps={{
                endAdornment: (
                    <IconButton onClick={ e => this.addFile( this.state.addPath , this.state.addContent ) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />
            <div>
            { this.state.addRslt && this.state.addRslt.cid.toString() }
            </div>
            <br/>
            <Button variant="contained" onClick={ this.getFiles } >Get Files</Button>
            <ul>
            { this.state.ipfsFiles.map( (f,i) => <li key={i}>{f}</li> ) }
            </ul>
            </>
        );
    }

}
