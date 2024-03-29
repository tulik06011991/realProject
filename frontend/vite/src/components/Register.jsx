import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [username, setusername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8800/auth/register',
        {
          email: email,
          password: password,
          username: username
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
      );
      if (response) {

        window.location.href = '/login'
      } else {
        alert(`bomadi`)

      }
     
      // Handle response as needed
    } catch (error) {
      // Handle error
      console.log(error)
    }
  };

  return (
    <>



      

        <div className="h-screen bg-indigo-100 flex justify-center items-center">
          <div className="lg:w-2/5 md:w-1/2 w-2/3">
            <form className="bg-white p-10 rounded-lg shadow-lg min-w-full" onSubmit={handleSubmit}>
              <h1 className="text-center text-2xl mb-6 text-gray-600 font-bold font-sans">Formregister</h1>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" for="username">Username</label>
                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="username" id="username"  autoComplete="username"
                  required  onChange={(e) => setusername(e.target.value)} placeholder="username" />
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" for="email">Email</label>
                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="email" id="email" autoComplete="email"
                  required
                  onChange={(e) => setEmail(e.target.value)} placeholder="@email" />
              </div>
              <div>
                <label className="text-gray-800 font-semibold block my-3 text-md" for="password">Password</label>
                <input className="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" type="text" name="password" id="password" autoComplete="current-password"
                  required
                  onChange={(e) => setPassword(e.target.value)} placeholder="password" />
              </div>
              
              <br />
              <button type="submit" className=' transition duration-200 bg-blue-500  hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-dark w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block' >Register</button>
              <br />
            
            </form>
            
          </div>
        </div>
        
      
      
    </>
  );
};

export default Register;
