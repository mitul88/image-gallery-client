import React from 'react';
import { Link } from 'react-router-dom';
import { BsUpload } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className='h-[400px] bg-sky-900 text-white'>
      <div className='container mx-auto h-full'>
        <div className='w-1/2 h-full mx-auto flex flex-col items-center justify-center'>
          <h4 className='text-xl text-center'>Welcom to,</h4>
          <h1 className="text-3xl font-bold text-center">
              Image <span className='text-green-500'>Gallery!</span>
          </h1>
          <h3 className="text-2xl text-center my-5">Image gallery helps you to showcase your photgraphy skills to the world and share your thoughts with other photographers</h3>
          <Link className='bg-orange-500 text-white rounded-md px-5 font-bold text-sm pb-1 flex flex-row items-center'>Upload <BsUpload className='ml-2' /></Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage