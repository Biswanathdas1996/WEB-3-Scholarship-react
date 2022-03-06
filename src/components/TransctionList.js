import React from "react";
import Table from "react-bootstrap/Table";

const TransctionList = ({ depositors }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Address</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {depositors &&
          depositors.map((data, index) => {
            const { depositerAddress, amount } = data;
            return (
              <tr>
                <td>{index + 1}</td>

                <td>{depositerAddress}</td>
                <td>{amount / 1000000000000000000} ETH</td>
              </tr>
            );
          })}
      </tbody>
    </Table>
  );
};
export default TransctionList;
