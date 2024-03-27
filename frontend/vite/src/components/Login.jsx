import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  





  const handleSubmit = async(e) => {
    e.preventDefault()
    
    await axios.post(`http://localhost:8800/auth/login`, email,password)
    console.log(email)
      .then((response) =>console.log(response.data))
      .catch((error) =>console.log(error))
     
     
    
  }
  return (
    <>
   <form onSubmit={handleSubmit}>
    <input type="email"   onChange={(e) =>setEmail(e.target.value)}/>
    <br />
    <input type="password" onChange={(e) =>setPassword(e.target.value)} />
    <button type='submit'>ketti</button>

   </form>
    </>
  )
}

export default Login