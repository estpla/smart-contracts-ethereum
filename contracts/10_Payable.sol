// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Payable {
  mapping(address => uint256) public balances;
  address payable wallet;

  constructor(address payable _wallet) {
    wallet = _wallet;
  }

  function() external payable {
    buyToken();
  }

  function buyToken() public payable {
    balances[msg.sender]++;
    wallet.transfter(msg.value);
  }
}