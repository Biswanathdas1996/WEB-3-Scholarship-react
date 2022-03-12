import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Home from "@mui/icons-material/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ImageCard } from "../common/ImageCard";
const theme = createTheme();

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" style={{backgroundColor:"#d25304",color:"#fff"}}>
        <Toolbar>
          <Home sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Welcome to E-Scholarship
          </Typography>
        </Toolbar>
      </AppBar>
      <main >
        {/* Hero unit */}
        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
               
            pt: 8,
            pb: 6,
            height: "90vh",
            overflow: "auto",
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
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Reduce Corruption when spend your Scholarship.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={1}
              justifyContent="center"
            >{/* 
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
                  Student Register
                </Button>
              </Link>
              <Link to="/vendor-register" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ backgroundColor: "#fff" }}
                >
                  Vendor Register
                </Button>
              </Link>
              <Link to="/vendor-dashboard/0" style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
                  Vendor Dashboard
                </Button>
              </Link>
              <Link to="/admin-dashboard" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ backgroundColor: "#fff" }}
                >
                  admin Dashboard
                </Button>
              </Link>
              <Link to="/student-details/0" style={{ textDecoration: "none" }}>
                <Button variant="outlined" style={{ backgroundColor: "#fff" }}>
                  Student Dashboard
                </Button>
              </Link> */}

            
              <div style={{display:"inline-flex"}}>
              <Link to="/register" style={{ textDecoration: "none" }}>
                  <ImageCard title="Student Register" image_index="0"/>
              </Link>
              <Link to="/vendor-register" style={{ textDecoration: "none" }}>
                  <ImageCard title="Vendor Register" image_index="1"/>
              </Link>
              <Link to="/vendor-dashboard/0" style={{ textDecoration: "none" }}>
                  <ImageCard title="Vendor Dashboard" image_index="2"/>
              </Link>
              <Link to="/admin-dashboard" style={{ textDecoration: "none" }}>
                  <ImageCard title="Admin Dashboard" image_index="3"/>
              </Link>
              <Link to="/student-details/0" style={{ textDecoration: "none" }}>
                  <ImageCard title="Student Dashboard" image_index="4"/>
              </Link>
              

              </div>


            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
