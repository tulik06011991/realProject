import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const [sidebarOpen, setsidebarOpen] = useState(false)
  const [notificationOpen, setnotificationOpen] = useState(false)
  const [dropdownOpen, setdropdownOpen] = useState(false)
  





  useEffect(() => {
   
    const fetchData = async () => {
      try {
        
        const response = await axios.get('http://localhost:8800/users', 
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
        navigate('/login')
       
      }
    };

    // useEffect içinde async fonksiyon direkt olarak kullanılamaz, bu yüzden IIFE kullanıyoruz
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <>
    <div class="flex flex-col h-screen bg-gray-100">


<div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
    <div class="flex items-center">
        <div class="flex items-center"> 
            <img src="https://www.emprenderconactitud.com/img/POC%20WCS%20(1).png" alt="Logo" class="w-28 h-18 mr-2"/>
            <h2 class="font-bold text-xl">Nombre de la Aplicación</h2>
        </div>
        <div class="md:hidden flex items-center"> 
            <button id="menuBtn">
                <i class="fas fa-bars text-gray-500 text-lg"></i> 
            </button>
        </div>
    </div>

    
    <div class="space-x-5">
        <button>
            <i class="fas fa-bell text-gray-500 text-lg"></i>
        </button>
       
        <button>
            <i class="fas fa-user text-gray-500 text-lg"></i>
        </button>
    </div>
</div>


<div class="flex-1 flex flex-wrap">
  
    <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
        <nav>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-home mr-2"></i>Inicio
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-file-alt mr-2"></i>Autorizaciones
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-users mr-2"></i>Usuarios
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-store mr-2"></i>Comercios
            </a>
            <a class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" href="#">
                <i class="fas fa-exchange-alt mr-2"></i>Transacciones
            </a>
        </nav>

        
        <a class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="#">
            <i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
        </a>

       
        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

       
        <p class="mb-1 px-5 py-3 text-left text-xs text-cyan-500">Copyright WCSLAT@2023</p>

    </div>

    
    <div class="flex-1 p-4 w-full md:w-1/2">
   
        <div class="relative max-w-md w-full">
            <div class="absolute top-1 left-2 inline-flex items-center p-2">
                <i class="fas fa-search text-gray-400"></i>
            </div>
            <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Buscar..."/>
        </div>

             
        <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
          
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">Usuarios</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div class="chart-container" style={{position: "relative", height:"150px", width:"100%"}}>
                    
                    <canvas id="usersChart"></canvas>
                </div>
            </div>

            
            <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">Comercios</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <div class="chart-container" style={{position: "relative", height:"150px", width:"100%"}}>
                   
                    <canvas id="commercesChart"></canvas>
                </div>
            </div>
        </div>

        
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <h2 class="text-gray-500 text-lg font-semibold pb-4">Autorizaciones Pendientes</h2>
            <div class="my-1"></div> 
            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
            

            <table class="w-full table-auto text-sm">
                
                <thead>
                    <tr class="text-sm leading-normal">
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">ISM</th>
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">EMAIL</th>
                        <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">PASSWORD</th>
                    </tr>
                </thead>


                <tbody>{
                    data.map((d) =>(

                    <tr class="hover:bg-grey-lighter mx-auto">
                        <td class="py-2 px-4  border-b border-grey-light">{d.username}</td>
                        <td class="py-2 px-4 border-b border-grey-light">{d.username}</td>
                        <td class="py-2 px-4 border-b border-grey-light">{d.email}</td>
                    </tr>
                    ))
                        }
                </tbody>
            </table>
           
            
            <div class="text-right mt-4">
                <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                    Ver más
                </button>
            </div>
        </div>

       
        <div class="mt-8 bg-white p-4 shadow rounded-lg">
            <div class="bg-white p-4 rounded-md mt-4">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">Transacciones</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <table class="w-full table-auto text-sm">
                    <thead>
                        <tr class="text-sm leading-normal">
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Nombre</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">Fecha</th>
                            <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="hover:bg-grey-lighter">
                            <td class="py-2 px-4 border-b border-grey-light">Carlos Sánchez</td>
                            <td class="py-2 px-4 border-b border-grey-light">27/07/2023</td>
                            <td class="py-2 px-4 border-b border-grey-light text-right">$1500</td>
                        </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Pedro Hernández</td>
                        <td class="py-2 px-4 border-b border-grey-light">02/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$1950</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Sara Ramírez</td>
                        <td class="py-2 px-4 border-b border-grey-light">03/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$1850</td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                        <td class="py-2 px-4 border-b border-grey-light">Daniel Torres</td>
                        <td class="py-2 px-4 border-b border-grey-light">04/08/2023</td>
                        <td class="py-2 px-4 border-b border-grey-light text-right">$2300</td>
                    </tr>
                    </tbody>
                </table>
                
                <div class="text-right mt-4">
                    
                    <div class="text-right mt-4">
                        <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                            Ver más
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>


    </>

    
  );
};

export default Dashboard;
