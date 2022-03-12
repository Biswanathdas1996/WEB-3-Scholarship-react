import * as React from "react";
import Table from "react-bootstrap/Table";
import Title from "./Title";
import LinearProgress from "@mui/material/LinearProgress";

export default function IssuedStudentData({ title, issueDevice, start }) {
  return (
    <React.Fragment>
      {start && <LinearProgress />}
      <Title>{title}</Title>

      <Table
        striped
        hover
        style={{ backgroundColor: "rgb(245 245 245)", color: "black" }}
      >
        <thead style={{ backgroundColor: "rgb(25 118 210)", color: "#fff" }}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Vendor</th>

            <th>Roll No</th>
            <th>IMEI No</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "rgb(245 245 245)", color: "black" }}>
          {!start && issueDevice.length === 0 && (
            <tr>
              <td colSpan={5} align="center">
                No Vendor available!
              </td>
            </tr>
          )}

          {issueDevice &&
            issueDevice?.map((row, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{row?.name}</td>
                  <td>{row?.vendorName}</td>
                  <td>{row?.rollNo}</td>
                  <td>{row?.deviceIMEI}</td>
                  <td>
                    {parseFloat(row?.amount / 1000000000000000000).toFixed(2)}
                    <b> ETH</b>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
