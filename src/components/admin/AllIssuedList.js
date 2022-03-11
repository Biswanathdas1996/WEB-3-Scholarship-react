import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import contract from "../../contract/Lottery";
import IssuedStudentData from "../vendor/IssuedStudentData";
import AdminHeader from "./AdminHeader";
const theme = createTheme();
export default function AllIssuedList() {
  const [issueDevice, setIssueDevice] = useState([]);
  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const deviceIssue = await contract.methods.getListOfDeviceIssue().call();
    setIssueDevice(deviceIssue);
    console.log("deviceIssue", deviceIssue);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminHeader name={"Wev 3.0"} />
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
                  <IssuedStudentData
                    title="All Iussed Device List"
                    issueDevice={issueDevice}
                    back_url={"/admin-dashboard"}
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