import React from 'react'
import { MdEmail, MdWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { Link, useRouteLoaderData } from 'react-router-dom';

const UserInfo = () => {
  const data = useRouteLoaderData('user');
  let date = new Date(data.dob);
  return (
    <div className='flex flex-col justify-between min-h-[200px] w-96 shadow-md shadow-gray-200  m-5 p-5' style={{fontFamily: 'Quicksand'}}>
      <div className='flex flex-row items-center text-gray-600'>
        <MdWork />
        <div>
        {!data.proffession && <Link className='ml-5 text-xs p-1 bg-gray-100 border border-gray-200 rounded-md' to="settings">Add profession</Link>}
          <span className="text-sm ml-5 tracking-wider">{data.profession}</span>
        </div>
      </div>
      
      <div className='flex flex-row items-center text-gray-600'>
        <MdEmail />
        <div>
          <span className="text-sm ml-5 tracking-wider">{data.email}</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <BsFillTelephoneFill />
        <div>
        {!data.proffession && <Link className='ml-5 text-xs p-1 bg-gray-100 border border-gray-200 rounded-md' to="settings">Add Phone</Link>}
          <span className="text-sm ml-5 tracking-wider">{data.phone}</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <FaBirthdayCake />
        <div>
        {!data.proffession && <Link className='ml-5 text-xs p-1 bg-gray-100 border border-gray-200 rounded-md' to="settings">Add DOB</Link>}
          <span className="text-sm ml-5 tracking-wider">{data.dob && date.toDateString()}</span>
        </div>
      </div>

    </div>
  )
}

export default UserInfo