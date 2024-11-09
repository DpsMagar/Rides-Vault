import React from 'react'
import helmet from '../Images/CategoryImages/helmet.png'
import boots from '../Images/CategoryImages/boots.png'
import essentials from '../Images/CategoryImages/essentials.png'
import gloves from '../Images/CategoryImages/gloves.png'
import jacket from '../Images/CategoryImages/jacket.png'
import pant from '../Images/CategoryImages/pants.png'
import { Link } from 'react-router-dom'


function SecondHome() {
  return (
    <div className=' h-screen bg-customColor w-screen  overflow-hidden '>
        <hr className="border-t-1 border-black w-full mb-10" />
        <div className='text-5xl mx-5'>
            <b>Explore our products:</b>
        </div>
            <div className="flex items-center justify-evenly  h-52 my-10">
                <button className="relative group p-5">
                    <Link to='/list' state="helmet">
                        <div>
                            <img src={helmet} alt="Helmet" className="h-full w-36" />
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Helmets
                        </span>
                    </Link>
                </button>

                <button className="relative group p-5">
                    <Link to='/list' state="jacket">
                        <div>
                            <img src={jacket} alt="Jacket" className="h-full w-36" />
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Jackets
                        </span>
                    </Link>
                </button>

                <button className="relative group p-5">
                    <Link to='/list' state="pant">
                        <div>
                            <img src={pant} alt="pant" className="h-full w-36" />
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Pants
                        </span>
                    </Link>
                </button>

                <button className="relative group p-5">
                    <Link to='/list' state="glove">
                        <div>
                            <img src={gloves} alt="gloves" className="h-full w-36" />
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Gloves
                        </span>
                    </Link>
                </button>

                <button className="relative group p-5">
                    <Link to='/list' state="boot">
                        <div>
                            <img src={boots} alt="boot" className="h-full w-36" />
                        </div>
                        <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            Boots
                        </span>
                    </Link>
                </button>

                <button className="relative group p-5">
                    <div>
                        <img src={essentials} alt="Essentials" className="h-full w-36" />
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      More  Essentials
                    </span>
                </button>
            </div>

    </div>
  )
}

export default SecondHome
