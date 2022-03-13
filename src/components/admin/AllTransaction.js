import  React,{useContext,useState,useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminHeader from "./AdminHeader";
import { DataCard } from "../common/DataCard";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { DashboardCard } from "../common/DashboadCard";
import lottery from "../../contract/Scholarship";
import { AccountContest } from "../../App";
import web3 from "../../web3";
import TransctionList from "../TransctionList"

import LinearProgress from "@mui/material/LinearProgress";
const theme = createTheme();

export default function AllTransaction() {
  const account = useContext(AccountContest);
  const [balance, setBalance] = useState(null);
  const [start, setStart] = useState(false);
  const [depositors, setDepositors] = useState(null);

  async function fetchData() {
    setStart(true);
    const balance = await web3.eth.getBalance(lottery.options.address);
    setBalance(balance);

    const depositors = await lottery.methods.getListOfDepositors().call();
    setDepositors(depositors);
    console.log("depositors", depositors);
    setStart(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ThemeProvider theme={theme}>
       {start && <LinearProgress color="secondary" />}
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
          <Row style={{ marginTop: 30 }}>
          <Col>
            <h3>Transctions </h3>
            <p>List of amount deposit</p>
            <TransctionList depositors={depositors} />
          </Col>
        </Row>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
}