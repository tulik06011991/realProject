import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
 
  const [] = useState(false)
  const [] = useState(false)





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
    
    </>
    // <div>
    //   Burada data state'indeki verileri göstermek için uygun bir JSX kodu yazabilirsiniz<p>{data.map((d) =>(
    //     <h4 key={d._id}>{d.email}</h4>
    //   ))}</p>
    // </div>
  );
};

export default Dashboard;
