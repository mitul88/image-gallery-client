import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const Error = () => {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
   <>
    <section className="h-screen bg-sky-700 w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl md:text-[50px] md:mb-[50px] lg:text-[80px] font-bold tracking-wider text-sky-950">{error.status} <span className='text-red-600'>{title}</span></h1>
        <p className="text-xl md:text-[25px] text-sky-950">{message}</p>
        <Link to="/" className='text-white font-bold trakcking-wide rounded bg-sky-800 hover:bg-sky-900 px-3 py-1 my-2 md:my-[20px] lg:my-[30px]'>Go to Home</Link>
    </section>
   </>
  )
}

export default Error