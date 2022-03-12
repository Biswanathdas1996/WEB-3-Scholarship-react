import * as React from "react";
import Table from "react-bootstrap/Table";
import Title from "./Title";




export default function IssuedStudentData({ title, issueDevice, back_url }) {
  return (
    <React.Fragment>
      <Title>
        {title}
      </Title>

      <Table striped   hover style={{backgroundColor:"#01987a",color:"#fff"}}>
      <thead style={{backgroundColor:"#0a463a",color:"#fff"}}>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Roll No</th>
          <th>IMEI No</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:"#01987a",color:"#fff"}}>

      {issueDevice.length === 0 && (
            <tr>
              <td colSpan={5} align="center">
                No Vendor available!
              </td>
            </tr>
          )}

        {issueDevice &&
          issueDevice?.map((row, key)=> {
            return (
              <tr key={key}>
                <td>{key+1}</td>
                <td>{row.name}</td>
                <td>{row.rollNo}</td>
                <td>{row.deviceIMEI}</td>
                <td>
                  {parseFloat(row.amount / 1000000000000000000).toFixed(2)}
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
