import React from 'react'

const ProfilePage = () => {
  return (
    <section className='bg-slate-200 pt-5 min-h-screen px-0 md:px-5 lg:px-[250px]'>
      <div className='container mx-auto bg-white rounded-md flex flex-col'>
        <div className='w-full p-5 flex flex-col md:flex-row '>
          <div className="w-[250px] h-[250px]">
            <img 
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
              alt="" 
              className='h-full w-full'  
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Shahed Rahman</h1>
            <h4 className="text-md text-blue-500 tracking-wider font-bold">Photographer</h4>
            <h4 className="text-sm text-gray-400">Member since : 2022</h4>
          </div>
          
        </div>

        <div className="w-full p-5 flex flex-col md:flex-row ">
            
          <div className='w-[250px]'>
            <div className=' mt-5'>
              <span className="text-gray-400">BIO</span> <hr className="border-[1px] text-gray-400 w-full" />
              <p className="text-sm tracking-wide py-3 italic text-center lg:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim eum id porro et nesciunt sit repellendus vel similique harum.
              </p>
            </div>
            <div className=' mt-5'>
              <span className="text-gray-400">SKILLS</span> <hr className="border-[1px] text-gray-400 w-full" />
              <div className="py-3">
                <h4 className="font-bold">Photography</h4>
                <h4 className="font-bold">Web Development</h4>
                <h4 className="font-bold">Data Science</h4>
              </div>
            </div>
          </div>

        </div>
      </div> 
    </section>
  )
}

export default ProfilePage