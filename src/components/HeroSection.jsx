import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className='h-[260px] bg-sky-800 bg-fixed bg-gradient-to-r from-sky-800 via-sky-900 to-sky-950 text-white'>
        <div className='container mx-auto h-full'>
          <div className='w-full md:w-1/2 h-full mx-auto flex flex-col items-center justify-center'>
            <h3 className="text-xl md:text-3xl text-center my-5">Showcase your photgraphy skills to the world and share your thoughts with other photographers</h3>
            <Link 
              to="1/profile/upload" 
              className='bg-orange-600 shadow shadow-sky-950 shadow-lg ease-in duration-150 hover:shadow-none text-white text-lg rounded-md px-5 tracking-wider font-semibold text-sm py-2 flex flex-row items-center'
              style={{fontFamily: 'Quicksand'}}  
            >Upload</Link>
          </div>
        </div>
      </div>
  )
}

export default HeroSection