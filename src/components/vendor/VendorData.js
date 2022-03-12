import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Title from "../vendor/Title";
import { Button } from "@mui/material";
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
        swal("Registration done !", {
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
        swal("Registration done !", {
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
      <Title>
        {title}
      </Title>
      <Table striped   hover style={{backgroundColor:"#01987a",color:"#fff"}}>
      <thead style={{backgroundColor:"#0a463a",color:"#fff"}}>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Registration Number</th>
          <th>Amount</th>
          <th>Address</th>
          <th>Pincode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody style={{backgroundColor:"#01987a",color:"#fff"}}>

      {vendorData.length === 0 && (
            <tr>
              <td colSpan={7} align="center">
                No Vendor available!
              </td>
            </tr>
          )}

        {vendorData &&
          vendorData?.map((row, key)=> {
            return (
              <tr key={key}>
              <td>{key+1}</td>
              <td>{row?.name}</td>
              <td>{row?.registrationNo || "NA"}</td>
              <td>₹{parseFloat(row?.amount).toFixed(2)}</td>
              <td>{row?.vendorAddress}</td>
              <td>{row?.pincode}</td>
              <td align="right">
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
              </td>
              </tr>

            );
          })}
      </tbody>
      </Table>

      
    </React.Fragment>
  );
}
