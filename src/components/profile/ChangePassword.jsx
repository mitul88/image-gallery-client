import { useState } from 'react';

const ChangePassword = ({handleChangePass, isChangePassLoading, isChangePassError, changePassError}) => {

  const [currentPass, setCurrentPass] = useState("")
  const [newPass, setNewPass] = useState("")
  const [confirmNewPass, setConfirmNewPass] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("currentPass", currentPass);
    formData.append("newPass", newPass);
    formData.append("confirmNewPass", confirmNewPass);
    setCurrentPass("");
    setNewPass("");
    setConfirmNewPass("");
    handleChangePass(formData);
}

  return (
    <div className='p-5'>
        <h3 className="text-2xl text-center text-gray-600 font-semibold">Change Your Password</h3>

        {isChangePassLoading && (<p className='animate-pulse text-gray-600'>Updating password ...</p>)}
        {isChangePassError && (<p className='text-red-400 text-sm bg-red-100 px-3 py-1 rounded'>{changePassError?.info.message}</p>)}

        <form onSubmit={handleSubmit}>
            <div className="my-2 flex flex-col">
                <label htmlFor="current-password">Current Password</label>
                <input 
                    id="current-password" 
                    name="currentPass" 
                    type="password" 
                    className="px-3 py-1 border border-gray-300 rounded"
                    onChange={(e)=>setCurrentPass(e.target.value)} 
                />
            </div>
            <div className="my-2 flex flex-col">
                <label htmlFor="new-password">New Password</label>
                <input 
                    id="new-password" 
                    name="newPass" 
                    type="password" 
                    className="px-3 py-1 border border-gray-300 rounded"
                    onChange={(e)=>setNewPass(e.target.value)}  
                />
            </div>
            <div className="my-2 flex flex-col">
                <label htmlFor="confirm-new-password">Confirm New Password</label>
                <input 
                    id="confirm-new-password" 
                    name="confirmNewPass" 
                    type="password" 
                    className="px-3 py-1 border border-gray-300 rounded"   
                    onChange={(e)=>setConfirmNewPass(e.target.value)}
                />
            </div>
            <div className='mx-auto flex justify-center my-2'>
                <button className="px-2 py-1 bg-green-600 text-white rounded">Change Password</button>
            </div>
        </form>
    </div>
  )
}

export default ChangePassword