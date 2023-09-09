import React from 'react'

const ProfilePage = () => {
  return (
    <section className='bg-slate-200 pt-5 h-screen'>
      <div className='container mx-auto bg-white rounded-md flex flex-row'>

        <div className='w-1/4 p-5 h-full'>
          <div className="w-[250px] h-[250px]">
            <img 
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
              alt="" 
              className='h-full w-full'  
            />
          </div>
          <div className=' mt-5'>
            <span className="text-gray-400">BIO</span> <hr className="border-[1px] text-gray-400 mr-20" />
            <p className="text-sm tracking-wide py-3 mr-20 italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim eum id porro et nesciunt sit repellendus vel similique harum.
            </p>
          </div>
          <div className=' mt-5'>
            <span className="text-gray-400">SKILLS</span> <hr className="border-[1px] text-gray-400 mr-20" />
            <div className="py-3">
              <h4 className="font-bold">Photography</h4>
              <h4 className="font-bold">Web Development</h4>
              <h4 className="font-bold">Data Science</h4>
            </div>
          </div>
        </div>

        <div className="w-3/4 p-5 h-full">
          <h1 className="text-3xl font-bold">Shahed Rahman</h1>
          <div className='my-2 text-gray-400'>
            <h4 className="text-sm">email: shahed@gmail.com</h4>
            <h4 className="text-sm">Phone: 90127843812963</h4>
            <h4 className="text-sm">Member since: </h4>
          </div>
        </div>
      </div> 
    </section>
  )
}

export default ProfilePage