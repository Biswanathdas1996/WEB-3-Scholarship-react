import React,{useState} from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import VendorData from './VendorData';
import SideBar from '../common/SideBar';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, Divider, TextField } from '@mui/material';
import * as Yup from "yup";
import swal from "sweetalert";
import { Link } from 'react-router-dom';
const mdTheme = createTheme();

const AssignDeviceSchema = Yup.object().shape({
  otp: Yup.string().required("Otp is required"),
  imei_no: Yup.string().trim().required("IMEI no is required"),
  amount: Yup.number().required("Amount is required"),
});

export default function AssignDevice({studentDetails,setDetailsIndex}) {
  console.log("studentDetails-",studentDetails);

  const saveData = (value) => {
    const { otp,imei_no,amount } = value;
    console.log(value);
    swal({
      title: "Are you sure?",
      text: "Want to submit the form !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        //submitForm(name, roll_no, dob);
      }
    });
  };
 

  return (
        <>
        
            <Grid item xs={12}>
            
                <Title>Assign Device <span style={{float:'right'}}><Button onClick={()=>setDetailsIndex("")}>Back</Button></span></Title>
                <Divider sx={{ my: 1 }} />
                <Table size="small">
                  <TableBody>
                      <TableRow >
                        <TableCell>Name:</TableCell>
                        <TableCell>{studentDetails.name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Date Of birth:</TableCell>
                        <TableCell>{studentDetails.dob}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Roll No:</TableCell>
                        <TableCell>{studentDetails.rollNo}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Amount:</TableCell>
                        <TableCell>{studentDetails.amount}</TableCell>
                      </TableRow>
                  
                  </TableBody>
                </Table>
                
                <Grid item xs={12} sx={{ my: 1 }}>
                <div
              className="p-4 h-full"
              style={{ marginLeft: "30%", padding: "20px", width:400,border: '2px solid #0b9e9e',padding: '35px',borderRadius: '8px' }}
            >
                <Formik
                initialValues={{
                  name: "",
                  roll_no: "",
                  dob: "",
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
                        name="imei_no"
                        autoComplete="flase"
                        placeholder="Enter IMEI No"
                        className={`form-control text-muted ${
                          touched.imei_no && errors.imei_no ? "is-invalid" : ""
                        }`}
                      />

                      <ErrorMessage
                        component="div"
                        name="imei_no"
                        className="invalid-feedback"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="name">Amount</label>
                      <Field
                        type="text"
                        name="amount"
                        autoComplete="flase"
                        placeholder="Enter IMEI No"
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

                    <span className="form-group" >
                      <input
                        className="btn btn-default btn-primary"
                        type="submit"
                        value="Assign"
                      />
                    </span>

                  

                  </Form>)}
                </Formik>
                </div>
                </Grid>
             

               
              
            </Grid>
          
        </>
     
  );
}