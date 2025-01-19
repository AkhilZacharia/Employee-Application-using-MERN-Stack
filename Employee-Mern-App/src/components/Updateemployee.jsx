import React, { useState } from "react"; 
import { TextField, Button, Container, Typography, Box, Card, CardContent, CardActions, Grid2 } from "@mui/material";
import "./employeeform.css";

const Updateemployee = () => {
  return (
    <div>
        <Container maxWidth="md" className="employee-form"> 
          <Card className="form-card"> 
               <CardContent> 
                    <Typography variant="h4" component="h1" gutterBottom> Edit Employee </Typography> 
                    <Box component="form"  sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}> 
                    <Grid2 container spacing={2}> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Employee ID" name="id"  required fullWidth /> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Name" name="name"  required fullWidth /> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Designation" name="designation"  required fullWidth /> 
                         </Grid2>
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Salary" name="salary" type="number"  required fullWidth /> 
                         </Grid2> 
                         <Grid2 item xs={12} sm={6}> 
                              <TextField label="Department" name="department"  required fullWidth /> 
                         </Grid2> <Grid2 item xs={12} sm={6}> 
                              <TextField label="Location" name="location"  required fullWidth /> 
                         </Grid2> 
                         </Grid2> 
                    </Box> 
               </CardContent> 
               <CardActions className="form-actions"> 
               <Button variant="contained" color="secondary" type="submit" fullWidth> Submit </Button> 
               </CardActions> 
          </Card> 
          </Container>
    </div>
  )
}

export default Updateemployee