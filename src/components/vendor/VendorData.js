import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../vendor/Title';
import { Button } from '@mui/material';

const vendorList=[
  {
    sl_no:1,
    name:"Test",
    address:"Tarakeswar",
    registration_no:"1234",
    pincode:712410,
    status:0,
  },
  {
    sl_no:2,
    name:"Test1",
    address:"Kolkata",
    registration_no:"2222",
    pincode:712410,
    status:1,
  }
]

function preventDefault(event) {
  event.preventDefault();
}

export default function VendorData() {
  return (
    <React.Fragment>
      <Title>Vendor List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>SL.No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Registration</TableCell>
            <TableCell>address</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell >Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendorList.map((row) => (
            <TableRow key={row.sl_no}>
              <TableCell>{row.sl_no}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.registration_no}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell>{row.status===0?"Pending":"Approved"}</TableCell>
              <TableCell align="right">{!row.status?<Button variant="outlined">Approve</Button>:""} <Button variant="outlined" color="error">Reject</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}