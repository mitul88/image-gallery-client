import React from 'react'
import { Link } from 'react-router-dom';
import { FaCloudUploadAlt } from "react-icons/fa";

const ProfilePhoto = ({imgUrl}) => {
  return (
    <div className="mx-auto lg:mx-0 w-[220px] h-[220px] rounded-md">
      {!imgUrl && (
        <Link className='w-full h-full rounded-md md:rounded-full flex flex-col justify-center items-center bg-gray-200 text-gray-400'>
          UPLOAD
        </Link>
      )}
      {imgUrl && (
        <img 
          src={imgUrl} 
          alt="" 
          className='h-full w-full rounded-md md:rounded-full'  
       />
      )}
    </div>
  )
}

export default ProfilePhoto