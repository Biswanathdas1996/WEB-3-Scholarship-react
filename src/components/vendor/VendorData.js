import React, { useContext, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Button, Divider } from "@mui/material";
import Alert from "@mui/material/Alert";

import LinearProgress from "@mui/material/LinearProgress";
import contract from "../../contract/Lottery";
import { AccountContest } from "../../App";
import swal from "sweetalert";

export default function VendorData({ title, vendorData, fetchVendorData }) {
  const account = useContext(AccountContest);

  const [start, setStart] = useState(false);

  const activateVendor = async (index) => {
    setStart(true);
    await contract.methods
      .approveVendor(index)
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Vender approved !", {
          icon: "success",
        });
        fetchVendorData();
        setStart(false);
      })
      .catch((error) => {
        console.log("error-->", error);
        swal(error.message, {
          icon: "error",
        });
        setStart(false);
      });
  };

  const deActivateVendor = async (index) => {
    setStart(true);
    await contract.methods
      .rejectVendor(index)
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Vender deactivate !", {
          icon: "success",
        });
        fetchVendorData();
        setStart(false);
      })
      .catch((error) => {
        console.log("error-->", error);
        swal(error.message, {
          icon: "error",
        });
        setStart(false);
      });
  };

  return (
    <React.Fragment>
      {start && <LinearProgress />}
      <br />
      <Title>{title}</Title>
      <Divider sx={{ my: 1 }} />

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Registration Number</TableCell>
            <TableCell>Amount Earned</TableCell>
            <TableCell>address</TableCell>
            <TableCell>Pincode</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {vendorData.length === 0 && (
            <TableRow>
              <TableCell colSpan={6}>
                <Alert severity="warning">No Vendor available!</Alert>
              </TableCell>
            </TableRow>
          )}

          {vendorData?.map((row, key) => (
            <TableRow key={key}>
              <TableCell>{row?.name}</TableCell>
              <TableCell>{row?.registrationNo || "NA"}</TableCell>
              <TableCell>
                {parseFloat(row?.amount / 1000000000000000000).toFixed(2)} ETH
              </TableCell>

              <TableCell>{row?.vendorAddress}</TableCell>
              <TableCell>{row?.pincode}</TableCell>
              <TableCell align="right">
                {!row?.status ? (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => activateVendor(key)}
                  >
                    Approve
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => deActivateVendor(key)}
                  >
                    In-active
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
