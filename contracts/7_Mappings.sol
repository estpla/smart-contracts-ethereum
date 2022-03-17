// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Arrays {
  uint256 public peopleCount = 0;
  mapping(uint => Person) public people;

  struct Person {
    uint id;
    string firstName;
    string lastName;
  }

  event newPersonAdded(uint id);

  function addPerson(string memory firstName, string memory lastName) public {
    peopleCount++;
    people[peopleCount] = Person(peopleCount, firstName, lastName);

    emit newPersonAdded(peopleCount);
  }
}