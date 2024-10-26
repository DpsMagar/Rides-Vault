import React from 'react'
import Logo from './Logo'
import poster from '../Images/poster.jpg'
import logo from '../Images/logo1.png'

function FirstHome() {
  return (
    <div className='w-screen h-screen bg-customColor  p-3 flex overflow-hidden '>
        <div className='flex  h-screen w-1/2 rounded-tr-3xl'>
            <div className='p-1 '>
                {/* <Logo/>
                 */}
                 <img src={logo} alt="" srcset="" />
            </div>
            <div className=' h-1/2 flex flex-col my-60'>
                <div className='text-7xl font-courier flex flex-col items-center justify-center'>
                    <div>YOUR JOURNEY,</div>
                    <div>SECURED</div>
                </div>
                <div className=' flex flex-col items-center justify-center font-courier font-bold'>
                    <div >We provide top-quality    </div>
                    <div> motorcycle parts</div>
                    <div>to help you enhance your ride and ensure peak performance.</div>
                </div>
            </div>
        </div>

        <div className='   '>
            <div className='flex absolute gap-9 bg-customColor mx-[525px] z-10 font-courier w-auto my-0 rounded-xl h-12  text-xl font-bold'>
                <button className='mx-2 hover:underline'>SignIn</button>
                <button className='mx-2 hover:underline'>SignUp</button>
            </div>
            
            <div className='mx-32 '>
                <img src={poster} alt="" srcset="" className='w-full h-[650px] opacity-50 rounded-2xl' />
            </div>
        </div>
       
    </div>
  )
}

export default FirstHome
