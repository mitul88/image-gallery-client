import React from 'react';
import { Form, Link, useRouteLoaderData } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { BiLogInCircle, BiPowerOff, BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';


const MainNavigation = () => {
  
  const token = useRouteLoaderData('root');
  const [showNavMenu, setShowNavMenu] = useState(false);
  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  }
  
  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };
  
  return (
    <header className={`relative w-full h-auto py-5 md:py-auto md:h-[80px] bg-sky-950 text-white flex ${token ? 'flex-row' : 'flex-row'} gap-5 md:gap-0 md:flex-row justify-between items-center px-[80px]`}>
      <Link to="/" className='text-2xl font-bold'>
        Image <span className='text-green-500'>Gallery!</span>
      </Link>
      {!token && (
        <Link to='auth?mode=login'  
          className='p-3 border-none rounded-full text-md tracking-wide md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg'
        ><BiLogInCircle className='md:mr-2' /> <span className='hidden md:block'>Sign in</span>
        </Link>
      )}
      {token && (
        showNavMenu ? (
          <button
            onClick={toggleNavMenu}  
            className='p-3 border-none rounded-full text-md tracking-wide flex flex-row justify-end items-center md:hidden bg-sky-900 border border-sky-900'
          ><AiOutlineClose />
          </button>
        ) : (
          <button
            onClick={toggleNavMenu}  
            className='p-3 border-none rounded-full text-md tracking-wide flex flex-row justify-end items-center md:hidden bg-sky-900 border border-sky-900'
          ><BiMenu />
          </button>
        )
      )}
      <nav className={`hidden ${token ? 'md:flex' : 'md:hidden'} flex-col gap-3 md:gap-0 md:flex-row flex justify-${token ? 'between' : 'end'} items-center min-w-[300px]`} style={{fontFamily: 'Quicksand'}}>
        {token && <Link to='/' className='font-bold tracking-widest'>Home</Link>}
        {token && <Link to={`${decoded?._id}/profile`} className='font-bold tracking-widest'>Profile</Link>}
        {token ? 
          <Form action='/logout' method='post'>
            <button 
              to='/logout'
              className='flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 hover:shadow-none  tracking-wide text-md'
            ><BiPowerOff className='mr-2' />Logout</button></Form> 
            : <Link to='auth?mode=login'  
                className='hidden md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg'
              ><BiLogInCircle className='md:mr-2' />Signin</Link>
        }
      </nav>
      {showNavMenu && (
        <nav className={`absolute top-20 right-0 bg-sky-950 z-50 py-20 ${token ? 'flex' : 'hidden'} flex-col gap-10 md:gap-0 md:flex-row flex justify-${token ? 'between' : 'end'} items-center min-w-[300px]`} style={{fontFamily: 'Quicksand'}}>
          {token && <Link to='/' onClick={toggleNavMenu}  className='font-bold tracking-widest'>Home</Link>}
          {token && <Link to={`${decoded?._id}/profile`} onClick={toggleNavMenu}  className='font-bold tracking-widest'>Profile</Link>}
          {token ? 
            <Form action='/logout' method='post'>
              <button 
                to='/logout'
                className='flex flex-row items-center px-5 py-1 rounded-lg bg-red-600 md:shadow-md md:shadow-red-950  ease-in duration-150 hover:bg-red-700 hover:shadow-none  tracking-wide text-md'
              ><BiPowerOff className='mr-2' />Logout</button></Form> 
              : <Link to='auth?mode=login'  
                  className='hidden md:flex flex-row justify-end items-center md:px-5 md:py-1 md:rounded-lg bg-sky-900 md:shadow-lg md:shadow-gray-900 border border-sky-900 ease-in duration-150 hover:bg-sky-900/75 hover:shadow-none md:tracking-widest md:text-lg'
                ><BiLogInCircle className='md:mr-2' />Signin</Link>
          }
        </nav>
      )}
    </header>
  )
}

export default MainNavigation