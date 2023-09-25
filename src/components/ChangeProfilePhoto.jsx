import React, { useState } from 'react';
import ImageUploader from './shared/ImageUploader';

const ChangeProfilePhoto = ({showUploadForm}) => {
    const [selectedFile, setSelectedFile] = useState(null);

    const submitForm = e => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", selectedFile);
        console.log(formData)
      };

  return (
    <form onSubmit={submitForm} className='p-5 rounded-md border border-gray-200'>
      <h3 className="text-xl text-center mb-2">Upload</h3>
        <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        <div className="w-full flex">
          <button type='submit' className="px-3 py-1 rounded-md bg-green-500 text-xs text-white tracking-wider text-xs mr-2 font-bold tracking-widest">Change</button>
          <button onClick={()=>showUploadForm(false)} className="px-3 py-1 rounded-md bg-white border border-red-500 text-red-500 tracking-wider text-xs">Cancel</button>
        </div>
    </form>
  )
}

export default ChangeProfilePhoto