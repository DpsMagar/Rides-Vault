import React, { useEffect, useState } from 'react';
import gif from '../../Gif/procedural-generation-11379_256.gif';
import logo from '../../Images/PrimaryLogo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';


const Wishlist = () => {
    const [data, setData]= useState([])

    const userId = useSelector((state)=> state.user.userId)

    useEffect(()=>{
        const fetchData= async ()=>{
            const token= localStorage.getItem('token')

            try {
                const response= axios.get("https://rides-vault.onrender.com/user/wishlist",{
                    headers:{
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                        Accept: "application/json"

                    }
                })
                console.log((await response).data);
                setData((await response).data);
                
                setData((await response).data)
            } catch (error) {
                console.log(error);
                
            }
        };
        fetchData();

    },[])


  return (
    <>
      <Link to='/'>
        <img src={logo} alt="" className='absolute p-6 z-10' />
      </Link>
      <img src={gif} alt="" className='absolute w-screen h-screen opacity-10' />
      {data.map((item)=>(
        <div className='bg-customColor min-h-screen flex flex-wrap'>
        <div className="p-1 flex flex-wrap items-center justify-center overflow-auto mt-28 my-scrollable-container">
          <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl group">
            <div className='absolute mx-48'>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 100 100">
                <path fill="#f37e98" d="M25,30l3.645,47.383C28.845,79.988,31.017,82,33.63,82h32.74c2.613,0,4.785-2.012,4.985-4.617L75,30"></path>
                <path fill="#f15b6c" d="M65 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S65 36.35 65 38zM53 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S53 36.35 53 38zM41 38v35c0 1.65-1.35 3-3 3s-3-1.35-3-3V38c0-1.65 1.35-3 3-3S41 36.35 41 38zM77 24h-4l-1.835-3.058C70.442 19.737 69.14 19 67.735 19h-35.47c-1.405 0-2.707.737-3.43 1.942L27 24h-4c-1.657 0-3 1.343-3 3s1.343 3 3 3h54c1.657 0 3-1.343 3-3S78.657 24 77 24z"></path>
              </svg>
            </div>
            <svg className="absolute bottom-0 left-0 mb-8 group-hover:translate-y-[-5px] transition-transform duration-300" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" className="group-hover:translate-y-[-5px] transition-transform duration-300" />
              <rect x="0" y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" className="group-hover:translate-y-[-5px] transition-transform duration-300" />
            </svg>
            <div className="relative pt-10 px-10 flex items-center justify-center">
              <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
              <img className="relative w-40 transition-transform transform hover:scale-110" src={item.imagelink} alt="Peace Lily" />
            </div>
            <div className="relative text-white px-6 pb-6 mt-6">
              <span className="block opacity-75 -mb-1">indoor</span>
              <div className="flex justify-between">
                <span className="block font-semibold text-xl">{item.name}</span>
                <span className="bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838]">Rs.{item.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </>
  );
};

export default Wishlist;
