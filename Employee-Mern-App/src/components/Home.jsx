import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';

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

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/user/home/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Home