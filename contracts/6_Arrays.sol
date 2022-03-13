// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Arrays {
  Person[] public people;

  uint256 public peopleCount;

  struct Person {
    string firstName;
    string lastName;
  }

  function addPerson(string memory firstName, string memory lastName) public {
    people.push(Person(firstName, lastName));
    peopleCount++;
  }
}