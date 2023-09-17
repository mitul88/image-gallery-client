import React from 'react';
import { Form, Link, useRouteLoaderData } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import jwtDecode from 'jwt-decode';


const MainNavigation = () => {
  const token = useRouteLoaderData('root');
  
  let decoded;
  if (token) decoded = jwtDecode(token);
  
  return (
    <header className='w-full h-[80px] bg-sky-950 text-white flex justify-between items-center px-[80px]'>
      <div className='text-2xl font-bold'>Image Gallery</div>
      <nav className={`flex justify-${token ? 'between' : 'end'} items-center min-w-[350px]`} style={{fontFamily: 'Quicksand'}}>
        {token && <Link to='/'>Home</Link>}
        {token && <Link to={`${decoded._id}/profile`}>Profile</Link>}
        {token && <Link to='/image'>Image</Link>}
        {token ? 
          <Form action='/logout' method='post'>
            <button 
              to='/logout'
              className='flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 tracking-wide text-md'
            ><LuLogOut className='mr-2' />Logout</button></Form> 
            : <Link to='auth?mode=login'  
                className='px-5 py-1 rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 tracking-widest text-lg'
              >Signin</Link>
        }
      </nav>
    </header>
  )
}

export default MainNavigation