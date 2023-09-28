import React, { useState } from 'react'
import ChangeProfilePhoto from '../components/ChangeProfilePhoto'
import Modal from '../ui/Modal';
import EditUserForm from '../components/profile/EditUserForm';
import { useMutation, useQuery } from '@tanstack/react-query';
import { userUpdate, fetchUser, queryClient, deleteProfilePhoto, changePassword } from '../utils/http';
import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import ChangePassword from '../components/profile/ChangePassword';

const Settings = () => {
  const [showChangePhoto, setShowChangePhoto] = useState(false);
  const [showUserEditForm, setShowUserEditForm] = useState(false);
  const [showProfilePhotoDelete, setShowProfilePhotoDelete] = useState(false);
  const [showChangePassword, setShowChangePassword] = useState(false);
  
  const params = useParams('userId');
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();

  const {data} = useQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  })

  const handleDeletePhoto = () => {
    setShowProfilePhotoDelete(true);
  }

  // user update
  const {mutate: userUpdateMutate} = useMutation({
    mutationFn: userUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
      setShowUserEditForm(false);
    }
  })

  const userUpdateSubmit = (formData) => {
    const userId = params.userId
    userUpdateMutate({formData, userId, token})
  }

  // delete photo
  const {mutate: deletePhotoMutate} = useMutation({
    mutationFn: deleteProfilePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
      setShowProfilePhotoDelete(false);
    }
  })

  const handleDelete = () => {
    const userId = params.userId;
    deletePhotoMutate({userId, token});
  }

  // change password 
  const {mutate: passwordMutate, isLoading: isChangePassLoading, isError: isChangePassError, error: changePassError} = useMutation({
    mutationFn: changePassword,
    onSuccess: () => {
      setShowChangePassword(false);
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
      navigate('/auth?mode=login')
    }
  })

  const handleChangePass = (formData) => {
    const userId = params.userId;
    passwordMutate({formData, token, userId})
  }

  return (
    <>
      <div className='p-3 my-3 rounded shadow-md shadow-gray-200'>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          <div>
            <button 
              className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300"
              onClick={()=>setShowUserEditForm(true)}  
            >Edit Profile</button>
          </div>
          <div className='w-[350px]'>
            <p className="mt-2 text-sm text-gray-500">Edit your profile information.</p>
          </div>
        </div>

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          <div>
            <button 
              className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300"
              onClick={()=>setShowChangePassword(true)}  
            >Change Password</button>
          </div>
          <div className='w-[350px]'>
            <p className="mt-2 text-sm text-gray-500">Change your password.</p>
          </div>
        </div>


        {data.profile_photo && (
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
        )}

        {data.profile_photo && (
        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200'>
          <div>
            <button className="px-2 text-sm lg:px-5 lg:py-2 text-blue-400 rounded-md hover:bg-sky-100 ease-in duration-300" onClick={handleDeletePhoto}>Delete Profile pic</button>
          </div>
          <div className="w-[350px]">
            <p className="text-sm text-gray-500"><span className="text-yellow-500 text-md font-semibold">Warning !!!</span> <br /> Select this option if you choose to delete your current photo without uploading a new one. Your current photo will be removed permanently.</p>
          </div>
        </div>
        )}

        <div className='m-3 p-5 flex flex-col md:flex-row justify-between items-center'>
          <div>
            <button className="px-2 text-sm lg:px-5 lg:py-2 text-red-500 bg-red-100 rounded-md hover:bg-red-200 hover:text-red-600 ease-in duration-300" onClick={handleDeletePhoto}>Delete Acount</button>
          </div>
          <div className="w-[350px]">
            <p className="text-sm text-gray-500"><span className="text-red-500 text-md font-semibold">Danger !!!</span> <br /> Your account will be deleted permanently along with all other data associated to your account.</p>
          </div>
        </div>

      </div>
      {/* edit user modal */}
      <Modal isVisible={showUserEditForm} onClose={()=>setShowUserEditForm(false)}>
        <EditUserForm defaultValue={data} userUpdateSubmit={userUpdateSubmit} />
      </Modal>
      {/* delete modal */}
      <Modal isVisible={showProfilePhotoDelete} onClose={()=>setShowProfilePhotoDelete(false)}>
        <div className='w-[200px] p-5'>
          <h3 className="text-2xl text-center text-gray-600 font-semibold">Are You Sure ?</h3>
          <div className='mx-auto flex justify-center my-2'>
              <button onClick={handleDelete} className="px-2 bg-red-600 text-white rounded">Yes</button>
              <button onClick={()=>setShowProfilePhotoDelete(false)} className="px-2 bg-green-600 text-white rounded ml-2">No</button>
          </div>
        </div>
      </Modal>
      <Modal isVisible={showChangePassword} onClose={()=>setShowChangePassword(false)}>
        <ChangePassword 
          handleChangePass={handleChangePass} 
          isChangePassLoading={isChangePassLoading}
          isChangePassError={isChangePassError}
          changePassError={changePassError}
        />
      </Modal>
    </>
  )
}

export default Settings

