import AppBar from "@mui/material/AppBar";
import Home from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

export default function VendorHeader({ name }) {
  return (
    <>
      <AppBar position="relative" style={{backgroundColor:"#d25304",color:"#fff"}}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home sx={{ mr: 2 }} style={{ color: "#fff" }} />
          </Link>
          <Typography variant="h6" color="inherit" noWrap>
            Vendor
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 5 }}>
            <Link to="/vendor-dashboard/0" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Home
              </Button>
            </Link>
            <Link to="/issue-device" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Issue Device
              </Button>
            </Link>

            <Link to="/vendor-issued-list" style={{ textDecoration: "none" }}>
              <Button sx={{ my: 2, color: "white", display: "block" }}>
                Issued Device List
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
