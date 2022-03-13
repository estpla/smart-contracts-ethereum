// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Internal {
  uint256 public peopleCount = 0;
  mapping(uint => Person) public people;

  struct Person {
    uint id;
    string firstName;
    string lastName;
  }

  function addPerson(string memory firstName, string memory lastName) public {
    incrementCount();
    people[peopleCount] = Person(peopleCount, firstName, lastName);
  }

  function incrementCount() internal {
    peopleCount++;
  }
}