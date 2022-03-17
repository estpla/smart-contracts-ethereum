// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract GetSet {
  string value;

  constructor() {
    value = "myValue";
  }

  function getValue() public view returns(string memory) {
    return value;
  }

  function setValue(string memory _value) public {
    value = _value;
  }
}