//pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
pragma solidity ^0.8.9;

contract Inbox{
    string public mess;

    // function Inbox(string inte) public {
    //     mess = inte;
    // }

    constructor(string memory initialMessage) {
        mess = initialMessage;
    }
    
    function setMess(string memory inte) public {
        mess = inte;
    }
 
    // function getMess () public view returns (string) {
    //     return mess;
    // }

}