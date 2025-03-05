import React from 'react'
import Logo from './Logo'
import poster from '../Images/poster.jpg'
import logo from '../Images/PrimaryLogo.png'
import { Link } from 'react-router-dom'
import FuzzyText from '../FuzzyText/FuzzyText'
import BlurText from '../FuzzyText/BlurText'

function FirstHome() {
    const hoverIntensity = 0.5; 
  return (
    <div className='w-screen h-screen bg-customColor  p-3 flex overflow-hidden '>
        <div className='flex  h-screen w-1/2 rounded-tr-3xl'>
            <div className='p-1 '>
                {/* <Logo/>
                 */}
                 <button>
                    <img src={logo} alt=""  className='size-20 mx-2'/>
                 </button>
            </div>
  
                <div className='text-red-500 text-xl absolute mx-28 mt-4 '>
                <BlurText
                    text="Please note: Due to free hosting limitations, data fetching may take up to a minute."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    />
                </div>



            <div className=' h-1/2 flex flex-col gap-2 my-52 '>
                <div className='text-7xl font-courier flex flex-col items-center my-8 justify-center'>
                    <div>YOUR JOURNEY,</div>
                    <div>SECURED</div>
                </div>
                <div className=' flex flex-col items-center justify-center font-courier gap-1 text-2xl font-bold'>
                    <div >We provide top-quality motorcycle gears    </div>
                    <div>to help you enhance your ride and ensure </div>
                    <div>peak safety and comfort </div>

                </div>
            </div>
        </div>

        <div className='   '>
            <div className='flex absolute gap-9 bg-customColor mx-[525px] z-10 font-courier w-auto my-0 rounded-xl rounded-tl-none h-12  text-xl font-bold text'>
                <Link to="/user/login">
                    <button className="mx-2 hover:underline">SignIn</button>
                </Link>
                <Link to="/user/register">
                    <button className="mx-2 hover:underline">SignUp</button>
                </Link>
            </div>
            
            <div className='mx-32 '>
                <img src={poster} alt=""  className='w-full h-[650px] opacity-50 rounded-2xl' />
            </div>
        </div>
       
    </div>
  )
}

export default FirstHome
