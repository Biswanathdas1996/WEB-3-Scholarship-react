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
import { SmallCard } from '../common/SmallCard';
const theme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Home sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Welcome to E-Scholarship
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            backgroundColor: (theme) =>
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
            pt: 8,
            pb: 6,
            height: "100vh",
            overflow: "auto"
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              E-SCHOLARSHIP
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             Reduce Corruption  when spend your Scholarship.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              
              <Link to="/register" style={{textDecoration:"none"}}>
                  <Button variant="outlined" style={{backgroundColor:'#fff'}}>Student Register</Button>
              </Link>
              <Link to="/vendor-register" style={{textDecoration:"none"}}>
                    <Button variant="outlined" color="secondary" style={{backgroundColor:'#fff'}}>Vendor Register</Button>
              </Link>
              <Link to="/vendor-dashboard" style={{textDecoration:"none"}}>
                    <Button variant="outlined" style={{backgroundColor:'#fff'}}>Vendor Dashboard</Button>
              </Link>
              <Link to="/admin-dashboard" style={{textDecoration:"none"}}>
                    <Button variant="outlined" color="secondary" style={{backgroundColor:'#fff'}}>admin Dashboard</Button>
              </Link>
              <Link to="/student-details" style={{textDecoration:"none"}}>
                    <Button variant="outlined" style={{backgroundColor:'#fff'}}>Student Dashboard</Button>
              </Link>
            </Stack>
          </Container>
        </Box>
        
      </main>
     
    </ThemeProvider>
  );
}