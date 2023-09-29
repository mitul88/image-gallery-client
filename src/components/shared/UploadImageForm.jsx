import React from 'react'
import { useState } from 'react';
import ImageUploader from './ImageUploader';
import { fetchCategories } from '../../utils/http';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const UploadImageForm = ({ handleUploadImage, isUploadPending, isUploadError, uploadError}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);

    const [inputError, setInputError] = useState(false);

    const params = useParams('userId');

    const {data, isError: isCategoryError, error: categoryError} = useQuery({
      queryKey: ['categories', params.userId],
      queryFn: ({signal}) => fetchCategories({signal, id: params.userId})
    })
  
  
    const submitForm = e => {
      e.preventDefault()
      if (title === "" || category === "" || description === "" || selectedFile === null) {
        setInputError(true);
        return
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("desc", description);
      formData.append("image", selectedFile);
      formData.append("category", category);
      
      handleUploadImage(formData)
    };

  return (
    <div className='m-5 p-5 w-96 shadow-md shadow-gray-200' style={{fontFamily: "Quicksand"}}>
      <h2 className="text-xl font-bold text-center">Upload your image</h2>
      {isUploadPending && (<p className='bg-green-200 mb-3 rounded text-center px-5'><span className='animate-pulsetacking-wider font-bold text-green-600 mb-3'>Profile Photo Updating ....</span></p>)}
      {isUploadError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3'>{uploadError?.info.message}</p>)}
      {inputError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded mb-3'>Fill up all fields</p>)}
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
            <select
              onChange={(e)=>setCategory(e.target.value)} 
              className='border border-gray-300 rounded-md px-3 py-2 w-full mb-3 bg-white' 
              defaultValue={"saab"} 
              name="category" 
              id="image-category"
            >
                <option value="">Select Category</option>
                {data.map(category => (
                  <option key={category._id} value={category._id}>{category.name}</option>
                ))}
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