import React, { useState } from 'react'
import ChangeProfilePhoto from '../components/ChangeProfilePhoto'

const Settings = () => {
  const [showChangePhoto, setShowChangePhoto] = useState(false);

  const handleDeletePhoto = () => {
    window.confirm("are you sure ?");
  }
  return (
    <div>
      <div className='p-3 m-3 rounded shadow-md shadow-gray-200'>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          <div>
            <button className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300">Edit Profile</button>
          </div>
          <div className='w-[350px]'>
            <p className="mt-2 text-sm text-gray-500">Edit your profile information.</p>
          </div>
        </div>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          {!showChangePhoto && (
            <div>
              <button className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300" onClick={()=>setShowChangePhoto(!showChangePhoto)}>Change Profile pic</button>
            </div>
          )}
          {showChangePhoto && (
            <div>
              <ChangeProfilePhoto showUploadForm={setShowChangePhoto} />
            </div>
          )}
          <div className="w-[350px]">
            <p className="text-sm text-gray-500"><span className="text-yellow-500 text-md font-semibold">Warning !!!</span><br /> Change your profile pic. Your old profile photo will be deleted autometically if you choose to upload a new one.</p>
          </div>
        </div>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          <div>
            <button className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300" onClick={handleDeletePhoto}>Delete Profile pic</button>
          </div>
          <div className="w-[350px]">
            <p className="text-sm text-gray-500"><span className="text-yellow-500 text-md font-semibold">Warning !!!</span> <br /> Select this option if you choose to delete your current photo without uploading a new one. Your current photo will be removed permanently.</p>
          </div>
        </div>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center'>
          <div>
            <button className="px-2 text-sm lg:px-5 lg:py-2 text-red-500 bg-red-100 rounded-md hover:bg-red-200 hover:text-red-600 ease-in duration-300" onClick={handleDeletePhoto}>Delete Acount</button>
          </div>
          <div className="w-[350px]">
            <p className="text-sm text-gray-500"><span className="text-red-500 text-md font-semibold">Danger !!!</span> <br /> Your account will be deleted permanently along with all other data associated to your account.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings