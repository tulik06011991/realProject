<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import axios from 'axios'
=======
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate= useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Data, setData] = useState('')
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      
      
      const response = await axios.post(
        'http://localhost:8800/auth/login',{email: email, password: password},
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
        );
        if(response.data.isAdmin){
          // localStorage.setItem('access_token', response.data.token);
          navigate('/dashboard')
        }else{
          navigate('/userMain')
        }
        
        
        
       
        
        // console.log(data)
        
        // Handle response as needed
      } catch (error) {
        // Handle error
        console.log(error)
      }
    };
    
    return (
      <div>
<form onSubmit={handleSubmitt} >
  <br />
  <br />
<input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <br />
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                /> <br /><br />
                <button
                type="submit" 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>

</form>





















      {/* <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <Link to="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a Link member?
            <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Start Link 14 day free trial
            </Link>
          </p>
        </div>
      </div> */}
    </div>
  );
};
=======
import React from 'react'
>>>>>>> 3e8c2bd301ee8fc6a21b076325a1cb41fb5747db

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
>>>>>>> 2ecca0c9f7a545fb98ff1b9d41074cc5fe91e16b

export default Login;
