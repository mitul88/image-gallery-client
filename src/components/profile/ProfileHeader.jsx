import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';
import SingleInputForm from '../shared/SingleInputForm';
import { AiOutlineEdit } from "react-icons/ai";

const ProfileHeader = ({data, authUser, showProfessionForm, setShowProfessionForm, setUploadImageModal, singleEdit}) => {
  const token = useRouteLoaderData('root');
  let date = new Date(data.createdAt);
  
  return (
    <div className='mx-auto md:ml-0 md:mt-5 lg:ml-20'>
        <h1 className="text-3xl font-bold leading-loose">{data.name}</h1>
        {showProfessionForm && (
          <SingleInputForm 
            defaultValue={data.profession}
            name="profession" 
            onClose={setShowProfessionForm} 
            singleEdit={singleEdit}
          />
        )}
        
        {!data.profession ? 
          data._id !== authUser?._id ? null :
            !showProfessionForm ? (<button onClick={()=>setShowProfessionForm(true)} className='text-sm px-2 py-1 bg-gray-100 rounded tracking-wide text-gray-500'>Add profession</button>)
            : null
          : null
        }
        {!showProfessionForm &&  (
          <div className='flex items-center'>
            <h4 className="text-md text-blue-500 tracking-wider font-bold">{data.profession && data.profession}</h4>
            {data.profession && (
              data._id === authUser?._id ? (
                <button onClick={()=>setShowProfessionForm(true)} className='rounded-full bg-gray-100 text-gray-400 hover:bg-gray-200 p-1 ml-1'>
                <   AiOutlineEdit />
                </button>
              ) : null
            )}
          </div>
        )}
        
        <h4 className="text-sm text-gray-400 italic">Member since : {date.getFullYear()}</h4>
        {token && (
            <button
              onClick={()=>setUploadImageModal(true)} 
              className='bg-orange-600 shadow shadow-sky-950 shadow-md ease-in duration-150 hover:shadow-none text-white text-lg rounded-md px-5 tracking-wider font-semibold text-sm py-2 flex flex-row items-center my-5 ease-in duration-300'
              style={{fontFamily: 'Quicksand'}}
            > 
              Upload
            </button>
            )
        }
    </div> 
  )
}

export default ProfileHeader