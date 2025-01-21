import React, { useState } from "react"; 
import { TextField, Button, Container, Typography, Box, Card, CardContent, CardActions, Grid2 } from "@mui/material"; 
import "./registeruser.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const[form,setForm]=useState({  
    Name: '',
    Age: 0,
    Email:'',
    Password:'',
    Phone: 0
  }) 
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  
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
    const nameRegex = /^[A-Z][a-zA-Z]{1,}$/;
    if (!nameRegex.test(form.Name)) {
      setNameError('Name must start with a capital letter and be at least 2 characters long');
      isValid = false;
    } else {
      setNameError('');
    }
    const phoneRegex = /^(?=.*\d).{6,}$/;
    if (!phoneRegex.test(form.Phone)) {
      setPhoneError('Phone no must be at least 6 digits.');
      isValid = false;
    } else {
      setPhoneError('');
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    if (validate()) {
      registerValue()
    }
  };

  function registerValue(){
    console.log(form);
    axios.post('http://localhost:3000/login/add/',form).then((res)=>{
     alert(res.data.message);
       navigate('/');
    }).catch((error)=>{
     alert('Failed');
    })
   }
  return ( 
  <Container maxWidth="md" className="register-form"> 
  <Card className="form-card"> 
      <CardContent> 
        <Typography variant="h4" component="h1" gutterBottom> Register User </Typography> 
        <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
          <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={6}> <TextField label="Name" name="Name" helperText={nameError} required fullWidth onChange={(e)=>{
          setForm({...form,Name:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Age" name="Age" type="number" required fullWidth onChange={(e)=>{
          setForm({...form,Age:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Email" name="Email" type="email" helperText={emailError} required fullWidth onChange={(e)=>{
          setForm({...form,Email:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Password" name="Password" type="password" helperText={passwordError} required fullWidth onChange={(e)=>{
          setForm({...form,Password:e.target.value}) }}/> </Grid2>  
            <Grid2 item xs={12} sm={6}> <TextField label="Phone" name="Phone" type="number" helperText={phoneError} required fullWidth onChange={(e)=>{
          setForm({...form,Phone:e.target.value}) }}/>
            </Grid2> 

            </Grid2> 
        </Box> 
      </CardContent> 
      <CardActions className="form-actions"> 
      <Button variant="contained" color="success" type="submit" onClick={register} fullWidth> Submit </Button> 
      </CardActions> 
    </Card> 
  </Container> 
);
}

export default Register