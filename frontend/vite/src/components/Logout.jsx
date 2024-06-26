import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Logout = () => {
 
 const navigate  = useNavigate()
    useEffect(() =>{
      
        const handleLogout = async () => {
            try {
              const response = await axios.get('http://localhost:8800/auth/logout', {
                
              withCredentials: true // Cookie-larni so'rovga qo'shish
              });
              const token = response.headers.get('access_token')
              if(!token){
                  navigate('/login')
              }
              // Ekranga chiqaramiz
            } catch (error) {
              console.error('Xatolik yuz berdi:', error);
            }
          };
          handleLogout()

    },[])


  return (
    <div></div>
  )
}

export default Logout
