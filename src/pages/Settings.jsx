import React from 'react'

const Settings = () => {
  return (
    <div>
      <div className=''>
        <div className='m-5 p-5 w-96 shadow-md shadow-gray-200'>
          <button className="px-5 py-2 border border-green-500 text-sm text-green-500 rounded-md">Change Profile pic</button>
          <p className="mt-2 text-sm text-gray-500">Change your profile pic. Your old profile photo will be deleted autometically if you choose to upload a new one.</p>
        </div>
        <div className='m-5 p-5 w-96 shadow-md shadow-gray-200'>
          <button className="px-5 py-2 border border-red-500 text-sm text-red-500 rounded-md">Delete Profile pic</button>
          <p className="mt-2 text-sm text-gray-500">Select this option if you choose to delete your current photo without uploading a new one.</p>
        </div>
        <div className='m-5 p-5 w-96 shadow-md shadow-gray-200'>
        <button className="px-5 py-2 text-white text-sm bg-green-500 rounded-md">Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default Settings