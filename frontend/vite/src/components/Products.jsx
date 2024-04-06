import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';



const Products = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const [notificationOpen, setnotificationOpen] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)


  useEffect(() => {

    const fetchData = async () => {
        try {

            const response = await axios.get('http://localhost:8800/admin/productGet',
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                },

            );
            setData(response.data);
            console.log(response.data)

        } catch (error) {
            console.log(error)

        }
    };

    // useEffect içinde async fonksiyon direkt olarak kullanılamaz, bu yüzden IIFE kullanıyoruz
    (async () => {
        await fetchData();
    })();
}, []);



  return (
    <>
      <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <button className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" onClick={() => setsidebarOpen(!sidebarOpen)} >   <FaBars /></button>
                            <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button id="menuBtn">
                                <i className="fas fa-bars text-gray-500 text-lg"></i>
                            </button>
                        </div>
                    </div>


                    <div className="space-x-5">
                        <button>
                            <i className="fas fa-bell text-gray-500 text-lg"></i>
                        </button>

                        <button>
                            <i className="fas fa-user text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex flex-wrap">

                    <div className={`p-2 bg-white w-full md:w-60 flex flex-col md:flex ${sidebarOpen ? 'block' : 'hidden'}`} id="sideNav" >
                        <nav>
                            <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="/products">
                                <i className="fas fa-home mr-2"></i>Products
                            </Link>
                            <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="#">
                                <i className="fas fa-file-alt mr-2"></i>Autorizatsiya
                            </Link>
                            <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="#">
                                <i className="fas fa-users mr-2"></i>Users
                            </Link>
                            <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="#">
                                <i className="fas fa-store mr-2"></i>Comments
                            </Link>
                            <Link className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" to="#">
                                <i className="fas fa-exchange-alt mr-2"></i>Transacciones
                            </Link>
                        </nav>


                        <Link className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" to="#">
                            <i className="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
                        </Link>


                        </div>
                </div>

    </>

  )
}

export default Products