import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material"; 
import "./loginform.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const[form,setForm]=useState({
    Email:'',
    Password:''
  }) 
  const navigate=useNavigate();

  function loginValue(){
    console.log(form);
    axios.post('http://localhost:3000/login/',form).then((res)=>{
     alert(res.data.message);
     if(res.data.key){
       sessionStorage.setItem('logintoken',res.data.key); 
       if(res.data.role=='admin') {
        navigate('/admindashboard');
       }
       else if(res.data.role =='user') {
       navigate('/home');
       }
     }
     else{
       navigate('/');
     }
    }).catch((error)=>{
     alert('Invalid Login');
    })
   }

  return (
    <>
       <Container maxWidth="xs" className="login-container"> 
        <Box className="login-box"> 
          <Typography variant="h4" component="h1" gutterBottom> Login </Typography> 
          <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
            <TextField label="Email" name="Email" type="email"  required onChange={(e)=>{
          setForm({...form,Email:e.target.value})                     
        }}/> 
            <TextField label="Password" name="Password" type="password"   required onChange={(e)=>{
          setForm({...form,Password:e.target.value})                     
        }} /> 
            <Button variant="contained" color="primary" onClick={loginValue}> Login </Button> 
          </Box> 
          <Link to={'/register'} style={{textDecoration:'none'}}>New user? please Register here</Link> 
        </Box> 
        </Container>
    </>
  )
}

export default Login