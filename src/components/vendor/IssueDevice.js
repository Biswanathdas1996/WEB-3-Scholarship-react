import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "../vendor/Title";
import { Button, Divider, TextField } from "@mui/material";
import contract from "../../contract/Lottery";
import VendorHeader from "./VendorHeader";
import AssignDevice from "./AssignDevice";

const theme = createTheme();
export default function IssueDevice() {
  const [rollNo, setRollNo] = useState();
  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [detailsIndex, setDetailsIndex] = useState("");

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
    setStudentList(students);
    console.log("students", students);
  }

  const findStudentByRoll = async () => {
    setIsSubmit(true);
    let newStudenList = studentList.filter((item) => item.rollNo == rollNo);

    console.log("dsdsstudent-", newStudenList);
    await setStudent(newStudenList);
    console.log("new student-", student);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VendorHeader name={""} />
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
                {detailsIndex === "" && (
                  <Paper
                    sx={{ p: 2, display: "flex", flexDirection: "column" }}
                  >
                    <Title>Issue Device</Title>

                    <Divider sx={{ my: 1 }} />
                    <Grid container>
                      <Grid item xs={3}></Grid>
                      <Grid item xs={6}>
                        <div
                          style={{
                            border: "2px solid #0b9e9e",
                            padding: "35px",
                            borderRadius: "8px",
                          }}
                        >
                          <div className="form-group">
                            <TextField
                              id="outlined-basic"
                              name="roll"
                              label="Enter Roll no"
                              variant="outlined"
                              size="small"
                              onChange={(e) => setRollNo(e.target.value)}
                            />
                          </div>
                          <div>
                            <Button
                              variant="outlined"
                              onClick={findStudentByRoll}
                            >
                              Search
                            </Button>
                          </div>
                        </div>
                      </Grid>
                      <Grid item xs={3}></Grid>
                    </Grid>
                  </Paper>
                )}
                {isSubmit && detailsIndex === "" && (
                  <Paper
                    sx={{
                      p: 2,
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
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
                        {student.length == 0 && (
                          <TableRow>
                            <TableCell colSpan={6}>
                              <Alert severity="warning">
                                Student Details Not available!
                              </Alert>
                            </TableCell>
                          </TableRow>
                        )}
                        {student.map((row, key) => (
                          <TableRow>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.dob}</TableCell>
                            <TableCell>{row.amount}</TableCell>
                            <TableCell>{row.roll_no}</TableCell>
                            <TableCell>{row.StudentAddress}</TableCell>

                            <TableCell align="right">
                              <Button
                                variant="outlined"
                                onClick={() => setDetailsIndex(key + 1)}
                              >
                                Issue
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                )}

                {student.length !== 0 && detailsIndex != "" && (
                  <Paper
                    sx={{
                      p: 2,
                      mt: 3,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <AssignDevice
                      studentDetails={student[0]}
                      setDetailsIndex={setDetailsIndex}
                    />
                  </Paper>
                )}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
