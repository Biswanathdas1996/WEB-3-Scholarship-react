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

const mdTheme = createTheme();

export default function IssueDevice() {
  const [rollNo, setRollNo] = useState();
  const [studentList, setStudentList] = useState([
    {
      id: 1,
      sl_no: 1,
      name: "Test",
      dob: "02/03/1993",
      parent_no: "9002198887",
      school_name: "Tarakeswar High school",
      class_name: 12,
      roll_no: 11,
      status: 0,
    },
    {
      id: 2,
      sl_no: 2,
      name: "Test2",
      dob: "05/03/1993",
      parent_no: "9034778823",
      school_name: "Ramnagar high School",
      class_name: 10,
      roll_no: 13,
      status: 0,
    },
  ]);

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
    console.log("students", students);
  }

  const findStudentByRoll = () => {
    let newStudenList = studentList.filter(
      (student) => student.roll_no == rollNo
    );
    setStudentList(newStudenList);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <SideBar></SideBar>
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
          <Toolbar />
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
                        <TableCell>SL.No</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Dob</TableCell>
                        <TableCell>Parent No</TableCell>
                        <TableCell>School Name</TableCell>
                        <TableCell>Class Name</TableCell>
                        <TableCell>Roll No</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {studentList.map((row) => (
                        <TableRow key={row.sl_no}>
                          <TableCell>{row.sl_no}</TableCell>
                          <TableCell>{row.name}</TableCell>
                          <TableCell>{row.dob}</TableCell>
                          <TableCell>{row.parent_no}</TableCell>
                          <TableCell>{row.school_name}</TableCell>
                          <TableCell>{row.class_name}</TableCell>
                          <TableCell>{row.roll_no}</TableCell>
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
      </Box>
    </ThemeProvider>
  );
}
