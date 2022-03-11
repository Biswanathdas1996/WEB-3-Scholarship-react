import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';



function preventDefault(event) {
  event.preventDefault();
}

export default function IssuedStudentData({title,studentData}) {
  return (
    <React.Fragment>
      <Title>{title}</Title>

      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>IMEI No</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {studentData.length==0&&<TableRow>
              <TableCell colSpan={6}><Alert severity="warning">No Vendor available!</Alert></TableCell>
        </TableRow>}

          {studentData.map((row,key) => (
            <TableRow key={key}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>{row.rollNo}</TableCell>
              <TableCell>{row.imei}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}