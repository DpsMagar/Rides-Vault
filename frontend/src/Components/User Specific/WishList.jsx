import React from 'react';
import gif from '../../Gif/procedural-generation-11379_256.gif'
import logo from '../../Images/PrimaryLogo.png'
import { Link } from 'react-router-dom';

const Wishlist = () => {
  return (<>
  <Link to='/'>
    <img src={logo} alt="" srcset="" className=' absolute p-6' />
  </Link>
    {/* <h2 className='absolute w-screen mx-auto'>Wishlists!</h2> */}
    <img src={gif} alt="" srcset="" className=' absolute w-screen h-screen opacity-10 '/>
    <div className='bg-customColor min-h-screen flex  flex-wrap   '>
        <div className="p-1 flex flex-wrap items-center justify-center overflow-auto mt-28 my-scrollable-container  ">
                

        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl group">
    <svg className="absolute bottom-0 left-0 mb-8 group-hover:translate-y-[-5px] transition-transform duration-300" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
        <rect 
            x="159.52" 
            y="175" 
            width="152" 
            height="152" 
            rx="8" 
            transform="rotate(-45 159.52 175)" 
            fill="white"
            className="group-hover:translate-y-[-5px] transition-transform duration-300"
        />
        <rect 
            x="0" 
            y="107.48" 
            width="152" 
            height="152" 
            rx="8" 
            transform="rotate(-45 0 107.48)" 
            fill="white"
            className="group-hover:translate-y-[-5px] transition-transform duration-300"
        />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
        <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">indoor</span>
        <div className="flex justify-between">
            <span className="block font-semibold text-xl">Peace Lily</span>
            <span className="bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838]">$36.00</span>
        </div>
    </div>
</div>



                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>

                <div className="flex-shrink-0 m-6 relative overflow-hidden bg-[#723838] rounded-lg max-w-xs shadow-lg transition-transform transform hover:scale-100 hover:shadow-xl">
                    <svg className="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style={{ transform: 'scale(1.5)', opacity: 0.1 }}>
                    <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white" />
                    <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white" />
                    </svg>
                    <div className="relative pt-10 px-10 flex items-center justify-center">
                    <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style={{ background: 'radial-gradient(black, transparent 60%)', transform: 'rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)', opacity: 0.2 }}></div>
                    <img className="relative w-40 transition-transform transform hover:scale-110" src="https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png" alt="Peace Lily" />
                    </div>
                    <div className="relative text-white px-6 pb-6 mt-6">
                    <span className="block opacity-75 -mb-1">Indoor</span>
                    <div className="flex justify-between">
                        <span className="block font-semibold text-xl">Peace Lily</span>
                        <span className=" bg-customColor rounded-full text-white text-xs font-bold px-3 py-2 leading-none flex items-center transition-colors hover:bg-[#723838] ">$36.00</span>
                    </div>
                    </div>
                </div>
    </div>
    </div>
  </>
  );
};

export default Wishlist;
