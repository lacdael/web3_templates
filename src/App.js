import './App.css';
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
import Libp2p from './libp2p';
import IPFSFiles from './ipfsFiles';
import IPFSSync from './ipfsSync';
import IPFSContract from './ipfsList';
import EIP712Sign from './eip712Sign';
import ZKExample from './zkExample';

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
const CONTEXT_EIP712 = "eip712Sign";
const CONTEXT_CONTRACT = "web3_files";
const CONTEXT_ZKEXAMPLE = "zk_example";

class  App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            online : false,
            showMenu: false,
            message: null,
            context: CONTEXT_IPFS,
        }
    }

    eventHandler( what , data ) {
        switch( what ) {
            case "message": {
                this.setState({ message : data });
            } break;
            case CONTEXT_IPFS : {
                this.setState({ online : data });
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
            <Button color="inherit" onClick={ this.state.online ? e => this.setState({ online : false }) : e => this.setState({online: true}) }>{ this.state.online ? "stop" : "start" }</Button>
            <Drawer
            anchor="left"
            open={ this.state.showMenu }
            onClose={ e => this.setState({ showMenu : false })}
            >
            <List>
                       <ListItem disablePadding  onClick={ e=> { this.setState({online:false,context:CONTEXT_IPFS })  }  } >
            <ListItemButton>
            <ListItemText primary="ipfs-files" />
            </ListItemButton>
            </ListItem>
             <ListItem disablePadding onClick={ e=> { this.setState({online:false,context:CONTEXT_CONTRACT })  }  }>
            <ListItemButton>
            <ListItemText primary="ipfs-files list" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding  onClick={ e=> { this.setState({online:false,context:CONTEXT_IPFS_SYNC })  }  } >
            <ListItemButton>
            <ListItemText primary="ipfs-files sync" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding  onClick={ e=> { this.setState({online:false,context:CONTEXT_EIP712 })  }  } >
            <ListItemButton>
            <ListItemText primary="eip712-sign" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding  onClick={ e=> { this.setState({online:false,context:CONTEXT_ZKEXAMPLE })  }  } >
            <ListItemButton>
            <ListItemText primary="zkSNARK Example" />
            </ListItemButton>

            </ListItem>
 <ListItem disablePadding  onClick={ e=> { this.setState({online:false,context:CONTEXT_LIBP2P })  }  } >
            <ListItemButton>
            <ListItemText primary="libp2p chat" />
            </ListItemButton>
            </ListItem>

            </List>
            </Drawer>

            </Toolbar>
            </AppBar>
            </Box>
            <Snackbar
            open={ this.state.message != null }
            autoHideDuration={6000}
            onClose={ e => this.setState({ message : null}) }
            message={ this.state.message }
            />
            <Container maxWidth="sm">
            {
                this.state.context == CONTEXT_IPFS ?
                <IPFSFiles online={ this.state.online } callback={ this.eventHandler.bind(this) } /> :
                this.state.context === CONTEXT_CONTRACT ?
                <IPFSContract online={ this.state.online } callback={ this.eventHandler.bind(this) } /> :
                this.state.context === CONTEXT_IPFS_SYNC ?
                <IPFSSync online={ this.state.online } callback={ this.eventHandler.bind(this) } /> :
                this.state.context === CONTEXT_EIP712 ?
                <EIP712Sign online={ this.state.online } callback={ this.eventHandler.bind(this) } /> :
                this.state.context === CONTEXT_ZKEXAMPLE ?
                <ZKExample online={ this.state.online } callback={ this.eventHandler.bind(this) } /> :
                this.state.context === CONTEXT_LIBP2P ?
                <Libp2p online={ this.state.online } callback={ this.eventHandler.bind(this) } /> : null
            }
            </Container>
            </ThemeProvider>
            </div>
        );
    }
}

export default App;
