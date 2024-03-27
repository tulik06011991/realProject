import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserMain = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // const accessToken = localStorage.getItem('access_token');
    // setToken(accessToken);
    // console.log(token)
    const fetchData = async () => {
      try {
        // localStorage'dan tokeni al

        // Tokeni kullanarak API'den veriyi al
        const response = await axios.get('http://localhost:8800/hotel', 
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        },
          
        );
        const hotel = response.data

        setData(hotel);
        console.log(hotel);
      } catch (error) {
        console.error('Dashboard Error:', error);
      }
    };

    // useEffect içinde async fonksiyon direkt olarak kullanılamaz, bu yüzden IIFE kullanıyoruz
    (async () => {
      await fetchData();
    })();
  }, []);
  return (
    <h1>salom foydalanuvchi  <br />
    {data.map((d) =>(
      <div key={d._id}>

        <h1>{d.city}</h1>
        <p>{d.name} </p>

      </div>
      
    ))}
    
    </h1>
  )
}

export default UserMain
