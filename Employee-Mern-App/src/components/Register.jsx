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
  const navigate=useNavigate();

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
            <Grid2 item xs={12} sm={6}> <TextField label="Name" name="Name"  required fullWidth onChange={(e)=>{
          setForm({...form,Name:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Age" name="Age" type="number"  required fullWidth onChange={(e)=>{
          setForm({...form,Age:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Email" name="Email" type="email"  required fullWidth onChange={(e)=>{
          setForm({...form,Email:e.target.value}) }}/> </Grid2> 
            <Grid2 item xs={12} sm={6}> <TextField label="Password" name="Password" type="password"  required fullWidth onChange={(e)=>{
          setForm({...form,Password:e.target.value}) }}/> </Grid2>  
            <Grid2 item xs={12} sm={6}> <TextField label="Phone" name="Phone" type="number"  required fullWidth onChange={(e)=>{
          setForm({...form,Phone:e.target.value}) }}/> </Grid2> 

            </Grid2> 
        </Box> 
      </CardContent> 
      <CardActions className="form-actions"> 
      <Button variant="contained" color="success" type="submit" onClick={registerValue} fullWidth> Submit </Button> 
      </CardActions> 
    </Card> 
  </Container> 
);
}

export default Register