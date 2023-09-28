import React from 'react'
import { useState } from 'react'

const ChangePassword = ({changePasswordInput}) => {

  const [currentPass, setCurrentPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmNewPass, setConfirmNewPass] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("currentPass", currentPass);
    formData.append("newPassword", newPass);
    formData.append("confirmNewPassword", confirmNewPass);

    console.log(formData)
    setConfirmNewPass(formData)
  }

  return (
    <div className='p-5'>
        <h3 className="text-2xl text-center text-gray-600 font-semibold">Change Your Password</h3>
        <form onSubmit={handleSubmit}>
        <div className="my-2 flex flex-col">
            <label htmlFor="current-password">Current Password</label>
            <input 
                id="current-password" 
                name="currentPass" 
                type="text" 
                className="px-3 py-1 border border-gray-300 rounded" 
                onChange={(e)=>setCurrentPass(e.target.value)}    
            />
        </div>
        <div className="my-2 flex flex-col">
            <label htmlFor="new-password">New Password</label>
            <input 
                id="new-password" 
                name="newPassword" 
                type="text" 
                className="px-3 py-1 border border-gray-300 rounded" 
                onChange={(e)=>setNewPass(e.target.value)}     
            />
        </div>
        <div className="my-2 flex flex-col">
            <label htmlFor="confirm-new-password">Confirm New Password</label>
            <input 
                id="confirm-new-password" 
                name="confirmNewPassword" 
                type="text" 
                className="px-3 py-1 border border-gray-300 rounded" 
                onChange={(e)=>setConfirmNewPass(e.target.value)}     
            />
        </div>
        <div className='mx-auto flex justify-center my-2'>
            <button type='submit' className="px-2 py-1 bg-green-600 text-white rounded">Change Password</button>
        </div>
        </form>
    </div>
  )
}

export default ChangePassword