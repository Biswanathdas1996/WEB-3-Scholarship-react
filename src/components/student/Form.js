import React, {  useState } from "react";
import { makeStyles } from '@material-ui/core/styles'
import swal from "sweetalert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {  Card, Grid,TextField } from "@mui/material";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import 'date-fns'
import DatePicker from '@mui/lab/DatePicker'
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(({ palette, ...theme }) => ({
  card: {
      maxWidth: 900,
      borderRadius: 12,
      margin: '1rem',
  },
}))

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  roll_no:Yup.string().trim().required("Roll no is required"),
  dob:Yup.string().trim().required("Date of Birth is required"),
  contact_no:Yup.number().required("Contact no is required")
});

const FormUI = ({ submitForm }) => {

  const classes = useStyles()
  const [newStudent,setNewStudent]=useState({
    name: "Test User",
    roll_no:"12",
    dob:"03/09/2022",
    contact_no:"9002198887"
  })

  const saveData = (value) => {

   
    const { name,roll_no,dob,contact_no } = value;
    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitForm(name, roll_no);
      }
    });
  };

  return (
    <div>
      <Card className={classes.card}>
      <Grid container>

                    
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                       
                        <Typography sx={{ m: 4}} component="h1" variant="h5">
                          Welcome to E-Scholarship
                        </Typography>
                        
                        <div className="p-8 h-full" style={{justifyContent: 'center',padding:"20px"}}>
                        <Formik
                          initialValues={newStudent}
                          validationSchema={LoginSchema}
                          onSubmit={(values, { setSubmitting }) => {
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
                        placeholder="Enter Contact no."
                        className={`form-control text-muted ${
                          touched.dob && errors.dob ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                      component="div"
                      name="dob"
                      className="invalid-feedback"
                    />
                  </div>

                 
                  <div className="form-group">
                    <label htmlFor="parent_no">Contact number</label>
                    <Field
                      type="number"
                      name="parent_no"
                      autoComplete="flase"
                      placeholder="Enter Contact no."
                      className={`form-control text-muted ${
                        touched.contact_no && errors.contact_no ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="contact_no"
                      className="invalid-feedback"
                    />
                  </div>

                 

                  <div className="form-group">
                    <label htmlFor="roll_no">Roll No</label>
                    <Field
                      type="roll_no"
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
