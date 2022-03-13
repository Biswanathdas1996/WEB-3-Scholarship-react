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

export default function AdminWallet() {
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
            <StartScholarship />
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
