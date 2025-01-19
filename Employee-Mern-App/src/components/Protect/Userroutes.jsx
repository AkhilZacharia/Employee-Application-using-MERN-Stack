import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const Userroutes = () => {
    // let verifyUser=true;
    const token=sessionStorage.getItem('logintoken');
    let verifyUser=false;
    
    if(token){
        verifyUser=true;
    }
    return(
        verifyUser?<Outlet/>:<Navigate to={'/'}/>
    ) 
    
}

export default Userroutes