import React, { useState } from 'react'
import ImageUploader from '../components/ImageUploader'

const UploadImagePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const submitForm = e => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", description);
    formData.append("image", selectedFile);

    console.log(formData)
  };

  return (
    <div className='m-5 w-96'>
      <h2 className="text-xl text-center">Upload your image</h2>
      <form onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor="image-title">Title</label>
          <input
            className='border border-gray-300 rounded-md px-5 py-2 w-full mb-3' 
            type="text" 
            id="image-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="image-desc">Description</label>
          <textarea
            className='border border-gray-300 rounded-md px-5 py-2 w-full mb-3'  
            type="text" 
            id="image-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  
          ></textarea>
        </div>
        <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        <button type='submit' className='bg-orange-400 text-white rounded-md px-5 py-1'>Add Photo</button>
      </form>
    </div>
  )
}

export default UploadImagePage