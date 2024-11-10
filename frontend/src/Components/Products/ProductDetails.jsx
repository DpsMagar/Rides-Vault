import React from 'react'
import image from '../../Images/poster.jpg'
import wishlist from '../../Images/icons8-heart-100 (1).png'
import wishlistt from '../../Images/icons8-heart-96.png'
function ProductDetails() {
  return (
    <div className='w-screen h-screen bg-customColor flex overflow-hidden p-5 text-white'>
        <div>
            <img src={image} alt="" className='size-[500px] rounded-e-md ' />
        </div>
        <div className='mx-14 flex flex-col gap-3'>
            <div className='text-5xl'> Ignyte IGN-4 Trever</div> 
            <div className='text-4xl mt-7 '>Rs.8000</div>
            <div className='mt-12'>
                <div className='pb-4'>Item Specifications</div>
                <div>
                        <div className='grid grid-cols-2  '>
                            <div>Brandesf</div>
                            <div>Ignyte Helmets</div>
                        </div>
                        <hr className='mt-2 w-96 opacity-30' />
                    </div>
                    <div>
                        <div className='grid grid-cols-2  '>
                            <div>Brandesfdffdf</div>
                            <div>Ignyte Helmetsfgdf</div>
                        </div>
                        <hr className='mt-2 w-96 opacity-30' />
                    </div>
            </div>
            <div></div>
            <div className='flex gap-2'>
                <button className='border-2 p-2 rounded-lg '>Add to carts</button>
                <button className='border-2 p-2 rounded-lg'>Add to carts</button>
                <button className='border-2 p-2 rounded-lg'><img src={wishlistt} alt="wiahlist" className='size-7' /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
