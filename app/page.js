"use client"

import * as React from 'react';
//UI

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuList from '@mui/material/MenuList';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//Conponents
import EIP712Sign from './eip712Sign';
import Ceramic from './ceramic';
/*
import Libp2p from './libp2p';
import IPFSFiles from './ipfsFiles';
import IPFSSync from './ipfsSync';
import IPFSContract from './ipfsList';
import ZKExample from './zkExample';
*/

const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: green[500],
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#11cb5f',
        },
    },
});

const CONTEXT_LIBP2P = "libp2p";
const CONTEXT_IPFS = "ipfs";
const CONTEXT_IPFS_SYNC = "ipfs-sync";
const CONTEXT_EIP712 = "eip712-Sign";
const CONTEXT_CONTRACT = "ipfs files list";
const CONTEXT_ZKEXAMPLE = "zk example";
const CONTEXT_CERAMIC = "Ceramic Example";

const CONTEXT_ARRAY = [
	CONTEXT_IPFS,
	CONTEXT_CONTRACT,
	CONTEXT_IPFS_SYNC,
	CONTEXT_EIP712,
	CONTEXT_LIBP2P,
	CONTEXT_CERAMIC
];


class  App extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            action : false,
            showMenu: false,
            message: null,
            context: CONTEXT_IPFS,
        }
    }


 getContent( what ) {

     switch( this.state.context) {
        case CONTEXT_EIP712 : return <EIP712Sign
		     action={ this.state.action }
		     callback={ this.eventHandler.bind(this) } />
	case CONTEXT_CERAMIC : return <Ceramic
		     action={ this.state.action }
		     callback={ this.eventHandler.bind(this) } />
	//case CONTEXT_IPFS : return <IPFSFiles online={ this.state.online } callback={ this.eventHandler.bind(this) } />
	//case CONTEXT_CONTRACT : return <IPFSContract online={ this.state.online } callback={ this.eventHandler.bind(this) } />
        //case CONTEXT_IPFS_SYNC : return <IPFSSync online={ this.state.online } callback={ this.eventHandler.bind(this) } />
        //case CONTEXT_ZKEXAMPLE : return <ZKExample online={ this.state.online } callback={ this.eventHandler.bind(this) } />
        //case CONTEXT_LIBP2P : return <Libp2p online={ this.state.online } callback={ this.eventHandler.bind(this) } />
	     default: return <em>TODO: Migrate code </em>
   }
 
}


    eventHandler( what , data ) {
        switch( what ) {
            case "message": {
                this.setState({ message : data });
            } break;
            case "onlineState": {
                this.setState({ onlineState : data });
	    } break;
	    case CONTEXT_IPFS : {
                this.setState({ onlineState : data });
            } break;
        }
    }

    render(){
        return (
            <div className="App">
            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar
            ref={this.menuButtonRef}
            position="static">
            <Toolbar>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={ e => this.setState({showMenu:true})}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            </Typography>
            <Button color="inherit" onClick={ e => this.setState({ 'action': !this.state.action }) }>{ this.state.onlineState ? "stop" : "start" }</Button>
            <Drawer
            anchor="left"
            open={ this.state.showMenu }
            onClose={ e => this.setState({ showMenu : false })}
            >
            <List>
		{ CONTEXT_ARRAY.map( ( s , i ) => <ListItem disablePadding key={i}  onClick={ e=> { this.setState({context:s })  }  } >
            			<ListItemButton>
            				<ListItemText primary={ s } />
            			</ListItemButton>
            		</ListItem> ) }
            </List>
            </Drawer>

            </Toolbar>
            </AppBar>
            </Box>
            <Snackbar
            open={ this.state.message != null }
            autoHideDuration={4000}
            onClose={ e => this.setState({ message : null}) }
            message={ this.state.message }
            />
            <Container maxWidth="md">
            { this.getContent() }
            </Container>
            </ThemeProvider>
            </div>
        );
    }
}

export default App;
