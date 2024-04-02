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

   
<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
    <div className="text-center pb-12">
        <h2 className="text-base font-bold text-indigo-600">
            We have the best equipment
        </h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p className="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p className="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p className="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div className="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div className="mb-8">
                <img className="object-center object-cover rounded-full h-36 w-36" src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80" alt="photo"/>
            </div>
            <div className="text-center">
                <p className="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p className="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
    </div>
</section>
    // <h1>salom foydalanuvchi  <br />
    // {data.map((d) =>(
    //   <div key={d._id}>

    //     <h1>{d.city}</h1>
    //     <p>{d.name} </p>

    //   </div>
      
    // ))}
    
    // </h1>
  )
}

export default UserMain
