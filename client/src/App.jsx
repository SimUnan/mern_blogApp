import React, { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar.jsx'
import HomePage from './pages/home/HomePage'
import LoginPage from './pages/auth/LoginPage.jsx'
import RegisterPage from './pages/auth/RegisterPage.jsx'

import {Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <div className='h-fit bg-bg_color text-txt_color pb-20 duration-150 ease-in'>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/register' element={<RegisterPage />}/>
        </Routes>
    </div>
  )
}

export default App
