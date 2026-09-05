pragma solidity ^0.8.0;

import "./verifier.sol";

contract Prove is Verifier {

  event proved(address indexed _from, uint output, bool proved);

    constructor() {}

    function doProof(
         uint[2] memory a,
            uint[2][2] memory b,
            uint[2] memory c,
            uint[1] memory input
    ) public {
        emit proved(msg.sender, input[0], verifyProof( a,b,c,input ) );
    }
}
