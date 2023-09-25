import React, { useState } from 'react';
import ImageUploader from './shared/ImageUploader';

const ChangeProfilePhoto = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", selectedFile);
        console.log(formData)
      };

  return (
    <form onSubmit={submitForm} className='m-5 p-5 rounded-md border border-gray-200'>
        <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        <button className="px-5 py-1 rounded-sm bg-green-500 text-xs text-white tracking-wider">Change</button>
    </form>
  )
}

export default ChangeProfilePhoto