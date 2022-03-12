import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Divider } from "@mui/material";
import Alert from "@mui/material/Alert";



export default function IssuedStudentData({ title, issueDevice, back_url }) {
  return (
    <React.Fragment>
      <Title>
        {title}
      </Title>
      <Divider sx={{ my: 1 }} />

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Vendor Name</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>IMEI No</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {issueDevice?.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <Alert severity="warning">No Vendor available!</Alert>
              </TableCell>
            </TableRow>
          )}

          {issueDevice?.map((row, key) => (
            <TableRow key={key}>
              <TableCell>{row?.name}</TableCell>
              <TableCell>{row?.vendorName}</TableCell>
              <TableCell>{row?.rollNo}</TableCell>
              <TableCell>{row?.deviceIMEI}</TableCell>
              <TableCell>
                {parseFloat(row?.amount / 1000000000000000000).toFixed(2)}
                <b> ETH</b>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
