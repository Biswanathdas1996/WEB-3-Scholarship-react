import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Home from '@mui/icons-material/Home';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AdminHeader from './AdminHeader';
import { DataCard } from '../common/DataCard';
import { Paper } from '@mui/material';

import PeopleIcon from '@mui/icons-material/PeopleOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const theme = createTheme();

export default function AdminDashboard() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <AdminHeader name="Admin"/>
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
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
           <Link to="/student-list" style={{textDecoration:"none"}}> <DataCard name="Student List" icon={<PeopleIcon />} /></Link>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/vendor-pending" style={{textDecoration:"none"}}><DataCard name="Pending Vendor List" icon={<PeopleIcon />} count="0"/></Link>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/vendor-approved" style={{textDecoration:"none"}}><DataCard name="Approved Vendor List" icon={<PeopleIcon />} count="0"/></Link>
          </Grid>

          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Link to="/all-transaction" style={{textDecoration:"none"}}><DataCard name="Transaction" icon={<AccountBalanceWalletIcon />} /></Link>
          </Grid>
         
       
         
         
        </Grid>
      </Container>
    </Box>
        
      </main>
    </ThemeProvider>
  );
}