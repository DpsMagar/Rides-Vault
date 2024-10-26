import React from 'react'
import bikeIcon from '../Images/bikeIcon.svg'
function Logo() {
  return (
    <div className=' flex flex-col w-20 justify-center items-center overflow-hidden'>
            <img src={bikeIcon} alt="" srcset="" className='h-10'/>
            <b>rideVault</b>
    </div>
  )
}

export default Logo
