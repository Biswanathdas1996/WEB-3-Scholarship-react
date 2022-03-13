import React, { useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import * as Yup from "yup";
import swal from "sweetalert";
import contract from "../../contract/Scholarship";
import { AccountContest } from "../../App";
import LinearProgress from "@mui/material/LinearProgress";
import web3 from "../../web3";

const AssignDeviceSchema = Yup.object().shape({
  otp: Yup.string().required("Otp is required"),
  imei: Yup.string().trim().required("IMEI no is required"),
  amount: Yup.number().required("Amount is required"),
});

export default function AssignDevice({ studentDetails, setDetailsIndex }) {
  const account = useContext(AccountContest);

  const [start, setStart] = useState(false);
  const vendorId = localStorage.getItem("vendorID");

  const saveData = (value) => {
    const { otp, imei, amount, remark } = value;
    const toatalAmount = web3.utils.toWei(amount, "ether");
    console.log(value);
    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitForm(imei, otp, toatalAmount, remark);
      }
    });
  };

  const submitForm = async (deviceIMEI, otp, amount, remark) => {
    setStart(true);
    await contract.methods
      .issueNewDevice(
        deviceIMEI,
        studentDetails.slNo,
        otp,
        vendorId,
        amount,
        remark
      )
      .send({
        from: account[0],
        value: 0,
      })
      .then((data) => {
        console.log("=>", data);
        swal("Device issued !", {
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

      <Grid item xs={12}>
        <Title>
          Assign Device{" "}
          <span style={{ float: "right" }}>
            <Button onClick={() => setDetailsIndex("")}>Back</Button>
          </span>
        </Title>
        <Divider sx={{ my: 1 }} />

        <List style={{ with: "50%", align: "right", marginLeft: "30%" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Name: </ListItemIcon>
              <ListItemText primary={studentDetails.name} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Date Of birth: </ListItemIcon>
              <ListItemText primary={studentDetails.dob} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Roll No: </ListItemIcon>
              <ListItemText primary={studentDetails.rollNo} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>Available Amount: </ListItemIcon>
              <ListItemText
                primary={
                  parseFloat(
                    studentDetails?.amount / 1000000000000000000
                  ).toFixed(2) + " ETH"
                }
              />
            </ListItemButton>
          </ListItem>
        </List>

        <Grid item xs={12} sx={{ my: 1 }}>
          <div
            className="p-4 h-full"
            style={{
              marginLeft: "30%",
              width: 400,
              padding: "35px",
              borderRadius: "8px",
            }}
          >
            <Formik
              initialValues={{
                otp: "",
                imei: "",
                amount: "",
                remark: "",
              }}
              validationSchema={AssignDeviceSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                saveData(values);
                setSubmitting(false);
              }}
            >
              {({ touched, errors, isSubmitting }) => (
                <Form>
                  <div className="form-group">
                    <label htmlFor="name">Otp</label>
                    <Field
                      type="text"
                      name="otp"
                      autoComplete="flase"
                      placeholder="Enter Otp"
                      className={`form-control text-muted ${
                        touched.otp && errors.otp ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="otp"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">IMEI Number</label>
                    <Field
                      type="text"
                      name="imei"
                      autoComplete="flase"
                      placeholder="Enter IMEI No"
                      className={`form-control text-muted ${
                        touched.imei && errors.imei ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="imei"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Amount (ETH)</label>
                    <Field
                      type="text"
                      name="amount"
                      autoComplete="flase"
                      placeholder="Enter amount"
                      className={`form-control text-muted ${
                        touched.amount && errors.amount ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="amount"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="name">Remark</label>
                    <Field
                      type="text"
                      name="remark"
                      autoComplete="flase"
                      placeholder="Enter remark"
                      className={`form-control text-muted ${
                        touched.remark && errors.remark ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="remark"
                      className="invalid-feedback"
                    />
                  </div>

                  <span className="form-group">
                    <input
                      className="btn btn-default btn-primary"
                      type="submit"
                      value="Assign"
                    />
                  </span>
                </Form>
              )}
            </Formik>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
