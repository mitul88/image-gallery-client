import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <>
    <section className="h-screen bg-sky-700 w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-[50px] lg:text-[100px] font-bold tracking-wider text-sky-950">404 <span className='text-red-600'>Not Found</span></h1>
        <Link to="/" className='text-white font-bold trakcking-wide rounded bg-sky-800 hover:bg-sky-900 px-3 py-1 my-2 md:my-[20px] lg:my-[50px]'>Go to Home</Link>
    </section>
   </>
  )
}

export default Error