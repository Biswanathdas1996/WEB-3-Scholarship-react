import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VendorHeader from "./VendorHeader";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DataCard } from "../common/DataCard";
import contract from "../../contract/Scholarship";
import { Route, useParams } from "react-router-dom";
import VendorInfo from "./VendorInfo";
import { DashboardCard } from "../common/DashboadCard";

const theme = createTheme();

export default function VendorDashboard(props) {
  const [vendorData, setVendorData] = useState([]);
  const id = localStorage.getItem("vendorID");

  useEffect(() => {
    fetchVendorData();
  }, []);

  async function fetchVendorData() {
    const vendorList = await contract.methods.getListOfVendors().call();

    console.log("vendor", vendorList[id]);
    vendorList[id] && setVendorData(vendorList[id]);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VendorHeader name="" />
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
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Container maxWidth={false}>
            <Grid container spacing={3}>
              {/* <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Total Issued Device"
                  icon={<PeopleIcon />}
                  count="0"
                />
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Earning"
                  icon={<AccountBalanceWalletIcon />}
                  count={
                    parseFloat(
                      vendorData?.amount / 1000000000000000000
                    ).toFixed(2) + " ETH"
                  }
                />
              </Grid> */}

              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Total Issued Device" image_index="4" count="0"/>
              </Grid>
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DashboardCard title="Earning" image_index="4" count={
                    parseFloat(
                      vendorData?.amount / 1000000000000000000
                    ).toFixed(2) + " ETH"
                  }/>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth={false} style={{ marginTop: 30 }}>
            <center>
              <VendorInfo vendorData={vendorData} />
            </center>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
