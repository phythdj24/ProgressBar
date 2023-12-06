/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
const Navbar = () => {
  return (
    <div className='Nav'>
        <input type="text" placeholder='Search' /> 
        <Link >Login</Link>
        
    </div>
  )
}

export default Navbar