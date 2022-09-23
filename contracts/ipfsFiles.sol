pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract IPFSFiles is Ownable {

    mapping( address => string ) public cids;
    address[] public users;

    constructor() {

    }

    function getUsers() external returns ( address[] memory ) {
        return users;
    } 
    
    function addFile( string memory _cid ) external {

        cids[ msg.sender ] = _cid;
        for ( uint i = 0; i < users.length; i++){
            if ( users[ i ] == msg.sender ) return;
        }
        users.push( msg.sender );
    }

}
