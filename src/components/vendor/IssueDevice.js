import React, { useState, useEffect } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import VendorData from "./VendorData";
import SideBar from "../common/SideBar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Button, Divider, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import contract from "../../contract/Lottery";
import VendorHeader from "./VendorHeader";

const theme = createTheme();
export default function IssueDevice() {
  const [rollNo, setRollNo] = useState();
  const [studentList, setStudentList] = useState([]);
  const [student,setStudent]=useState([])

  useEffect(() => {
    fetchIssueDevice();
    fetchStudentData();
  }, []);

  async function fetchIssueDevice() {
    const listOfDeviceIssue = await contract.methods
      .getListOfDeviceIssue()
      .call();
     
    console.log("listOfDeviceIssue", listOfDeviceIssue);
  }

  async function fetchStudentData() {
    const students = await contract.methods.getListOfStudents().call();
    setStudentList(students)
    console.log("students", students);
  }

  const findStudentByRoll = async() => {
    let newStudenList = studentList.filter(
      (item) => item.rollNo == rollNo
    );
    
    console.log("dsdsstudent-",newStudenList)
    await setStudent(newStudenList);
    console.log("new student-",student)
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VendorHeader name={"Ajay"} />
      <main>
        {/* Hero unit */}
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <Title>Issue Device</Title>
                  <Divider sx={{ my: 1 }} />
                  <Grid item xs={8}>
                    <TextField
                      id="outlined-basic"
                      name="roll"
                      label="Enter Roll no"
                      variant="outlined"
                      onChange={(e) => setRollNo(e.target.value)}
                    />
                    <Button
                      variant="outlined"
                      className="ml-2"
                      onClick={findStudentByRoll}
                    >
                      Search
                    </Button>
                  </Grid>

                  <Divider sx={{ my: 1 }} />

                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Dob</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Roll No</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {student.map((row) => (
                        <TableRow >
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.dob}</TableCell>
                          <TableCell>{row.amount}</TableCell>
                          <TableCell>{row.roll_no}</TableCell>
                          <TableCell>{row.StudentAddress}</TableCell>
                          
                          <TableCell align="right">
                            <Link to={`/assign-device/${row.id}`}>
                              <Button variant="outlined">Issue</Button>
                            </Link>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Paper>
                </Grid>
            </Grid>
        
          </Container>
        </Box>
        
      </main>
     
    </ThemeProvider>
  );
}
