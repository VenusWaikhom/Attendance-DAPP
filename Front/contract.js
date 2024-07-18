const contractABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "addAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_teamID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_memberID",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_memberName",
        type: "string",
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_teamName",
        type: "string",
      },
    ],
    name: "addTeam",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_teamID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_memberID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_attendanceID",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_status",
        type: "bool",
      },
    ],
    name: "markAttendance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "admins",
    outputs: [
      {
        internalType: "string",
        name: "adminName",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "adminID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "adminCounter",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "teamCounter",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "superAdmin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_teamID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_memberID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_attendanceID",
        type: "uint256",
      },
    ],
    name: "viewAttendance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0xBF1becaF793542b6f857981AB8dbE8a6AF7E221b";
