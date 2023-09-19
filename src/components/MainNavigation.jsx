import React from 'react';
import { Form, Link, useRouteLoaderData } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { BiLogInCircle, BiPowerOff } from "react-icons/bi";


const MainNavigation = () => {
  
  const token = useRouteLoaderData('root');
  
  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };
  
  return (
    <header className='w-full h-[80px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <Link to="/" className='text-2xl font-bold'>
      Image <span className='text-green-500'>Gallery!</span>
      </Link>
      <nav className={`flex justify-${token ? 'between' : 'end'} items-center min-w-[300px]`} style={{fontFamily: 'Quicksand'}}>
        {token && <Link to='/'>Home</Link>}
        {token && <Link to={`${decoded?._id}/profile`}>Profile</Link>}
        {token ? 
          <Form action='/logout' method='post'>
            <button 
              to='/logout'
              className='flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 hover:shadow-none  tracking-wide text-md'
            ><BiPowerOff className='mr-2' />Logout</button></Form> 
            : <Link to='auth?mode=login'  
                className='flex flex-row items-center px-5 py-1 rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none tracking-widest text-lg'
              ><BiLogInCircle className='mr-2' />Signin</Link>
        }
      </nav>
    </header>
  )
}

export default MainNavigation