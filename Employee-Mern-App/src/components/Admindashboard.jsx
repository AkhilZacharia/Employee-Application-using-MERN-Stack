import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import axiosInstance from './axiosInterceptor';
import './adminview.css'
import { Link, useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Admindashboard = () => {
     const[Id,setId]=useState() 
     const[data,setData]=useState([]) 
     const navigate=useNavigate();

     function load() {
      axiosInstance.get('http://localhost:3000/').then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }

  useEffect(() => {
    load();
  }, []);

  

  function updateEmployee(val) {
    const url = `http://localhost:3000/find/${val}`
    // console.log(val);
    axiosInstance.get(url).then(res => {
      // alert(res.data.message);
      const employee =res.data.employee;
      // console.log(res.data);
      navigate('/updateEmployee', { state: { val, employee } });
   }).catch((error)=>{
    alert('Failed');
   })
  }
  function deleteEmployee(val) {
    axiosInstance.delete(`http://localhost:3000/delete/${val}`).then(res => {
      load();
      navigate('/admindashboard/');
      alert(res.data.message);
    }).catch((error)=>{
     alert('Failed');
    })
  }

  return (
    <div id='adminview'>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>EmployeeID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Designation&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Salary&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Department&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Location&nbsp;</StyledTableCell>
            <StyledTableCell align="center">Actions&nbsp;</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
        {data.map(item => (
            <StyledTableRow key={item.EmployeeID}>
              <StyledTableCell component="th" scope="row">
                {item.EmployeeID}
              </StyledTableCell>
              <StyledTableCell align="right">{item.Name}</StyledTableCell>
              <StyledTableCell align="right">{item.Designation}</StyledTableCell>
              <StyledTableCell align="right">{item.Salary}</StyledTableCell>
              <StyledTableCell align="right">{item.Department}</StyledTableCell>
              <StyledTableCell align="right">{item.Location}</StyledTableCell>
              <StyledTableCell align="center">
                  <Button variant="contained" color="success" value={item._id}  onClick={(e) => {updateEmployee(e.target.value); }}>
                     Update</Button>&nbsp;
                  <Button variant="contained" color="error" value={item._id} onClick={(e) => {deleteEmployee(e.target.value); }}>
                     Delete</Button> 
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Admindashboard