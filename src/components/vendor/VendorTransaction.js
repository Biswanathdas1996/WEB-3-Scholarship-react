import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import VendorHeader from "./VendorHeader";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Title from "../vendor/Title";
import { Link } from "react-router-dom";
const theme = createTheme();
export default function VendorTransaction() {
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
                <Title>
                  {" "}
                  Transaction History{" "}
                  <Link to="/vendor-dashboard">
                    {" "}
                    <span style={{ float: "right" }}>
                      <Button>Back</Button>
                    </span>
                  </Link>
                </Title>

                <Timeline style={{ alignItems: "baseline" }}>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div
                        style={{
                          height: "100px",
                          border: "2px solid #28b8b8",
                          padding: "10px",
                          borderRadius: "5px",
                          width: "300px",
                          backgroundColor: "#fff",
                          color: "#2c7070",
                          fontFamily: "ui-monospace",
                        }}
                      >
                        <div>
                          <span>
                            <b>Name:</b>
                          </span>{" "}
                          User1
                        </div>
                        <div>
                          <span>
                            <b>Amount:</b>
                          </span>{" "}
                          5000
                        </div>
                        <div>
                          <span>
                            <b>Date:</b>
                          </span>{" "}
                          02/02/2022
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                  <TimelineItem>
                    <TimelineSeparator>
                      <TimelineDot color="success" />
                    </TimelineSeparator>
                    <TimelineContent>
                      <div
                        style={{
                          height: "100px",
                          border: "2px solid #28b8b8",
                          padding: "10px",
                          borderRadius: "5px",
                          width: "300px",
                          backgroundColor: "#fff",
                          color: "#2c7070",
                          fontFamily: "ui-monospace",
                        }}
                      >
                        <div>
                          <span>
                            <b>Name:</b>
                          </span>{" "}
                          User1
                        </div>
                        <div>
                          <span>
                            <b>Amount:</b>
                          </span>{" "}
                          5000
                        </div>
                        <div>
                          <span>
                            <b>Date:</b>
                          </span>{" "}
                          02/02/2022
                        </div>
                      </div>
                    </TimelineContent>
                  </TimelineItem>
                </Timeline>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}
