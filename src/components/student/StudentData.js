import * as React from 'react';
import {Link} from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../vendor/Title';
import { Button, Divider } from '@mui/material';
import Alert from '@mui/material/Alert';



function preventDefault(event) {
  event.preventDefault();
}

export default function StudentData({title,studentData}) {
  return (
    <React.Fragment>
      <Title>{title}<Link to="/admin-dashboard"> <span style={{float:'right'}}><Button>Back</Button></span></Link></Title>
      <Divider sx={{ my: 1 }} />
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>DOB</TableCell>
            <TableCell>Roll No</TableCell>
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
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}