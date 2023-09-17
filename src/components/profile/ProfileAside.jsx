import React from 'react'

const ProfileAside = () => {
  return (
    <div className='lg:w-[250px]'>
        <div className=' mt-5'>
            <span className="text-gray-400">BIO</span> <hr className="border-[1px] text-gray-400 w-full" />
            <p className="text-sm tracking-wider py-3 italic text-center lg:text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim eum id porro et nesciunt sit repellendus vel similique harum.
            </p>
        </div>
        <div className=' mt-5'>
            <span className="text-gray-400">SKILLS</span> <hr className="border-[1px] text-gray-400 w-full" />
            <div className="py-3  flex md:flex-col justify-between" style={{fontFamily: "Quicksand"}}>
            <h4 className="font-bold">Photography</h4>
            <h4 className="font-bold">Web Development</h4>
            <h4 className="font-bold">Data Science</h4>
            </div>
        </div>
    </div>
  )
}

export default ProfileAside