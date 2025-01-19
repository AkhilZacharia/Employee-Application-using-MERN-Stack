import React, { useState } from "react"; 
import { TextField, Button, Container, Typography, Box, Card, CardContent, CardActions, Grid2 } from "@mui/material";
import "./employeeform.css";
import { useNavigate } from "react-router-dom";
import axiosInstance from "./axiosInterceptor";


const Addemployee = () => {

     const[form,setForm]=useState({  
          EmployeeID: '',
          Name: '',
          Designation: '',
          Salary: 0,
          Department: '',
          Location: ''
        }) 

     const navigate=useNavigate();
     
     function addEmployee() {
          console.log(form);
          axiosInstance.post('http://localhost:3000/addEmployee',form).then(res => {
               alert(res.data.message);
               navigate('/admindashboard');
          }) .catch(error => {
               console.log(error);
             });
          navigate('/admindashboard')
     }
     return ( 
          <Container maxWidth="md" className="employee-form"> 
          <Card className="form-card"> 
               <CardContent> 
                    <Typography variant="h4" component="h1" gutterBottom> Add Employee </Typography> 
                    <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
                    <Grid2 container spacing={2}> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Employee ID" name="id"  required fullWidth onChange={(e)=>{
          setForm({...form,EmployeeID:e.target.value}) }}/> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Name" name="name"  required fullWidth onChange={(e)=>{
          setForm({...form,Name:e.target.value}) }}/> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Designation" name="designation"  required fullWidth onChange={(e)=>{
          setForm({...form,Designation:e.target.value}) }}/> 
                         </Grid2>
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Salary" name="salary" type="number"  required fullWidth onChange={(e)=>{
          setForm({...form,Salary:e.target.value}) }}/> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Department" name="department"  required fullWidth onChange={(e)=>{
          setForm({...form,Department:e.target.value}) }}/> 
                         </Grid2> <Grid2 item xs={12} sm={6}> 
                              <TextField label="Location" name="location"  required fullWidth onChange={(e)=>{
          setForm({...form,Location:e.target.value}) }}/> 
                         </Grid2> 
                         </Grid2> 
                    </Box> 
               </CardContent> 
               <CardActions className="form-actions"> 
               <Button variant="contained" color="error"  fullWidth onClick={addEmployee}> Add  </Button> 
               </CardActions> 
          </Card> 
          </Container>
     )
}

export default Addemployee