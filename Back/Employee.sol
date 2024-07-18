// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Employee{
    struct employee{
        uint Emp_ID;
        string Name;
        string Designation;
        string email;
    }
    mapping(uint => employee) private employee_Mapping;

    constructor() {
        Admin = msg.sender;
    }

    modifier Is_Admin {
        require(msg.sender == Admin, "Not Authorized");
        _;
    }

    function Add_Employee(uint ID, string memory name , string memory design, string memory mail) public Is_Admin{
        employee_Mapping[ID].Emp_ID = ID;
        employee_Mapping[ID].Name = name;
        employee_Mapping[ID].Designation = design;
        employee_Mapping[ID].email = mail;
    }

    function Update_Employee(uint ID, string memory name , string memory design, string memory mail) public Is_Admin{
        employee_Mapping[ID].Emp_ID = ID;
        employee_Mapping[ID].Name = name;
        employee_Mapping[ID].Designation = design;
        employee_Mapping[ID].email = mail;
    }

    function Read_Employee(uint ID) public view returns(uint, string memory , string memory , string memory){
        return(employee_Mapping[ID].Emp_ID, employee_Mapping[ID].Name, employee_Mapping[ID].Designation, employee_Mapping[ID].email);
    }
}

