import * as React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

const PROVIDER_NETWORK = 'binance';
const PROVIDER_CHAIN_ID = 56;
const PROVIDER_RPC = { 56 : 'https://bsc-dataseed-binance.org/'};

const providerOptions = {
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



class Web3App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
        }
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


            //this.props.callback( "message", this.node.isOnline() ? "online" : "offline");
            //this.props.callback( "ipfs", this.node.isOnline() );
        } catch(e) {
            console.error(e);
        }
    }

    end = async () => {
        //this.props.callback( "message", "disconnected" );
        //this.props.callback( "ipfs", false );
    }

    stmp = () => {
        let d = new Date();
        return `${ d.getHours()  }:${ d.getMinutes() }:${ d.getSeconds() }`;
    }

    render(){
        return (
            <>
                <h1>WEB3</h1>

            </>
        );
    }

}

export default Web3App;
