import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@mui/material/LinearProgress";
import VendorForm from "./VendorForm";
import { AccountContest } from "../../App";
import swal from "sweetalert";
import contract from "../../contract/Lottery";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#f3f3f4",
    padding: "20px",
    alignItems: "center",
    minHeight: 700,
  },
  card: {
    maxWidth: 800,
    minWidth:400,
    borderRadius: 12,
    margin: "1rem",
  },
}));

const VendorRegistration = () => {
  const classes = useStyles();
  const account = useContext(AccountContest);

  const [start, setStart] = useState(false);

  const submitForm = async (name, registrationNo, vendorAddress, pincode) => {
    setStart(true);
    await contract.methods
      .registerVendor(name, Number(registrationNo), vendorAddress, pincode)
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Registration done !", {
          icon: "success",
        });
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
    <>
      {start && <LinearProgress color="secondary" />}
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        className={classes.cardHolder}
      >
        <VendorForm submitForm={submitForm} />
      </div>
    </>
  );
};
export default VendorRegistration;
