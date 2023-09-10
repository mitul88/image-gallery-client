import React from 'react'
import { MdEmail, MdWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";

const UserInfo = () => {
  return (
    <div className='flex flex-col justify-between min-h-[200px]'>
      <div className='flex flex-row items-center text-gray-600'>
        <MdWork />
        <div>
          <span className="text-sm ml-5 tracking-wider">Adobe Photoshop</span>
        </div>
      </div>
      
      <div className='flex flex-row items-center text-gray-600'>
        <MdEmail />
        <div>
          <span className="text-sm ml-5 tracking-wider">shahed@gmail.com</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <BsFillTelephoneFill />
        <div>
          <span className="text-sm ml-5 tracking-wider">012831273</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <FaBirthdayCake />
        <div>
          <span className="text-sm ml-5 tracking-wider">03/09/1988</span>
        </div>
      </div>

    </div>
  )
}

export default UserInfo