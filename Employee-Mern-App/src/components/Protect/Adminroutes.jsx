import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const Adminroutes = () => {
    // let verifyAdmin=true;
    const token=sessionStorage.getItem('logintoken');
    let verifyAdmin=false;
    
    if(token){
        verifyAdmin=true;
    }
    return(
        verifyAdmin?<Outlet/>:<Navigate to={'/'}/>
    )
}

export default Adminroutes