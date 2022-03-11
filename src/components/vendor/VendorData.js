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

export default function VendorData({title,vendorData}) {
  return (
    <React.Fragment>
      <Title>{title} <Link to="/admin-dashboard"> <span style={{float:'right'}}><Button>Back</Button></span></Link></Title>
      <Divider sx={{ my: 1 }} />
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Registration Number</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>address</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {vendorData.length==0&&<TableRow>
              <TableCell colSpan={6}><Alert severity="warning">No Vendor available!</Alert></TableCell>
        </TableRow>}

          {vendorData.map((row,key) => (
            <TableRow key={key}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.registrationNo}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.vendorAddress}</TableCell>
              <TableCell>{row.pincode}</TableCell>
              <TableCell align="right">
                {!row.status?(<div><Button variant="outlined">Approve</Button> <Button variant="outlined" color="error">Reject</Button></div>):<Button variant="outlined" color="error">Reject</Button>}
                
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </React.Fragment>
  );
}