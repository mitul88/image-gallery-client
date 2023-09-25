import {useRef} from 'react'

const ImageUploader = ({onFileSelect}) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    onFileSelect(e.target.files[0])
  }
  
  return (
    <div>
        <input
          className='border border-gray-200 w-full rounded-md mb-3' 
          type="file" 
          onChange={handleFileInput} />
        {/* <button onClick={e => fileInput.current && fileInput.current.click()} className="">Upload</button> */}
    </div>
  )
}

export default ImageUploader