// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Modifiers {
  uint256 public peopleCount = 0;
  mapping(uint => Person) public people;

  address owner;

  modifier isOwner() {
    require(msg.sender == owner, "Caller is not owner");
    _;
  }

  struct Person {
    uint id;
    string firstName;
    string lastName;
  }

  constructor() {
    owner = msg.sender;
  }

  function addPerson(string memory firstName, string memory lastName) public isOwner {
    incrementCount();
    people[peopleCount] = Person(peopleCount, firstName, lastName);
  }

  function incrementCount() internal {
    peopleCount++;
  }
}