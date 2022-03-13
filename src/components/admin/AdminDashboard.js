import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminHeader from "./AdminHeader";
import { DashboardCard } from "../common/DashboadCard";
import contract from "../../contract/Scholarship";

const theme = createTheme();

export default function AdminDashboard() {
  const [studentList, setStudentList] = useState([]);
  const [vendorList, setVendorList] = useState([]);
  const [deviceIssue, setDeviceIssue] = useState([]);

  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    const students = await contract.methods.getListOfStudents().call();
    setStudentList(students);
    const vendors = await contract.methods.getListOfVendors().call();
    setVendorList(vendors);
    const devices = await contract.methods.getListOfDeviceIssue().call();
    setDeviceIssue(devices);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminHeader />
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
            py: 4,
            height: "90vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard
                  title="Total Student"
                  image_index="3"
                  count={studentList?.length}
                />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard
                  title="Total Vendor"
                  image_index="2"
                  count={vendorList?.length}
                />
              </Grid>

              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard
                  title="Total Device Issue"
                  image_index="3"
                  count={deviceIssue?.length}
                />
              </Grid>

              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard
                  title="Contact Balance"
                  image_index="4"
                  count="40.ETH"
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
