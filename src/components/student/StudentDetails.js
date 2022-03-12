import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import VendorData from "./StudentData";
import SideBar from "../common/SideBar";
import contract from "../../contract/Lottery";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Alert, Button, Divider } from "@mui/material";
import StudentTransaction from "./StudentTransaction";
import StudentHeader from "./StudentHeader";
import IssuedStudentData from "../vendor/IssuedStudentData";
const theme = createTheme();
export default function StudentDetails() {
  const [studentList, setStudentList] = useState([]);
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const students = await contract.methods.getListOfStudents().call();
    setStudentList(students);
    setStudentData(students[0]);
    console.log("students", students);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StudentHeader name={"Wev 3.0"} />
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
                  <Title>
                    Student Details{" "}
                    <Link to="/">
                      {" "}
                      <span style={{ float: "right" }}>
                        <Button>Back</Button>
                      </span>
                    </Link>
                  </Title>

                  <Divider sx={{ my: 1 }} />
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>Name:</TableCell>
                        <TableCell>{studentData.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Date Of birth:</TableCell>
                        <TableCell>{studentData.dob}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Roll No:</TableCell>
                        <TableCell>{studentData.rollNo}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Amount:</TableCell>
                        <TableCell>
                          {parseFloat(
                            studentData.amount / 1000000000000000000
                          ).toFixed(3)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otp:</TableCell>
                        <TableCell>{studentData.otp}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <IssuedStudentData
                    title="Iussed Device List"
                    studentData={studentList}
                    back_url=""
                  />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
