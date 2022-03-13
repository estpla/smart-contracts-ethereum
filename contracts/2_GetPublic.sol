// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract GetPublic {
  string public value;

  constructor() {
    value = "myValue";
  }

  function set(string memory _value) public {
    value = _value;
  }
}