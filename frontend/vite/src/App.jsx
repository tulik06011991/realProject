import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'


function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<Register/>}/>
    </Routes>

    
    </>
    
  )
}

export default App
