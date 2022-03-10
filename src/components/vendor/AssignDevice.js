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

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Button, Divider, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
const mdTheme = createTheme();



export default function AssignDevice() {

    const [rollNo,setRollNo]=useState()
    const [studentData,setStudentData]=useState({
        id:1,
        sl_no:1,
        name:"Test",
        dob:"02/03/1993",
        parent_no:"9002198887",
        school_name:"Tarakeswar High school",
        class_name:12,
        roll_no:11,
        status:0,
      }
    )

    const findStudentByRoll=()=>{


    }

  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar></SideBar>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                <Title>Assign Device</Title>
                <Divider sx={{ my: 1 }} />
               

                


                <Table size="small">
                  <TableBody>
                      <TableRow >
                        <TableCell>Name:</TableCell>
                        <TableCell>{studentData.name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Date Of birth:</TableCell>
                        <TableCell>{studentData.dob}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Parent Number:</TableCell>
                        <TableCell>{studentData.parent_no}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>School Name:</TableCell>
                        <TableCell>{studentData.school_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Class Name:</TableCell>
                        <TableCell>{studentData.class_name}</TableCell>
                      </TableRow>
                      <TableRow >
                        <TableCell>Roll No:</TableCell>
                        <TableCell>{studentData.roll_no}</TableCell>
                      </TableRow>
                  
                  </TableBody>
                </Table>
                
                <Grid item xs={12} sx={{ my: 1 }}>
                  <TextField id="outlined-basic" name="otp" label="Enter otp" variant="outlined" onChange={e=>setRollNo(e.target.value)} />
                  <TextField id="outlined-basic" name="imei_no" label="Enter IMEI No of Device" className='ml-2' variant="outlined" onChange={e=>setRollNo(e.target.value)} />
                  <Button variant="outlined" className='ml-2' onClick={findStudentByRoll}>Save</Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  </ThemeProvider>
  );
}