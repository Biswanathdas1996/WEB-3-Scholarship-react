
import AppBar from '@mui/material/AppBar';
import Home from '@mui/icons-material/Home';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import {Link} from 'react-router-dom';
export default function StudentHeader({name}) {
    return(
        <AppBar position="relative" style={{backgroundColor:"#d25304",color:"#fff"}}>
        <Toolbar>
          <Link to="/" style={{textDecoration:"none"}}><Home sx={{ mr: 2 }} style={{color:"#fff"}} /></Link>
          <Typography variant="h6" color="inherit" noWrap>
            Student :{name}
          </Typography>
        </Toolbar>
      </AppBar>
    )


}