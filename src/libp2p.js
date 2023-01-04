import * as React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';

import Button from '@mui/material/Button';

import { createLibp2p } from 'libp2p'
import { webSockets } from '@libp2p/websockets'
import { noise } from '@chainsafe/libp2p-noise'
import { mplex } from '@libp2p/mplex'
import { bootstrap } from '@libp2p/bootstrap'
import { webRTCStar } from '@libp2p/webrtc-star'
import { peerIdFromString } from '@libp2p/peer-id'
import { kadDHT } from '@libp2p/kad-dht'
import { fromString as uint8ArrayFromString } from "uint8arrays/from-string";
import { toString as uint8ArrayToString } from "uint8arrays/to-string";
import { floodsub } from '@libp2p/floodsub'

const webRtc = webRTCStar()

export default class Libp2p extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            peerID: null,
            otherPeerId:'',
            toSend:'',
            log : [],
        };
        this.topic = "rec-jdf89shfkj&";
        this.node = null;
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        // Check if the suplied props is changed

        if(prevProps.online !== this.props.online ) {
            if ( this.props.online ) this.start();
            else this.end();
        }
    }

    end = async () => {
        if ( null !== this.node  ) await this.node.stop();
    }

    start = async () => {
        if ( null !== this.node ) return;
        try {
            const wrtcStar = webRTCStar();
            this.node = await createLibp2p({
                addresses: {
                    // Add the signaling server address, along with our PeerId to our multiaddrs list
                    // libp2p will automatically attempt to dial to the signaling server so that it can
                    // receive inbound connections from other peers
                    listen: [
                        '/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star',
                        '/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star'
                    ]
                },
                transports: [
                    webSockets(),
                    wrtcStar.transport
                ],
                connectionEncryption: [noise()],
                streamMuxers: [mplex()],
                peerDiscovery: [
                    wrtcStar.discovery,
                    bootstrap({
                        list: [
                            '/dnsaddr/bootstrap.libp2p.io/p2p/QmNnooDu7bfjPFoTZYxMNLWUQJyrVwtbZg5gBMjTezGAJN',
                            '/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb',
                            '/dnsaddr/bootstrap.libp2p.io/p2p/QmZa1sAxajnQjVM8WjWXoMbmPd7NsWhfKsPkErzpm9wGkp',
                            '/dnsaddr/bootstrap.libp2p.io/p2p/QmQCU2EcMqAqQPR2i9bChDtGNJchTbq5TbXJJ16u19uLTa',
                            '/dnsaddr/bootstrap.libp2p.io/p2p/QmcZf59bWwK5XFi76CZX8cbJ4BhTzzA3gU1ZjYZcYW3dwt'
                        ]
                    })
                ],
                dht: kadDHT(),
            // we add the Pubsub module we want
	    pubsub: floodsub()
            }
            )

            // Listen for new peers
            this.node.addEventListener('peer:discovery', (evt) => {
                const peer = evt.detail
                //console.log(`Found peer ${peer.id.toString()}`)

                // dial them when we discover them
                this.node.dial(evt.detail.id).catch(err => {
                    console.log(`Could not dial ${evt.detail.id}`, err)
                })
            })


            // Listen for new connections to peers
            this.node.connectionManager.addEventListener('peer:connect', (evt) => {
                const connection = evt.detail
                console.log(`Connected to ${connection.remotePeer.toString()}`)
            })

            // Listen for peers disconnecting
            this.node.connectionManager.addEventListener('peer:disconnect', (evt) => {
                const connection = evt.detail
                //console.log(`Disconnected from ${connection.remotePeer.toString()}`)
            })

this.node.pubsub.addEventListener("message", (evt) => {
  //console.log(`data received: ${uint8ArrayToString(evt.detail.data)} on topic ${evt.detail.topic}`)
this.store( `<<-- ${uint8ArrayToString(evt.detail.data)} on topic ${evt.detail.topic}`)

})
await this.node.pubsub.subscribe(this.topic)


            this.props.callback( "message", "connected" );
            this.setState({ peerID : this.node.peerId.toString() });
        } catch( e ) {
            console.error(`error starting: ${e}`)
        }
    }


    find = async ( aPeerId ) => {
        //connect to peer
        const anId = peerIdFromString( aPeerId );
         const hasData = Boolean(this.node.peerStore.get( anId   ) )

        console.log(`has found peer: ${hasData}`);
    }

send = async ( msg ) => {

    this.node.pubsub.publish(this.topic, uint8ArrayFromString(msg)).catch(err => {
    console.error(err)
    }).then(() =>{
        this.store("-->> "+msg);
    });
}

    store = ( m  ) => {
        const arr = this.state.log;
        if ( arr.length > 50  ) arr.shift();
        arr.push(m);
        this.setState({ log: arr });
    }

    render(){

        return(
            <>
            <h1>Libp2p</h1>
            <div>{ this.state.peerID }</div>
            <TextField
            fullWidth
            label="other peer ID"
            onKeyUp={ e => this.setState({ otherPeerId: e.target.value }) }
            onBlur={ e => this.setState({ otherPeerId: e.target.value }) }
            InputProps={{
                endAdornment: (
                    <IconButton onClick={ e => this.find( this.state.otherPeerId) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />
            <div
                style={{ height:`10em`,background:`#ccc`,textAlign:`left` }}
            >
            { this.state.log.map( (v,i) => <><i key={i}>{v}</i><br/> </>  ) }
            </div>
<TextField
            fullWidth
            label="> To send"
            onKeyUp={ e => this.setState({ toSend: e.target.value }) }
            onBlur={ e => this.setState({ toSend: e.target.value }) }
            InputProps={{
                endAdornment: (
                    <IconButton onClick={ e => this.send( this.state.toSend) } >
                    <SubdirectoryArrowLeftIcon />
                    </IconButton>
                ),
            }}
            />

            </>
        );
    }





}



