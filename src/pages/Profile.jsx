import { Outlet, useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import ProfilePhoto from '../components/profile/ProfilePhoto';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTab from '../components/profile/ProfileTab';
import ProfileAside from '../components/profile/ProfileAside';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchUser, postProfilePhoto, queryClient } from '../utils/http';
import _ from 'lodash';

import { BiArrowBack } from "react-icons/bi";

import jwtDecode from 'jwt-decode';
import { useState } from 'react';

const ProfilePage = () => {
  const params = useParams('userId');
  const token = useRouteLoaderData('root');
  const navigate = useNavigate();

  const [profilePhotoUploadModal, setProfilePhotoUploadModal] = useState(false);
  const [showProfessionForm, setShowProfessionForm] = useState(false);
  const [showBioForm, setShowBioForm] = useState(false);

  let decoded;
  if (token){
    if(token !== "EXPIRED") {
      decoded = jwtDecode(token)
    }
  };

  const goBack = () => {
    navigate(-1);
  }

  const {data, isError, error} = useQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  })

  const {mutate: mutateProfilePhoto, isPending: isProfilePhotoPending, isError: isProfilePhotoError, error: profilePhotoError } = useMutation({
    mutationFn: postProfilePhoto,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['user']});
      setProfilePhotoUploadModal(false);
    }
  });

  const uploadProfilePhoto = (formData) => {
    const userId = params.userId
    mutateProfilePhoto({formData, userId, token});
  }

  return (
    <section className='bg-slate-200 pt-5 min-h-screen px-0 md:px-5 lg:px-[250px]'>
      <div className="relative">
        <button onClick={goBack} className="absolute top-5 right-10 bg-gray-100 hover:bg-gray-200 text-gray-500 p-4 rounded-full flex flex-row items-center"><BiArrowBack /></button>
      </div>
      <div className='container mx-auto min-h-[800px] bg-white rounded-md flex flex-col'>
        {/* top section */}
        <div className='w-full p-5 flex flex-col md:flex-row '>
          <ProfilePhoto 
            imgUrl={data.profile_photo} 
            user={decoded} 
            userId={params.userId} 
            uploadProfilePhoto={uploadProfilePhoto}
            setProfilePhotoUploadModal={setProfilePhotoUploadModal}
            profilePhotoUploadModal={profilePhotoUploadModal}  
          />
          <ProfileHeader 
            data={_.pick(data, ['_id', 'name', 'profession', 'createdAt'])} 
            user={decoded} 
            setShowProfessionForm = {setShowProfessionForm}
            showProfessionForm={showProfessionForm}  
          /> 
        </div>

        {/* bottom section */}
        <div className="w-full px-5 flex flex-col lg:flex-row ">
          <ProfileAside data={_.pick(data, ['_id','bio', 'skills'])} user={decoded} setShowBioForm={setShowBioForm} showBioForm={showBioForm} />
          {/* bottom right */}
          <div className='mx-auto w-full lg:ml-20'>
            <ProfileTab />
            <main >
              <Outlet />
            </main>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ProfilePage

export const loader = ({params}) => {
  return queryClient.fetchQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  });
}