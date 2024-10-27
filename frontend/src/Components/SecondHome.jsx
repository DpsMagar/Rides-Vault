import React from 'react'
import helmet from '../Images/CategoryImages/helmet.png'
import boots from '../Images/CategoryImages/boots.png'
import essentials from '../Images/CategoryImages/essentials.png'
import gloves from '../Images/CategoryImages/gloves.png'
import jacket from '../Images/CategoryImages/jacket.png'
import pant from '../Images/CategoryImages/pants.png'

function SecondHome() {
  return (
    <div className=' h-screen bg-customColor w-screen  overflow-hidden '>
        <hr className="border-t-1 border-black w-full mb-10" />
        <div className='text-5xl'>
            <b>What would you like to explore</b>
        </div>
        <div className=' flex items-center justify-evenly h-52 my-10'>
            <button>
                <div className=''>
                    <img src={helmet} alt="" className='h-full w-36' />
                </div>
            </button>
            <button>
                <div className=''>
                    <img src={jacket} alt="" className='h-full w-36' />
                </div>
            </button>
            <button>
                <div className=''>
                    <img src={pant} alt="" className='h-full w-36' />
                </div>
            </button>
            <button>
                <div className=''>
                    <img src={gloves} alt="" className='h-full w-36' />
                </div>
            </button>
            <button>
                <div className=''>
                    <img src={boots} alt="" className='h-full w-36' />
                </div>
            </button>
            <button>
                <div className=''>
                    <img src={essentials} alt="" className='h-full w-36' />
                </div>
            </button>
            
        </div>
    </div>
  )
}

export default SecondHome
