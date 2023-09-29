import React, { useState } from 'react';
import ImageUploader from './shared/ImageUploader';

const ChangeProfilePhoto = ({showUploadForm, handleChangePhoto, isChangePhotoLoading, isChangePhotoError, changePhotoError}) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("profile-photo", selectedFile);
        handleChangePhoto(formData)
      };

  return (
    <div className='p-5 rounded-md border border-gray-200'>
      <form onSubmit={submitForm}>
        <h3 className="text-xl text-center mb-3">Upload</h3>
        {isChangePhotoLoading && (<p className='bg-green-200 mb-3 rounded text-center px-5'><span className='animate-pulsetacking-wider font-bold text-green-600 mb-3'>Profile Photo Updating ....</span></p>)}
        {isChangePhotoError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3'>{changePhotoError?.info.message}</p>)}
          <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
          <div className="w-full flex">
            <button type='submit' className="px-3 py-1 rounded-md bg-green-500 text-xs text-white tracking-wider text-xs mr-2 font-bold tracking-widest">Change</button>
            <button onClick={()=>showUploadForm(false)} className="px-3 py-1 rounded-md bg-white border border-red-500 text-red-500 tracking-wider text-xs">Cancel</button>
          </div>
      </form>
    </div>
  )
}

export default ChangeProfilePhoto