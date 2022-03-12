import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Title from "../vendor/Title";
import { Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import contract from "../../contract/Lottery";
import { AccountContest } from "../../App";
import swal from "sweetalert";

export default function VendorData({
  title,
  vendorData,
  fetchVendorData,
  pending,
}) {
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
      {(start || pending) && <LinearProgress />}
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
            <th>Registration Number</th>
            <th>Earning</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody style={{ backgroundColor: "rgb(245 245 245)", color: "black" }}>
          {!pending && vendorData.length === 0 && (
            <tr>
              <td colSpan={7} align="center">
                No Vendor available!
              </td>
            </tr>
          )}

          {vendorData &&
            vendorData?.map((row, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{row?.name}</td>
                  <td>{row?.registrationNo || "NA"}</td>
                  <td>
                    {parseFloat(row?.amount / 1000000000000000000).toFixed(2)}{" "}
                    ETH
                  </td>
                  <td>{row?.vendorAddress}</td>
                  <td>{row?.pincode}</td>
                  <td align="right">
                    {!row?.status ? (
                      <Button
                        variant="contained"
                        color="success"
                        disabled={start}
                        onClick={() => activateVendor(key)}
                      >
                        {start ? "Please wait..." : "Approve"}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="error"
                        disabled={start}
                        onClick={() => deActivateVendor(key)}
                      >
                        {start ? "Please wait..." : "In-active"}
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
