import React from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom';

const ProfileHeader = ({data}) => {
  const token = useRouteLoaderData('root');
  let date = new Date(data.createdAt);
  return (
    <div className='mx-auto md:ml-0 md:mt-5 lg:ml-20'>
        <h1 className="text-3xl font-bold leading-loose">{data.name}</h1>
        {!data.proffession && <Link to="settings">Add profession</Link>}
        <h4 className="text-md text-blue-500 tracking-wider font-bold">{data.proffession && data.profession}</h4>
        <h4 className="text-sm text-gray-400 italic">Member since : {date.getFullYear()}</h4>
        {token && (
            <Link to="upload" 
            className='bg-orange-600 shadow shadow-sky-950 shadow-md ease-in duration-150 hover:shadow-none text-white rounded-md py-1 px-5 font-semibold text-sm w-[100px] pb-1 my-5 flex flex-row items-center'
            style={{fontFamily: 'Quicksand'}}
            > 
            Upload
            </Link>
            )
        }
    </div> 
  )
}

export default ProfileHeader