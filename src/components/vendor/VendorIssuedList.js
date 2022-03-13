import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import contract from "../../contract/Scholarship";
import IssuedStudentData from "../vendor/IssuedStudentData";
import VendorHeader from "./VendorHeader";
const theme = createTheme();
export default function AllIssuedList() {
  const [issueDevice, setIssueDevice] = useState([]);
  const vendorId = localStorage.getItem("vendorID");

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const deviceIssue = await contract.methods.getListOfDeviceIssue().call();
    const filterData = deviceIssue.filter(
      (data) => data.vendorIndex === vendorId
    );
    setIssueDevice(filterData);
    console.log("deviceIssue", filterData);
  }

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
            height: "90vh",
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
