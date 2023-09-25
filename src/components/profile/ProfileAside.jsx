import React from 'react'
import { Link } from 'react-router-dom'
import SingleInputForm from '../../ui/SingleInputForm'
import { AiOutlinePlus } from "react-icons/ai";

const ProfileAside = ({data, user, setShowBioForm , showBioForm}) => {

  console.log(data)
  return (
    <div className='lg:w-[250px]'>
        <div className=' mt-5'>
            <span className="text-gray-400">BIO</span> <hr className="border-[1px] mb-1 text-gray-400 w-full" />
            {showBioForm && (
              <SingleInputForm defaultValue={data.bio} onClose={setShowBioForm} elemType="textarea" />
            )}
            
            {!data.bio ?
                user?._id === data._id ?
                  (!showBioForm && <button
                    onClick={()=>setShowBioForm(true)} 
                    className='flex flex-row items-center justify-center bg-gray-100 rounded px-2 py-1 text-xs text-gray-500 tracking-wide'
                    style={{fontFamily: "Quicksand"}}
                  > <AiOutlinePlus className="mr-1 " />Add Bio
                  </button>)
                  : null
              : null
            }

            {data.bio && (
              <p className="text-sm tracking-wider py-3 italic text-center lg:text-justify">
                  {data.bio}
              </p>
            )}
        </div>
        <div className=' mt-5'>
            <span className="text-gray-400">INTERESTS</span> <hr className="border-[1px] text-gray-400 w-full" />
            <div className="py-3 flex md:flex-col justify-between" style={{fontFamily: "Quicksand"}}>
            {!data.skills && <Link to="settings">Add skills</Link>}
            {data.skills && data.skills.map((item, index)=> (
                <h4 className="font-bold" key={index}>{item}</h4>
            ))}
            </div>
        </div>
    </div>
  )
}

export default ProfileAside