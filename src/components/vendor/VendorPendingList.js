import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import VendorData from "./VendorData";
import SideBar from "../common/SideBar";
import contract from "../../contract/Lottery";
import VendorHeader from "./VendorHeader";

const theme = createTheme();
export default function VendorPendingList() {
  const [vendorData, setVendorData] = useState([]);
  useEffect(() => {
    fetchVendorData();
  }, []);

  async function fetchVendorData() {
    const vendorList = await contract.methods.getListOfVendors().call();
    const pendingVendor = vendorList.filter((item) => item.status === false);
    console.log("vendor", vendorList);
    setVendorData(pendingVendor);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VendorHeader name={"Wev 3.0"} />
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
                  <VendorData
                    title="Vendor Pending List"
                    vendorData={vendorData}
                    fetchVendorData={fetchVendorData}
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
