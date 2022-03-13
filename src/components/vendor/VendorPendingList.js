import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import VendorData from "./VendorData";
import contract from "../../contract/Scholarship";
import AdminHeader from "../admin/AdminHeader";

const theme = createTheme();
export default function VendorPendingList() {
  const [vendorData, setVendorData] = useState([]);
  const [start, setStart] = useState(false);
  useEffect(() => {
    fetchVendorData();
  }, []);

  async function fetchVendorData() {
    setStart(true);
    const vendorList = await contract.methods.getListOfVendors().call();
    const pendingVendor = vendorList.filter((item) => item.status === false);
    console.log("vendor", vendorList);
    setVendorData(pendingVendor);
    setStart(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AdminHeader name={""} />
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
                  <VendorData
                    title="Vendor Pending List"
                    vendorData={vendorData}
                    fetchVendorData={fetchVendorData}
                    pending={start}
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
