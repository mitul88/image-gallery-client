import React from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom'

const ProfileTab = () => {
  const token = useRouteLoaderData('root');

  return (
    <div className='w-full flex flex-row items-center border-t border-b border-gray-200 text-sm'>
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Photos</Link>
        </div>
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="about" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> About</Link>
        </div>
        {token && (
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="upload" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Upload Photo</Link>
        </div>
        )
        }
        {token && (
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="settings" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Settings</Link>
        </div>
        )
        }   
    </div>
  )
}

export default ProfileTab