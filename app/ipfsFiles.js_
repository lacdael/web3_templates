import * as React from 'react';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { create } from 'ipfs';

class IPFSFiles extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            addPath: '',
            addContent: '',
            addRslt: null,
            catPath: '',
            catRslt: null,
            lsPath:'',
            lsRslt: null,
            mkdirPath:'',
            startPath: '',
            statRsp: null,
            rmPath:'',
            readPath:'',
            readRslt:null,
            writePath:'',
            writeContent:'',
            lsFilesPath:'',
            lsFileRslt:null,
            publishPath:'',
            resolvePath:'',
            resolveRslt: [],
            history:[],
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.online !== this.props.online ) {
            console.log("componentDidUpdate");
            if ( this.props.online ) this.start();
            else this.end();
        }
    }

    start = async () => {
        try{
            this.node = await create( );
            this.props.callback( "message", this.node.isOnline() ? "connected" :  "disconnected" );
            this.props.callback( "ipfs",  this.node.isOnline()  );
        } catch(e) {
            console.error(e);
        }
    }

    end = async () => {
        await this.node.stop()
        this.props.callback( "message", "disconnected" );
        this.props.callback( "ipfs", false );
    }

    check = () => {
        return this.node.isOnline();
    }

    addFile = async ( path, content ) => {
        if ( ! this.check() && ( !path && ! content ) ) return;
        let data = {};
        if ( path ) data["path"] = path;
        if ( content ) data["content"] = content;

        const result = await this.node.add( data )
        this.setState( s => ({ addRslt: result, history: s.history.concat( result.cid.toString() ) } ) );
    }

    catFile = async ( path ) => {
        if ( ! this.check() && ! path ) return;
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
        this.setState({ catRslt :  new TextDecoder().decode( out ) });
    }

    lsFile = async( path ) => {
        if ( this.check() && ! path ) return;
        const arr = [];
        for await (const file of this.node.ls( path )) {
            arr.push( file );
            console.log(file.path)
        }
        this.setState({ lsRslt : arr });
    }

    mkdir = async( path ) => {
        if ( this.check() && ! path ) return;
        await this.node.files.mkdir( path );
    }

    stat = async( path ) => {
        if ( this.check() && ! path ) return;
        const stats = await this.node.files.stat( path )
        this.setState({ statRsp : `${ stats.type} ${ stats.size} bytes ` });
    }

    rm = async ( path ) => {
        if ( this.check() && ! path ) return;
        await this.node.files.rm( path )
    }

    read = async ( path ) => {
        if ( ! this.check() && ! path ) return;
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
        this.setState({ readRslt :  new TextDecoder().decode( out ) });
    }

    write = async ( path, content ) => {
        if ( ! this.check() || !path || ! content ) return;
        await this.node.files.write( path, content, { parents:true, create:true } );
    }

    ls = async( path ) => {
        if ( this.check() && ! path ) return;
        const arr = [];
        for await (const file of this.node.files.ls( path )) {
            arr.push( file );
            console.log( file );
        }
        this.setState({ lsFileRslt : arr });
    }

    publish = async ( path ) => {
        if ( this.check() && ! path ) return;
        const res = await this.node.name.publish( path )
        this.setState({ publishRslt : res });
    }

    resolve = async ( path ) => {
        if ( this.check() && ! path ) return;
        const arr = [];
        for await (const name of this.node.name.resolve( path )) {
            arr.push( name );
            console.log( name )
        }
        this.setState({ resolveRslt : arr });

    }

    render(){
        return (
            <>
                <h1>IPFS FILES API</h1>
                <h2>ipfs.add()</h2>

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
                <h2> ipfs.cat() </h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
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
                <div>
                    { this.state.catRslt }
                </div>
                <h2>ipfs.ls()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ lsPath : e.target.value }) }
                    onBlur={ e => this.setState({ lsPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.lsFile( this.state.lsPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />

                { this.state.lsRslt && <ul> { this.state.lsRslt.map( (a,j) => <i key={j}>{ a.type + " : " + a.path } </i> ) } </ul> }

                <h1>IPFS MUTABLE FILES API</h1>
                <h2>file.mkdir()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ mkdirPath : e.target.value }) }
                    onBlur={ e => this.setState({ mkdirPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.mkdir( this.state.mkdirPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <h2>file.stat()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ statPath : e.target.value }) }
                    onBlur={ e => this.setState({ statPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.stat( this.state.statPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div>
                    { this.state.statRsp }
                </div>
                <h2>file.rm()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ rmPath : e.target.value }) }
                    onBlur={ e => this.setState({ rmPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.rm( this.state.rmPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <h2>file.read()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ readPath : e.target.value }) }
                    onBlur={ e => this.setState({ readPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.read( this.state.readPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                { this.state.readRslt }
                <h2>file.write()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ writePath : e.target.value }) }
                    onBlur={ e => this.setState({ writePath : e.target.value }) }
                /> <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Content"
                    onKeyUp={ e => this.setState({ writeContent : e.target.value }) }
                    onBlur={ e => this.setState({ writeContent : e.target.value }) }

                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.write( this.state.writePath , this.state.writeContent ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <h2>file.ls()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ lsFilesPath : e.target.value }) }
                    onBlur={ e => this.setState({ lsFilesPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.ls( this.state.lsFilesPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                { this.state.lsFileRslt && <ul> { this.state.lsFileRslt.map( (a,j) => <i key={j}>{ a.type + " : " + a.name + " : " + a.cid.toString() } </i> ) } </ul> }

                <h1>IPFS NAME API</h1>
                <h2>name.publish()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ publishPath : e.target.value }) }
                    onBlur={ e => this.setState({ publishPath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.publish( this.state.publishPath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div>
                    { this.state.publishRslt && `${ JSON.stringify( this.state.publishRslt , null, 2 ) }`  }
                </div>
                <h2>name.resolve()</h2>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Path"
                    onKeyUp={ e => this.setState({ resolvePath : e.target.value }) }
                    onBlur={ e => this.setState({ resolvePath : e.target.value }) }
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={ e => this.resolve( this.state.resolvePath ) } >
                                <SubdirectoryArrowLeftIcon />
                            </IconButton>
                        ),
                    }}
                />
                <div>
                    { this.state.resolveRslt.length > 0 && <ul> { this.state.resolveRslt.map( (a,j) => <i key={j}>{ a } </i> ) } </ul> }
                </div>
                <hr/>
                { this.state.history && <ul> { this.state.history.map( (i,j) => <i key={j}>{ i } </i> ) } </ul> }
            </>
        );
    }

}

export default IPFSFiles;
