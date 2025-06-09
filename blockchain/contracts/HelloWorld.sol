// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Defines a contract named `HelloWorld`.
contract HelloWorld {

    // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
    string public message;

    // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
    // Constructors are used to initialize the contract's data.
    constructor(string memory initMessage) {
        // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable.
        message = initMessage;
    }

    // A public function that accepts a string argument and updates the `message` storage variable.
    function update(string memory newMessage) public {
        message = newMessage;
    }
}
