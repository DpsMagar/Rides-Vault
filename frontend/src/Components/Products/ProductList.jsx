import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ProductList() {
    const[data, setData]= useState([])
    const {state: message}= useLocation();
    
    

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/${message}/`);
                setData(response.data);
                
            } catch (error) {
                console.log(error);
            }
        };        
    
        fetchData();
    }, [message]);
    
    
    

  return (
      
      <div className='min-h-screen bg-customColor max-w-screen p-10 overflow-hidden'>
        <div className='text-7xl font-teko'>{message.charAt(0).toUpperCase() + message.slice(1)}s:</div>
        <div className='p-3 mx-9 mt-1 h-full w-full flex flex-wrap justify-start gap-7'>

            {data.map((item)=>(
                <>
                <Link to={`/${message}/details`} state={item.id} onClick={()=>localStorage.setItem('id',item.id)}>
                {/* {localStorage.setItem('id', item.id)} */}
                    <div className='bg-yellow-950 rounded-lg size-60 flex flex-col justify-center shadow-lg hover:shadow-md hover:shadow-yellow-800'>
                        <div className='size-44 mx-auto'>
                            <img src={item.image} alt="" />
                        </div >
                        <span className='text-gray-500 w-auto mx-auto'>{item.name}</span>
                    </div>
                </Link>
                </>
            ))}
        </div>
      </div>
    )

}

export default ProductList
