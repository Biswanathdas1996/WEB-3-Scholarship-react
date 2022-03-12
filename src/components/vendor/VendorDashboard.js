import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import VendorHeader from "./VendorHeader";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DataCard } from "../common/DataCard";
const theme = createTheme();

export default function VendorDashboard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <VendorHeader name="Wev 3.0" />
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
              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Total Issued Device"
                  icon={<PeopleIcon />}
                  count="0"
                />
              </Grid>

              <Grid item xl={3} lg={3} sm={6} xs={12}>
                <DataCard
                  name="Wallet Balance"
                  icon={<AccountBalanceWalletIcon />}
                  count={500}
                />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
