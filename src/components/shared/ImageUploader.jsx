const ImageUploader = ({onFileSelect}) => {

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
  }
  
  return (
    <div>
        <input
          className='border border-gray-200 w-full rounded-md mb-3' 
          type="file" 
          onChange={handleFileInput} />
    </div>
  )
}

export default ImageUploader