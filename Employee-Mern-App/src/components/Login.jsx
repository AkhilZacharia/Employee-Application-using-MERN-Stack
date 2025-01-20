import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material"; 
import "./loginform.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const[form,setForm]=useState({
    Email:'',
    Password:''
  }) 
  const navigate=useNavigate();

  function validate()   {
    let isValid = true;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(form.Email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }
    const passwordRegex = /^(?=.*\d).{5,}$/;
    if (!passwordRegex.test(form.Password)) {
      setPasswordError('Password must be at least 5 characters long and contain at least one number.');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };

  const login = (e) => {
    e.preventDefault();
    if (validate()) {
      loginValue()
    }
  };

  function loginValue(){
    // console.log(form);
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
        }}/> <p style={{color:'maroon'}}>{emailError}</p>
            <TextField label="Password" name="Password" type="password"   required onChange={(e)=>{
          setForm({...form,Password:e.target.value})                    
        }} /><p style={{color:'maroon'}}>{passwordError}</p> 
            <Button variant="contained" color="primary" onClick={login}> Login </Button> 
          </Box> 
          <Link to={'/register'} style={{textDecoration:'none'}}>New user? please Register here</Link> 
        </Box> 
        </Container>
    </>
  )
}

export default Login