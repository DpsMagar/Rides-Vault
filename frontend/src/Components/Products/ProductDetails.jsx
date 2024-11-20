import React from 'react'
import image from '../../Images/poster.jpg'
import wishlist from '../../Images/icons8-heart-100 (1).png'
import wishlistt from '../../Images/icons8-heart-96.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import logo from '../../Images/PrimaryLogo.png'
import { Link } from 'react-router-dom'

function ProductDetails() {
const [quantity, setQuantity] = useState(1);
const [price, setPrice]= useState(0)
const [data, setData] = useState([])
// const {state: id}= useLocation();
const id=localStorage.getItem('id')
const navigate = useNavigate();


const location = useLocation();
const pathsegments= location.pathname.split('/')

const excludedKeys = ['id','price','name','image']

const userName= useSelector((state)=> state.user.userName);



useEffect(() => {

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/${pathsegments[1]}/${id}`);
            setData(response.data);
            setPrice(response.data.price)            
            // console.log(response.data.image);
            
            
        } catch (error) {
            console.log(error);
        }
    };    

    fetchData();
    
}, []);

const handleCart= async ()=>{
    try {
        await axios.post('http://127.0.0.1:8000/api/cart/',{
            name:data.name,
            quantity:quantity,
            item_type: pathsegments[1],
            price:price,
            image:data.image
        },{
            headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`, 
        }})
        console.log('added');
        
    } catch (error) {
        console.log(error);
        
    }
}


const filteredInfo= Object.entries(data).filter(items=>!excludedKeys.includes(items[0]))
// console.log(filteredInfo);


  return (
    <div className='w-screen h-screen bg-customColor flex overflow-hidden p-5 text-white'>
        <Link to='/'> <img src={logo} alt="" className='absolute'/> </Link>
        <div className='mt-44'>
            <img src={data.image} alt="" className='size-[300px] rounded-e-md ' />
        </div>
        <div className='mx-40 mt-4 flex flex-col gap-3'>
            <div className='text-5xl'> {data.name}</div> 
            <div className='text-4xl mt-7 '>Rs.{data.price}</div>
            <div className='mt-12'>
                <div className='pb-4'>Item Specifications</div>
                    
                    {filteredInfo.map((items)=>(
                            <div key={items[0]}>
                            <div className='grid grid-cols-2  '>
                                <div>{items[0].charAt(0).toUpperCase() + items[0].slice(1)}</div>
                                <div>{items[1]}</div>
                            </div>
                            <hr className='mt-2 w-96 opacity-30' />
                        </div>
                    ))} 
            </div>
            <div className="  rounded-md mx-8 mt-2 mb-10 ">
                <h2 className="text-2xl  font-bold mb-4 ">Quantity</h2>
                <div className="flex items-center   gap-4">
                    <button onClick={() => setQuantity(qty => Math.max(qty - 1, 0))} className="px-3 py-1  text-gray-800 text-2xl rounded-md bg-gray-500 " disabled={quantity === 0} > - </button>
                    <span className="text-xl font-semibold ">{quantity}</span>
                    <button onClick={() => setQuantity(qty => qty + 1)} className="px-3 py-1  text-gray-800 text-2xl rounded-md bg-gray-500 "> + </button>
                </div>
            </div>
            
        </div>
        <div className='flex gap-2 h-12 mt-[300px]'>
                <button className='border-2 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 ' onClick={
                    ()=>
                    userName?
                        (handleCart(),
                        toast.success("Added Successfully",{
                            style: {
                                backgroundColor: "#52281c", 
                                color: "white",     
                                fontSize: "16px", 
                                padding: "12px 24px", 
                                borderRadius: "8px", 
                            },
                            icon: <span role="img" aria-label="cart">🛒</span>, 
                            progressStyle: {
                                backgroundColor: "#4a281e", 
                            },
                        })):
                    
                navigate('/user/login',{state:{from:location.pathname}})
                }>Add to carts</button>
                <button className='border-2 p-2 w-16 rounded-lg bg-slate-800 hover:bg-slate-700'
                onClick={
                    ()=>
                    userName?
                    (handleCart(),
                     navigate('/user/cart')):
                        navigate('/user/login',{state:{from:location.pathname}})}>Buy</button>
                <button className='border-2 p-2 rounded-lg bg-slate-600 hover:bg-slate-700' 
                onClick={
                    ()=>
                    userName?
                    toast.success("Added to Wishlist",{
                    style: {
                        backgroundColor: "#52281c", 
                        color: "white",     
                        fontSize: "16px", 
                        padding: "12px 24px", 
                        borderRadius: "8px", 
                      },
                      icon: <span role="img" aria-label="cart">♡</span>, 
                      progressStyle: {
                        backgroundColor: "#4a281e", 
                      },
                }):
                navigate('/user/login',{state:{from:location.pathname}})
                }><img src={wishlistt} alt="wishlist" className='size-7' /></button>
            </div>
    </div>
  )
}

export default ProductDetails
