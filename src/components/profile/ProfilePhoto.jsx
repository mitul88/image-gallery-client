import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../ui/Modal';
import ImageUploader from '../ImageUploader';

const ProfilePhoto = ({imgUrl, user, userId}) => {

  const [showModal, setShowModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const uploadImage = e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("image", selectedFile);

    console.log(formData)
  };

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
      <Modal isVisible={showModal} onClose={()=>setShowModal(false)}>
        <h3 className="text-2xl text-center my-3">Upload Your Photo</h3>
        <form onSubmit={uploadImage} className='flex flex-col jutify-center items-center'>
          <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
          <button type='submit' className="text-sm bg-orange-500 text-white px-5 py-1 rounded mx-auto">Upload</button>
        </form>
      </Modal>
    </div>
  )
}

export default ProfilePhoto