import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import swal from "sweetalert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";

import "date-fns";

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

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  roll_no: Yup.string().trim().required("Roll no is required"),
  dob: Yup.string().trim().required("Date of Birth is required"),
});

const FormUI = ({ submitForm }) => {
  const classes = useStyles();

  const saveData = (value) => {
    const { name, roll_no, dob } = value;
    console.log(value);
    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitForm(name, roll_no, dob);
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
                Welcome to E-Scholarship
              </Typography>
            </div>

            <div
              className="p-8 h-full"
              style={{ justifyContent: "center", padding: "20px" }}
            >
              <Formik
                initialValues={{
                  name: "",
                  roll_no: "",
                  dob: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log(values);
                  saveData(values);
                  setSubmitting(false);
                }}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <Field
                        type="text"
                        name="name"
                        autoComplete="flase"
                        placeholder="Enter Full Name"
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
                      <label htmlFor="dob">Date Of Birth</label>
                      <Field
                        type="date"
                        name="dob"
                        autoComplete="flase"
                        placeholder="Enter DOB"
                        className={`form-control text-muted ${
                          touched.name && errors.name ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="dob"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="roll_no">Roll No</label>
                      <Field
                        type="number"
                        name="roll_no"
                        autoComplete="flase"
                        placeholder="Enter contact Roll No"
                        className={`form-control text-muted ${
                          touched.roll_no && errors.roll_no ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="roll_no"
                        className="invalid-feedback"
                      />
                    </div>

                    <span className="input-group-btn">
                      <input
                        className="btn btn-default btn-primary"
                        type="submit"
                        value="Register"
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

export default FormUI;
