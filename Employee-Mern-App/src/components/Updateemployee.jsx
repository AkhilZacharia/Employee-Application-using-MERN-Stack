import React, { useState } from "react"; 
import { TextField, Button, Container, Typography, Box, Card, CardContent, CardActions, Grid2 } from "@mui/material";
import "./employeeform.css";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from './axiosInterceptor';
import { useEffect } from "react";


const Updateemployee = () => {
     const location = useLocation(); 
     const { id, employeeData } = location.state || {};
     // console.log(location.state.employee.Name)
     const[form,setForm]=useState({  
          EmployeeID: '',
          Name: '',
          Designation: '',
          Salary: 0,
          Department: '',
          Location: ''
        }) 
        const navigate=useNavigate(); 
        function update() {
          // console.log(form);
          if(location.state!=null){
               axiosInstance.put('http://localhost:3000/edit/'+location.state.val,form).then((res)=>{
                 alert(res.data.message);
                 navigate('/admindashboard')
               })
          }
        } 

        useEffect(()=>{
          if (location.state!=null) {                              
            setForm({...form,
               EmployeeID: location.state.employee.EmployeeID,
               Name: location.state.employee.Name,
               Designation: location.state.employee.Designation,
               Salary: location.state.employee.Salary,
               Department: location.state.employee.Department,
               Location: location.state.employee.Location
            })
        }
       },[])
  return (
    <div>
        <Container maxWidth="md" className="employee-form"> 
          <Card className="form-card"> 
               <CardContent> 
                    <Typography variant="h4" component="h1" gutterBottom> Edit Employee </Typography> 
                    <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
                    <Grid2 container spacing={2}> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Employee ID" name="id"  required fullWidth value={form.EmployeeID} onChange={(e)=>{
          setForm({...form,EmployeeID:e.target.value})
  }}/> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Name" name="name"  required fullWidth value={form.Name} onChange={(e)=>{
          setForm({...form,Name:e.target.value})
  }}/>  
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Designation" name="designation"  required fullWidth value={form.Designation} onChange={(e)=>{
          setForm({...form,Designation:e.target.value})
  }}/> 
                         </Grid2>
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Salary" name="salary" type="number"  required fullWidth value={form.Salary} onChange={(e)=>{
          setForm({...form,Salary:e.target.value})
  }}/>  
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Department" name="department"  required fullWidth value={form.Department} onChange={(e)=>{
          setForm({...form,Department:e.target.value})
  }}/>  
                         </Grid2> <Grid2 item xs={12} sm={6}> 
                              <TextField label="Location" name="location"  required fullWidth value={form.Location} onChange={(e)=>{
          setForm({...form,Location:e.target.value})
  }}/>  
                         </Grid2> 
                         </Grid2> 
                    </Box> 
               </CardContent> 
               <CardActions className="form-actions"> 
               <Button variant="contained" color="secondary"  fullWidth onClick={update}> Update </Button> 
               </CardActions> 
          </Card> 
          </Container>
    </div>
  )
}

export default Updateemployee