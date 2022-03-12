import React, { useEffect, useState } from "react";
import {  createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import contract from "../../contract/Lottery";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Divider } from "@mui/material";
import StudentHeader from "./StudentHeader";
import IssuedStudentData from "../vendor/IssuedStudentData";
import LinearProgress from "@mui/material/LinearProgress";

const theme = createTheme();
export default function StudentDetails() {
  const [studentData, setStudentData] = useState([]);
  const [issueDevice, setIssueDevice] = useState([]);
  const [start, setStart] = useState(false);

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    setStart(true);
    const students = await contract.methods.getListOfStudents().call();

    setStudentData(students[0]);
    filterIssueDeviceData();
  }

  async function filterIssueDeviceData() {
    setStart(true);
    const deviceIssue = await contract.methods.getListOfDeviceIssue().call();

    await setIssueDevice(deviceIssue);
    setStart(false);
  }

  console.log("students", issueDevice);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StudentHeader name={"Wev 3.0"} />
      {start && <LinearProgress />}
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
                    Student Details
                  </Title>

                  <Divider sx={{ my: 1 }} />
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>Name:</TableCell>
                        <TableCell>{studentData?.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Date Of birth:</TableCell>
                        <TableCell>{studentData?.dob}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Roll No:</TableCell>
                        <TableCell>{studentData?.rollNo}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Amount:</TableCell>
                        <TableCell>
                          {parseFloat(
                            studentData?.amount / 1000000000000000000
                          ).toFixed(3)}
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Otp:</TableCell>
                        <TableCell>{studentData?.otp}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                  <IssuedStudentData
                    title="Iussed Device List"
                    issueDevice={issueDevice?.filter(
                      (data) => data.rollNo === studentData?.rollNo
                    )}
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
