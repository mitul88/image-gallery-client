import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';

const ProfilePhoto = ({imgUrl, user, userId}) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mx-auto lg:mx-0 w-[220px] h-[220px] rounded-md">
      {!imgUrl ? user._id === userId ? 
        (
        <div 
          className='w-full h-full rounded-md md:rounded-full flex flex-col justify-center items-center bg-gray-200 text-gray-400 cursor-pointer'
          onClick={()=>setShowModal(true)}  
        >
          UPLOAD
        </div>
        ): (
          <div className='w-full h-full rounded-md md:rounded-full flex flex-col justify-center items-center bg-gray-200 text-gray-400 cursor-none'>
            No Photo
          </div>
        ): (
            <img 
              src={imgUrl} 
              alt="" 
              className='h-full w-full rounded-md md:rounded-full'  
            />
          )
      }
      {/* {imgUrl && (
        <img 
          src={imgUrl} 
          alt="" 
          className='h-full w-full rounded-md md:rounded-full'  
       />
      )} */}
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}/>
    </div>
  )
}

export default ProfilePhoto