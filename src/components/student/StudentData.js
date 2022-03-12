import * as React from "react";
import Table from "react-bootstrap/Table";
import Title from "../vendor/Title";
export default function StudentData({ title, studentData }) {
  return (
    <React.Fragment>
      <Title>{title}</Title>

      <Table striped hover>
        <thead style={{ backgroundColor: "rgb(25 118 210)", color: "#fff" }}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Roll No</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "rgb(245 245 245)", color: "black" }}>
          {studentData.length === 0 && (
            <tr>
              <td colSpan={7} align="center">
                No Student available!
              </td>
            </tr>
          )}

          {studentData &&
            studentData?.map((row, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.dob}</td>
                  <td>{row.rollNo}</td>
                  <td>
                    {parseFloat(row?.amount / 1000000000000000000).toFixed(2)}{" "}
                    ETH
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
