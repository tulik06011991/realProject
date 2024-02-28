import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { Route, Routes,} from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'

function App() {
  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element ={<Login/>}/>
    </Routes>

    
    </>
    
  )
}

export default App
