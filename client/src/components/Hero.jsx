import React from 'react'
import { useNavigate } from "react-router-dom";
import { assets } from '../assets/assets';
function Hero(){

  const navigate = useNavigate(); 

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative flex flex-col items-center justify-center min-h-screen pt-28 bg-[url("/gradientBackground.png")] bg-cover bg-center bg-no-repeat'>
      
      <div className='text-center max-w-4xl mx-auto'>
        <h1 className='text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight'> Create amazing content <br /> with <span className='text-primary'>AI tools</span> </h1>
        <p className='mt-6 max-w-xl mx-auto text-gray-600'> Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow. </p>
      </div>

      <div className='flex justify-center gap-4 mt-8 text-sm max-sm:text-xs'>
        <button onClick ={()=>navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 active:scale-95 transition cursor-pointer'>Start creating now</button>
        <button className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-102 active:scale-95 transition cursor-pointer'>Watch demo</button>
      </div>

      <div className='flex items-center gap-3 mt-8'>
        <img src={assets.user_group} className='h-8' />
        <p>Trusted by 10k+ people</p>
      </div>

    </div>
  )
}

export default Hero
