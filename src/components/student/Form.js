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
  cardHolder: {
      background: '#1A2038',
  },
  card: {
      maxWidth: 900,
      borderRadius: 12,
      margin: '1rem',
  },
}))

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  //number: Yup.string().trim().required("Roll no is required"),
  roll_no:Yup.string().trim().required("Roll no is required"),
  dob:Yup.string().trim().required("Date of Birth is required"),
  parent_no:Yup.number().required("Parent Phone no is required"),
  district_name:Yup.string().trim().required("District name is required"),
  school_name:Yup.string().trim().required("School name is required"),
  class_name:Yup.string().trim().required("Class Name is required")
});

const FormUI = ({ submitForm }) => {

  const classes = useStyles()
  const [newStudent,setNewStudent]=useState({
    name: "Test User",
    roll_no:"12",
    dob:"03/09/2022",
    parent_no:"9002198887",
    district_name:"Hooghly",
    school_name:"Tarakeswar",
    class_name:"12",
    previous_marks_sheet:""
  })

  const saveData = (value) => {

   
    const { name,roll_no,dob,parent_no ,school_name,district_name,class_name,previous_marks_sheet } = value;
    let string = name.split(' ').filter(s => s).join('')
    const token_no=`${string}$${parent_no}$${school_name}$${class_name}$${roll_no}`;
    console.log("value-",value);
    console.log("Token_no",token_no);
    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        submitForm(name, token_no);
      }
    });
  };

  return (
    <div>
      <Card className={classes.card}>
      <Grid container>

                    <Grid item lg={5} md={5} sm={5} xs={12}>
                        <div style={{justifyContent: 'center',alignItems: 'center', display: 'flex',height:"100%"}} >
                            <img
                                style={{width:"80%",verticalAlign: 'center'}}
                                className="w-full"
                                src="/assets/images/pwc_logo.png"
                                alt=""
                            />
                        </div>
                    </Grid>
                    <Grid item lg={7} md={7} sm={7} xs={12}>
                        <div>
                            
                            <Typography sx={{ m: 4}} component="h1" variant="h5">
                              Welcome to E-Scholarship
                            </Typography>

                        </div>



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
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            className="form-control"
                            name="dob"
                            value={newStudent.dob}
                            onChange={(newValue) => {
                              setNewStudent({...newStudent ,dob:newValue});
                            }}
                            renderInput={(params) => <TextField className="form-control" {...params} />}
                          />
                      </LocalizationProvider>

                      <ErrorMessage
                      component="div"
                      name="dob"
                      className="invalid-feedback"
                    />
                  </div>

                 
                  <div className="form-group">
                    <label htmlFor="parent_no">Parent Phone number</label>
                    <Field
                      type="number"
                      name="parent_no"
                      autoComplete="flase"
                      placeholder="Enter Parent Phone no."
                      className={`form-control text-muted ${
                        touched.parent_no && errors.parent_no ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="parent_no"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="district_name">District Name</label>
                    <Field
                      type="text"
                      name="district_name"
                      autoComplete="flase"
                      placeholder="Enter District name"
                      className={`form-control text-muted ${
                        touched.district_name && errors.district_name ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="district_name"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="school_name">School Name</label>
                    <Field
                      type="text"
                      name="school_name"
                      autoComplete="flase"
                      placeholder="Enter School name"
                      className={`form-control text-muted ${
                        touched.school_name && errors.school_name ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="school_name"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="class_name">Class Name</label>
                    <Field
                      type="text"
                      name="class_name"
                      autoComplete="flase"
                      placeholder="Enter Class name"
                      className={`form-control text-muted ${
                        touched.class_name && errors.class_name ? "is-invalid" : ""
                      }`}
                    />

                    <ErrorMessage
                      component="div"
                      name="class_name"
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
                    
                 

                  <div className="form-group">
                    <label htmlFor="previous_marks_sheet">Previous Marks Sheet</label>
                    <div>
                      <input
                        id="contained-button-file"
                        type="file"
                        name="previous_marks_sheet"
                        
                      />
                    </div>

                    
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
