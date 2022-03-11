import web3 from "../web3";

const address = "0x41344897f7b438F01CD1D9C8E570bf750E917D27";

const abi = [
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "students",
    outputs: [
      { name: "slNo", type: "uint256" },
      { name: "name", type: "string" },
      { name: "rollNo", type: "uint256" },
      { name: "dob", type: "string" },
      { name: "score", type: "uint256" },
      { name: "complete", type: "bool" },
      { name: "StudentAddress", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "otp", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "deviceIMEI", type: "string" },
      { name: "studentIndex", type: "uint256" },
      { name: "otp", type: "uint256" },
      { name: "vendorIndex", type: "uint256" },
      { name: "amount", type: "uint256" },
    ],
    name: "issueNewDevice",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getListOfStudents",
    outputs: [
      {
        components: [
          { name: "slNo", type: "uint256" },
          { name: "name", type: "string" },
          { name: "rollNo", type: "uint256" },
          { name: "dob", type: "string" },
          { name: "score", type: "uint256" },
          { name: "complete", type: "bool" },
          { name: "StudentAddress", type: "address" },
          { name: "amount", type: "uint256" },
          { name: "otp", type: "uint256" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "deviceIssue",
    outputs: [
      { name: "name", type: "string" },
      { name: "rollNo", type: "uint256" },
      { name: "deviceIMEI", type: "string" },
      { name: "amount", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "scholarshipAmout",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "name", type: "string" },
      { name: "registrationNo", type: "string" },
      { name: "vendorAddress", type: "string" },
      { name: "pincode", type: "uint256" },
    ],
    name: "registerVendor",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getListOfVendors",
    outputs: [
      {
        components: [
          { name: "slNo", type: "uint256" },
          { name: "name", type: "string" },
          { name: "registrationNo", type: "string" },
          { name: "vendorAddress", type: "string" },
          { name: "pincode", type: "uint256" },
          { name: "vendorWalletAddress", type: "address" },
          { name: "status", type: "bool" },
          { name: "approverAddress", type: "address" },
          { name: "amount", type: "uint256" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "depositer",
    outputs: [
      { name: "amount", type: "uint256" },
      { name: "depositerAddress", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { name: "name", type: "string" },
      { name: "rollNo", type: "uint256" },
      { name: "score", type: "uint256" },
      { name: "dob", type: "string" },
    ],
    name: "registerStudent",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "vendorIndex", type: "uint256" }],
    name: "approveVendor",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getListOfDeviceIssue",
    outputs: [
      {
        components: [
          { name: "name", type: "string" },
          { name: "rollNo", type: "uint256" },
          { name: "deviceIMEI", type: "string" },
          { name: "amount", type: "uint256" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "vendors",
    outputs: [
      { name: "slNo", type: "uint256" },
      { name: "name", type: "string" },
      { name: "registrationNo", type: "string" },
      { name: "vendorAddress", type: "string" },
      { name: "pincode", type: "uint256" },
      { name: "vendorWalletAddress", type: "address" },
      { name: "status", type: "bool" },
      { name: "approverAddress", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "", type: "uint256" }],
    name: "rechargeAddress",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "amount",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "minimumScore",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getListOfDepositors",
    outputs: [
      {
        components: [
          { name: "amount", type: "uint256" },
          { name: "depositerAddress", type: "address" },
        ],
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "vendorIndex", type: "uint256" }],
    name: "rejectVendor",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "enter",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
];

export default new web3.eth.Contract(abi, address);
