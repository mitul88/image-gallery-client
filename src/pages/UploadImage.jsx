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
    <div>
      <h2 className="text-xl">Upload your image</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="image-title">Title</label>
          <input 
            type="text" 
            id="image-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image-desc">Description</label>
          <textarea 
            type="text" 
            id="image-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}  
          ></textarea>
        </div>
        <ImageUploader onFileSelect={(file)=> setSelectedFile(file)} />
        <button type='submit'>Add Photo</button>
      </form>
    </div>
  )
}

export default UploadImagePage