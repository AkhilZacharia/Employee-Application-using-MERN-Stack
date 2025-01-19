import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navadmin({children}) {
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
        Admin Dashboard
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Button key='Home' sx={{ color: '#fff' }}>
            <Link to={'/admindashboard'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            </Button>
            <Button key='Home' sx={{ color: '#fff' }}>
              <Link to={'/addEmployee'} style={{textDecoration:'none',color:'white'}}>Add Employee</Link>
              </Button>
            <Button key='Logout' sx={{ color: '#fff' }} onClick={Logout}>Log out</Button>
        </Box>
    </Toolbar>
    </AppBar>
    &nbsp;
    {children}
    </>
  );
}

export default Navadmin;
