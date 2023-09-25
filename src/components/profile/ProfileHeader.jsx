import React from 'react'
import { Link, useRouteLoaderData } from 'react-router-dom';

import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import SingleInputForm from '../../ui/SingleInputForm';

const ProfileHeader = ({data, user, showProfessionForm, setShowProfessionForm}) => {
  const token = useRouteLoaderData('root');
  let date = new Date(data.createdAt);
  
  return (
    <div className='mx-auto md:ml-0 md:mt-5 lg:ml-20'>
        <h1 className="text-3xl font-bold leading-loose">{data.name}</h1>
        {showProfessionForm && (
          // <form>
          //   <div className="flex">
          //     <input type="text" defaultValue={data.profession} className="border border-gray-400 px-2 rounded" />
          //     <button type='submit' className='text-gray-500 bg-gray-100 p-2 mx-1 rounded-full'><BiSolidFormAlt /></button>
          //     <button onClick={()=>setShowProfessionForm(false)} className='text-gray-500 bg-gray-100 p-2 p-2 rounded-full'><AiOutlineClose /></button>
          //   </div>
          // </form>
          <SingleInputForm defaultValue={data.profession} onClose={setShowProfessionForm} />
        )}
        
        {!data.profession ? 
          data._id !== user?._id ? null :
            !showProfessionForm ? (<button onClick={()=>setShowProfessionForm(true)} className='text-sm px-2 py-1 bg-gray-100 rounded tracking-wide text-gray-500'>Add profession</button>)
            : null
          : null
        }
        <h4 className="text-md text-blue-500 tracking-wider font-bold">{data.profession && data.profession}</h4>
        <h4 className="text-sm text-gray-400 italic">Member since : {date.getFullYear()}</h4>
        {token && (
            <Link to="upload" 
            className='bg-orange-600 shadow shadow-sky-950 shadow-md ease-in duration-150 hover:shadow-none text-white rounded-md py-1 px-5 font-semibold text-sm w-[100px] pb-1 my-5 flex flex-row items-center'
            style={{fontFamily: 'Quicksand'}}
            > 
            Upload
            </Link>
            )
        }
    </div> 
  )
}

export default ProfileHeader