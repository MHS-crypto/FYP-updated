pragma solidity ^0.5.0;

contract MedicalHistory {
    uint age;
    string dname;
    string pname;
    string medicine;

    function setAge(uint x) public
    {
        age = x;
    }

    function getAge() public view returns(uint) {
        return age;
    }

    function setDName(string memory n) public{
        dname = n;
    }

    function getDName() public view returns(string memory) {
        return dname;
    }

    function setPName(string memory n) public{
        pname = n;
    }

    function getPName() public view returns(string memory) {
        return pname;
    }

    function setMedicine(string memory n) public{
        medicine = n;
    }

    function getMedicine() public view returns(string memory) {
        return medicine;
    }
}