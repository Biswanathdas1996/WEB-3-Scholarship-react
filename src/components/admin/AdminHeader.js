
import AppBar from '@mui/material/AppBar';
import Home from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
export default function AdminHeader({name}) {
    return(
        <AppBar position="relative">
        <Toolbar>
          <Link to="/" style={{textDecoration:"none"}}><Home sx={{ mr: 2 }} style={{color:"#fff"}} /></Link> 
          <Typography variant="h6" color="inherit" noWrap>
            Admin :{name}
          </Typography>
        </Toolbar>
      </AppBar>
    )


}