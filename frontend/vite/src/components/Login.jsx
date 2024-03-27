import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmitt = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8800/auth/login',
        { email: email, password: password },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
      );
      console.log(response.data)
      if (response.data.isAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/userMain');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmitt}>
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
    </div>
  );
};

export default Login;
