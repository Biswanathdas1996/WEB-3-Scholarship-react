import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminHeader from "./AdminHeader";
import { DataCard } from "../common/DataCard";
import StartScholarship from "../StartScholarship";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DashboardCard } from "../common/DashboadCard";
const theme = createTheme();
 
export default function AdminDashboard() {
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
           {/*  <Grid container spacing={3}>
              <Grid item lg={3} sm={6} xl={3} xs={12}>
                <DataCard
                  name="Total Student"
                  icon={<PeopleIcon />}
                  count="1"
                />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Total Pending Vendor"
                  icon={<PeopleIcon />}
                  count="0"
                />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Total Approved Vendor"
                  icon={<PeopleIcon />}
                  count="0"
                />
              </Grid>

              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Total Issued Device"
                  icon={<AccountBalanceWalletIcon />}
                  count="2"
                />
              </Grid>
            </Grid> */}

            <Grid container spacing={3}>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Total Student" image_index="3" count="0"/>
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Total Pending Vendor" image_index="2" count="0"/>
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Total Approved Vendor" image_index="1" count="0"/>
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Total Issued Device" image_index="3" count="0"/>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Contact Balance" image_index="4" count="40.ETH"/>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
