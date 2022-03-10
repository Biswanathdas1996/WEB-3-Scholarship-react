
import AppBar from '@mui/material/AppBar';
import Home from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
export default function AdminHeader({name}) {
    return(
        <AppBar position="relative">
        <Toolbar>
          <Home sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Admin :{name}
          </Typography>
        </Toolbar>
      </AppBar>
    )


}