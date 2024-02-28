import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Contact from './components/Contact'
import Menu from './components/Menu'
import About from './components/About'



function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/register' element ={<Register/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/menu' element ={<Menu/>}/>
      <Route path='/contact' element ={<Contact/>}/>
    </Routes>

    
    </>
    
  )
}

export default App
