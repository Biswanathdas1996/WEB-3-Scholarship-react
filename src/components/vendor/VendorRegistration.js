import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@mui/material/LinearProgress";
import VendorForm from "./VendorForm";
import { AccountContest } from "../../App";
import swal from "sweetalert";
import contract from "../../contract/Scholarship";
import Home from "@mui/icons-material/Home";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#f3f3f4",
    alignItems: "center",
    height: "90vh",
    overflow: "auto",
  },
}));

const VendorRegistration = () => {
  const classes = useStyles();
  const account = useContext(AccountContest);

  const [start, setStart] = useState(false);

  const submitForm = async (name, registrationNo, vendorAddress, pincode) => {
    setStart(true);
    await contract.methods
      .registerVendor(name, registrationNo, vendorAddress, pincode)
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
      <AppBar
        position="relative"
        position="relative"
        style={{ backgroundColor: "#d25304", color: "#fff" }}
      >
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home sx={{ mr: 2 }} style={{ color: "#fff" }} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Welcome to E-Scholarship
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.cardHolder}>
        <VendorForm submitForm={submitForm} start={start} />
      </div>
    </>
  );
};
export default VendorRegistration;
