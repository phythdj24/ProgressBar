/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'

import './App.css'
import { Home } from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './components/CartPage'


function App() {
  

  return (
 
    <div className='App'>

  <BrowserRouter>
  <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/cart' element={<CartPage />} />
  </Routes>
  </BrowserRouter>
  
      



    </div>
  )
}

export default App
