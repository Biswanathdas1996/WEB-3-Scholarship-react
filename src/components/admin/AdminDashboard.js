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
import { Paper } from '@mui/material';
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
           height: "100vh",
           overflow: "auto",
         }}
        >
          <Container maxWidth="sm">
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 60,
              },
            }}
          >
            
            <Paper elevation={3}></Paper>
    </Box>

            
          </Container>
        </Box>
        
      </main>
     
    </ThemeProvider>
  );
}