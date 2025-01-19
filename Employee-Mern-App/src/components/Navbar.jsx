import React from 'react'
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Navbar = ({child}) => {
  const navigate = useNavigate();
  
    function Logout(){
      sessionStorage.removeItem('logintoken');
       navigate('/');
     }
    return (
    <>
      <AppBar component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Welcome
        </Typography>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key='Home' sx={{ color: '#fff' }}>Home</Button>
            <Button key='Logout' sx={{ color: '#fff' }} onClick={Logout}>Log out</Button>
        </Box>
      </Toolbar>
    </AppBar>
      {child}
    </>
    );
  }

export default Navbar