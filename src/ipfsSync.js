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
import { v4 as uuid } from 'uuid';

import abi from "./contracts/ipfsFilesList.json";

const PROVIDER_NETWORK = 'Sepolia';
const PROVIDER_CHAIN_ID = 11155111;
const PROVIDER_RPC = { 11155111 : 'https://rpc-sepolia.rockx.com'};
const CONTRACT_ADDR = "0xEaa9b42a7c7D2e866EdA8b23d50894d510d1C3b5";
const CONTRACT_NETWORK = "11155111";

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


class IPFSSync extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            ipfsOnline : false,
            msgData:'',
            catPath: '',
            catRsp:'',
            publishCID: '',
            publishRsp: null,
            resolveCID: '',
            resolveRsp: null,
            msgs: {},
            addRsp: null,
            contractCID:'',
            ipnsFiles:[],
            mergedMsgs: {},
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

                this.initContract();
                //this.props.callback( "ipfs", this.node.isOnline() );


                this.node = await create( );
                this.setState({ ipfsOnline: this.node.isOnline()  });
                this.props.callback( "message", this.node.isOnline() ? "online" : "offline");
            } else {
                this.props.callback( "message", `wrong network - use ${ PROVIDER_NETWORK }`);
            }

        } catch(e) {
            console.error(e);
        }
    }

    end = async () => {

        this.node.stop();
        this.web3Modal.clearCachedProvider();
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

    contractAddFile = async ( ipnsCID ) => {
        this.c.methods.addFile( ipnsCID ).send({ from: this.state.address  }).then( () => {
            this.props.callback( "message", "file added" );
            console.log("file added");
        } );
    }

    contractGetFiles = () => {
        //get
        this.c.methods.getUsers( ).call().then( r => {
            console.log("users"+JSON.stringify(r) );
            r.map( a => {
                console.log(`address : ${a}`);
                this.c.methods.cids( a ).call().then( r1 => {
                    const cid = r1;
                    console.log(`cid : ${cid}`);

                    this.setState({ipnsFiles: [ ... this.state.ipnsFiles ,  cid ] } );
                });
            });
        });
    }

    submitMsg = async () => {
        let tmp = {};

        tmp[ uuid() ] = { time : this.stmp() , text : this.state.msgData };
        this.setState(s => ({ msgs : { ... s.msgs, ... tmp } }) );

    }

    addFile = async ( path, content ) => {
        if ( ! this.node.isOnline() || !path || ! content ) return;
        let data = {};
        if ( path ) data["path"] = path;
        if ( content ) data["content"] = content;
        const result = await this.node.add( data )
        this.setState({ addRsp : result });
    }

    catFile = async ( path ) => {
        if ( ! this.node.isOnline() && ! path ) return;
        let arr = [];
        let length = 0;
        for await (const chunk of this.node.cat( path ) ) {
            arr.push( chunk);
            length += chunk.length;
        }
        let out = new Uint8Array( length );
        let ptr = 0;
        arr.forEach(item => {
            out.set( item, ptr );
            ptr += item.length;
        });
        this.setState({ catRsp :  new TextDecoder().decode( out ) });
    }



    ls = async( path ) => {
        if ( ! this.node.isOnline() || ! path ) return;
        const arr = [];
        for await (const file of this.node.files.ls( path )) {
            arr.push( file );
        }
        this.setState({ lsRsp : arr });
    }

    readFile = async ( path ) => {
        if ( ! this.node.isOnline() && ! path ) return;
        let arr = [];
        let length = 0;
        for await (const chunk of this.node.files.read( path ) ) {
            arr.push( chunk);
            length += chunk.length;
        }
        let out = new Uint8Array( length );
        let ptr = 0;
        arr.forEach(item => {
            out.set( item, ptr );
            ptr += item.length;
        });
        this.setState({ readRsp :  new TextDecoder().decode( out ) });
    }

    publish = async ( path ) => {
        if ( ! this.node.isOnline() && ! path ) return;
        const res = await this.node.name.publish( path )
        this.setState({ publishRsp : res });
    }

    resolve = async ( path ) => {
        if ( this.node.isOnline() && ! path ) return;
        const arr = [];
        for await (const name of this.node.name.resolve( path )) {
            arr.push( name );
            console.log( name )
        }
        this.setState({ resolveRsp : arr });

    }

    merge = async () => {
        try {
        const arr = this.state.ipnsFiles;
        let msgs = Object.assign( {} , this.state.msgs);

        for ( let i = 0; i < arr.length; i++ ) {
            const arr2 = [];
            for await (const name of this.node.name.resolve( arr[i] )) {
                arr2.push( name );
                console.log( name )
            }
            for ( let j = 0 ; j < arr2.length; j++ ) {
                //cat
                let arr3 = [];
                let length = 0;
                for await (const chunk of this.node.cat( arr2[j] ) ) {
                    arr3.push( chunk);
                    length += chunk.length;
                }
                let out = new Uint8Array( length );
                let ptr = 0;
                arr3.forEach(item => {
                    out.set( item, ptr );
                    ptr += item.length;
                });

                let obj = JSON.parse( new TextDecoder().decode( out ) );

                for ( let key in obj ) {
                    if ( ! ( key in msgs ) ) {
                        msgs[ key ] = obj[ key ];
                    }
                }

            }
        }
            this.setState({ mergedMsgs : msgs });

        } catch ( e ) {
            console.error(`merge failed ${ e }`);
        }
    }


    render(){
        return (
            <>
                <h1>IPFS Files Sync</h1>
                <h2>ipfs : { this.state.ipfsOnline ? "online" : "offline" } </h2>
                <TextField
                    fullWidth
                    label="message"
                    onKeyUp={ e => this.setState({ msgData : e.target.value }) }
                    onBlur={ e => this.setState({ msgData : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ this.submitMsg } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div> { this.state.msgs && JSON.stringify( this.state.msgs , null , 2 ) } </div>

                <Button variant="contained" onClick={ e => this.addFile("/db.json", JSON.stringify( this.state.msgs ) ) } >Write File</Button>

                <div> { this.state.addRsp && this.state.addRsp.path + " : " + this.state.addRsp.cid.toString() } </div>

                <br/>
                <TextField
                    fullWidth
                    label="file CID to cat"
                    onKeyUp={ e => this.setState({ catPath : e.target.value }) }
                    onBlur={ e => this.setState({ catPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.catFile( this.state.catPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div> { this.state.catRsp } </div>
                <br/>
                <TextField
                    fullWidth
                    label="file CID to publish"
                    onKeyUp={ e => this.setState({ publishCID : e.target.value }) }
                    onBlur={ e => this.setState({ publishCID : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.publish( this.state.publishCID ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div> { this.state.publishRsp && JSON.stringify( this.state.publishRsp, null , 2 ) } </div>
                <br/>
                <TextField
                    fullWidth
                    label="IPNS CID"
                    onKeyUp={ e => this.setState({ resolveCID : e.target.value }) }
                    onBlur={ e => this.setState({ resolveCID : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.resolve( this.state.resolveCID ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div> { this.state.resolveRsp && JSON.stringify( this.state.resolveRsp ) } </div>

                <h2>Contract interaction</h2>
                <TextField
                    fullWidth
                    label="IPNS CID to submit"
                    onKeyUp={ e => this.setState({ contractCID : e.target.value }) }
                    onBlur={ e => this.setState({ contractCID : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.contractAddFile( this.state.contractCID ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <br/>
                <br/>

                <Button variant="contained" onClick={ this.contractGetFiles } >Get IPNS hashes from contract</Button>

                <ul> { this.state.ipnsFiles.map( (v,i) => <li key={i} >{ v } </li> ) }  </ul>

                <Button variant="contained" onClick={ this.merge } >Merge</Button>

                <div> { this.state.mergedMsgs && JSON.stringify( this.state.mergedMsgs , null , 2 ) } </div>
            </>
        );
    }

}
export default IPFSSync;
