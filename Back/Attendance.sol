// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
contract Attendance{
    address Admin;
    struct Attendance_Data{
        uint Attendance_ID;
        uint Member_ID;
        uint Time;
    }

    struct Member{
        uint Member_ID;
        string Member_Name;
        uint Member_Attendance_Counter;
        mapping(uint => Attendance_Data) Attendance_Status;
    }
    mapping(uint => Member) private Member_Mapping;

    constructor(){
        Admin = msg.sender;
    }

    modifier Is_Admin{
        require(msg.sender == Admin, "Not Authorized");
        _;
    }

    function Add_Member(uint ID, string memory name) public Is_Admin{
        Member_Mapping[ID].Member_ID = ID;
        Member_Mapping[ID].Member_Name = name;
    }

    function View_Member(uint ID) public view returns(uint, string memory, uint){
        return(Member_Mapping[ID].Member_ID, Member_Mapping[ID].Member_Name, Member_Mapping[ID].Member_Attendance_Counter);
    }

    uint member_attendance_counter;

    function MEMBER_ATTENDANCE_COUNTER() private returns(uint){
        return(member_attendance_counter);
    }

    function Update_Status(uint ID, uint Number_Of_Working_days)public Is_Admin{
        Member_Mapping[ID].Attendance_Status[Number_Of_Working_days].Status = true;
        Member_Mapping[ID].Attendance_Status[Number_Of_Working_days].Time = block.timestamp;
        Member_Mapping[ID].Member_Attendance_Counter = MEMBER_ATTENDANCE_COUNTER();
    }
}

