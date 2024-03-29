import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import UserMain from './components/UserMain'
import Logout from './components/Logout'
import Products from './components/Products'




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element ={<Dashboard/>}/>
        <Route path='/userMain' element ={<UserMain/>}/>
        <Route path='/logout' element ={<Logout/>}/>
        <Route path='/products' element ={<Products/>}/>
      </Routes>

    </>
  )
}

export default App