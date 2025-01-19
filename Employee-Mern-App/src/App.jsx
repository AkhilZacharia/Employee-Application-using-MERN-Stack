import { useState } from 'react'
import './App.css'
import Admindashboard from './components/Admindashboard'
import Addemployee from './components/Addemployee'
import NavbarAdmin from './components/NavbarAdmin'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Updateemployee from './components/Updateemployee'
import Register from './components/Register'
import Userroutes from './components/Protect/Userroutes'
import Adminroutes from './components/Protect/Adminroutes'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route element={<Userroutes/>}>
            <Route path='/home' element={<Navbar child={<Home />}/>}></Route>
          </Route>
          <Route element={<Adminroutes/>}>
            <Route path='/admindashboard' element={<NavbarAdmin children={<Admindashboard />}/>}></Route>
            <Route path='/addEmployee' element={<NavbarAdmin children={<Addemployee />}/>}></Route>
            <Route path='/updateEmployee' element={<NavbarAdmin children={<Updateemployee />}/>}></Route>
          </Route>
      </Routes>
    </>
  )
}

export default App
