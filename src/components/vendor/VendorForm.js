import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, Grid, TextField } from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import "date-fns";
import DatePicker from "@mui/lab/DatePicker";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#1A2038",
  },
  card: {
    maxWidth: 900,
    borderRadius: 12,
    margin: "1rem",
  },
}));

const VendorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  registration_no: Yup.string().trim().required("registration no is required"),
  address: Yup.string().trim().required("Address is required"),
  pincode: Yup.number().required("Pincode no is required"),
});

const VendorForm = ({ submitForm }) => {
  const classes = useStyles();

  const saveData = (value) => {
    const { name, registration_no, address, pincode } = value;
    console.log("value-", value);

    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitForm(name, registration_no, address, pincode);
      }
    });
  };

  return (
    <div>
      <Card className={classes.card}>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                height: "100%",
              }}
            >
              <img
                style={{ width: "80%", verticalAlign: "center" }}
                className="w-full"
                src="/assets/images/pwc_logo.png"
                alt=""
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <div>
              <Typography sx={{ m: 4 }} component="h1" variant="h5">
                Vendor Registration
              </Typography>
            </div>

            <div
              className="p-8 h-full"
              style={{ justifyContent: "center", padding: "20px" }}
            >
              <Formik
                initialValues={{
                  name: "",
                  registration_no: "",
                  address: "",
                  pincode: "",
                }}
                validationSchema={VendorSchema}
                onSubmit={(values, { setSubmitting }) => {
                  saveData(values);
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Vendor Name</label>
                      <Field
                        type="text"
                        name="name"
                        autoComplete="flase"
                        placeholder="Enter Vendor Name"
                        className={`form-control text-muted ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="name"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Registration No</label>
                      <Field
                        type="text"
                        name="registration_no"
                        autoComplete="flase"
                        placeholder="Enter registration No"
                        className={`form-control text-muted ${
                          touched.registration_no && errors.registration_no
                            ? "is-invalid"
                            : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="registration_no"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Address</label>
                      <Field
                        type="text"
                        name="address"
                        autoComplete="flase"
                        placeholder="Enter registration No"
                        className={`form-control text-muted ${
                          touched.address && errors.address ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="address"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Pincode</label>
                      <Field
                        type="text"
                        name="pincode"
                        autoComplete="flase"
                        placeholder="Enter Pincode"
                        className={`form-control text-muted ${
                          touched.pincode && errors.pincode ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="pincode"
                        className="invalid-feedback"
                      />
                    </div>

                    <span className="input-group-btn">
                      <input
                        className="btn btn-default btn-primary"
                        type="submit"
                        value="Sign Up"
                      />
                    </span>
                  </Form>
                )}
              </Formik>
            </div>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default VendorForm;