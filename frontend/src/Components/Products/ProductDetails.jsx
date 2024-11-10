import React from 'react'
import image from '../../Images/poster.jpg'
import wishlist from '../../Images/icons8-heart-100 (1).png'
import wishlistt from '../../Images/icons8-heart-96.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom';



function ProductDetails() {
const [quantity, setQuantity] = useState(0);
const [data, setData] = useState([])
const {state: id}= useLocation();


const location = useLocation();
const pathsegments= location.pathname.split('/')

const excludedKeys = ['id','price','name','image']





useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/${pathsegments[1]}/${id}`);
            setData(response.data);
            
            
        } catch (error) {
            console.log(error);
        }
    };    

    fetchData();
    
}, []);

const filteredInfo= data.filter(items=>!excludedKeys.includes(items.key))
const arrayData
console.log(data);


  return (
    <div className='w-screen h-screen bg-customColor flex overflow-hidden p-5 text-white'>
        <div>
            <img src={image} alt="" className='size-[500px] rounded-e-md ' />
        </div>
        <div className='mx-14 flex flex-col gap-3'>
            <div className='text-5xl'> {data.name}</div> 
            <div className='text-4xl mt-7 '>Rs.{data.price}</div>
            <div className='mt-12'>
                <div className='pb-4'>Item Specifications</div>
                    
                    {/* {data.map((items)=>(
                            <div>
                            <div className='grid grid-cols-2  '>
                                <div>Brandesf</div>
                                <div>Ignyte Helmets</div>
                            </div>
                            <hr className='mt-2 w-96 opacity-30' />
                        </div>
                    ))} */}
            </div>
            <div className="  rounded-md mx-8 mt-2 mb-10 ">
                <h2 className="text-2xl  font-bold mb-4 ">Quantity</h2>
                <div className="flex items-center   gap-4">
                    <button onClick={() => setQuantity(qty => Math.max(qty - 1, 0))} className="px-3 py-1  text-gray-800 text-2xl rounded-md bg-gray-500 " disabled={quantity === 0} > - </button>
                    <span className="text-xl font-semibold ">{quantity}</span>
                    <button onClick={() => setQuantity(qty => qty + 1)} className="px-3 py-1  text-gray-800 text-2xl rounded-md bg-gray-500 "> + </button>
                </div>
            </div>
            <div className='flex gap-2'>
                <button className='border-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 '>Add to carts</button>
                <button className='border-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700'>Add to carts</button>
                <button className='border-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-700'><img src={wishlistt} alt="wiahlist" className='size-7' /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
