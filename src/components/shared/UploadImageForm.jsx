import React from 'react'
import { useState } from 'react';
import ImageUploader from './ImageUploader';

const UploadImageForm = () => {
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
    <div className='m-5 p-5 w-96 shadow-md shadow-gray-200' style={{fontFamily: "Quicksand"}}>
      <h2 className="text-xl font-bold text-center">Upload your image</h2>
      <form onSubmit={submitForm}>
        <div className='flex flex-col'>
          <label htmlFor="image-title">Title</label>
          <input
            className='border border-gray-300 rounded-md px-3 py-1 w-full mb-3' 
            type="text" 
            id="image-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
            <label htmlFor="image-category">Select Category</label>
            <select className='border border-gray-300 rounded-md px-3 py-2 w-full mb-3 bg-white' defaultValue={"saab"} name="image-category" id="image-category">
                {/* <option value="">Select Category</option> */}
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
            </select>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="image-desc">Description</label>
          <textarea
            className='border border-gray-300 rounded-md px-3 py-1 w-full mb-3'  
            type="text" 
            id="image-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  
          ></textarea>
        </div>
        <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        <button type='submit' className='bg-orange-500 text-white rounded-md px-3 py-1'>Add Photo</button>
      </form>
    </div>
  )
}

export default UploadImageForm