import AppBar from "@mui/material/AppBar";
import Home from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import { Box, Button } from "@mui/material";
export default function AdminHeader({ name }) {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Home sx={{ mr: 2 }} style={{ color: "#fff" }} />
        </Link>
        <Typography variant="h6" color="inherit" noWrap>
          Admin {name}
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 5 }}>
          <Link to="/student-list" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Student List
            </Button>
          </Link>

          <Link to="/vendor-pending" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Pending Vendor List
            </Button>
          </Link>

          <Link to="/vendor-approved" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Approved Vendor List
            </Button>
          </Link>

          <Link to="/all-issued-device" style={{ textDecoration: "none" }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Issued Device List
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
