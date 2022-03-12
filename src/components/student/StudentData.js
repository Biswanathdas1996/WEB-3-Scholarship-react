import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Divider } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function StudentData({ title, studentData }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Divider sx={{ my: 1 }} />

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>D.O.B.</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>Available Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <Alert severity="warning">No Vendor available!</Alert>
              </TableCell>
            </TableRow>
          )}

          {studentData.map((row, key) => (
            <TableRow key={key}>
              <TableCell>{row?.name}</TableCell>
              <TableCell>{row?.dob}</TableCell>
              <TableCell>{row?.rollNo}</TableCell>
              <TableCell>
                {parseFloat(row?.amount / 1000000000000000000).toFixed(2)} ETH
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
