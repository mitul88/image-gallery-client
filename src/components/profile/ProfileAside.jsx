import React from 'react'
import { Link } from 'react-router-dom'

const ProfileAside = ({data}) => {
  console.log(data.skills)
  return (
    <div className='lg:w-[250px]'>
        <div className=' mt-5'>
            <span className="text-gray-400">BIO</span> <hr className="border-[1px] text-gray-400 w-full" />
            {!data.bio && <Link to="settings" style={{fontFamily: "Quicksand"}}>Add Bio</Link>}
            <p className="text-sm tracking-wider py-3 italic text-center lg:text-justify">
              
            </p>
        </div>
        <div className=' mt-5'>
            <span className="text-gray-400">SKILLS</span> <hr className="border-[1px] text-gray-400 w-full" />
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