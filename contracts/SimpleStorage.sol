// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedValue;

    // Event that is emitted when the value changes
    event ValueChanged(uint256 newValue);

    // Store a new value
    function set(uint256 newValue) public {
        storedValue = newValue;
        emit ValueChanged(newValue);
    }

    // Retrieve the last stored value
    function get() public view returns (uint256) {
        return storedValue;
    }
}