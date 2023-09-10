import { Link, Outlet } from 'react-router-dom';
import { BsUpload } from "react-icons/bs";

const ProfilePage = () => {
  return (
    <section className='bg-slate-200 pt-5 min-h-screen px-0 md:px-5 lg:px-[250px]'>
      <div className='container mx-auto min-h-[800px] bg-white rounded-md flex flex-col'>
        {/* top section */}
        <div className='w-full p-5 flex flex-col md:flex-row '>
          <div className="mx-auto lg:mx-0 w-[220px] h-[220px] rounded-md">
            <img 
              src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
              alt="" 
              className='h-full w-full rounded-md md:rounded-full'  
            />
          </div>
          <div className='mx-auto md:ml-0 md:mt-5 lg:ml-20'>
            <h1 className="text-3xl font-bold leading-loose">Shahed Rahman</h1>
            <h4 className="text-md text-blue-500 tracking-wider font-bold">Photographer</h4>
            <h4 className="text-sm text-gray-400 italic">Member since : 2022</h4>

            <Link className='bg-orange-500 text-white rounded-md py-1 px-5 font-bold text-sm w-[100px] pb-1 my-5 flex flex-row items-center'>Upload<BsUpload className='ml-2' /></Link>
          </div>  
        </div>

        {/* bottom section */}
        <div className="w-full px-5 flex flex-col lg:flex-row ">
          <div className='lg:w-[250px]'>
            <div className=' mt-5'>
              <span className="text-gray-400">BIO</span> <hr className="border-[1px] text-gray-400 w-full" />
              <p className="text-sm tracking-wider py-3 italic text-center lg:text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam enim eum id porro et nesciunt sit repellendus vel similique harum.
              </p>
            </div>
            <div className=' mt-5'>
              <span className="text-gray-400">SKILLS</span> <hr className="border-[1px] text-gray-400 w-full" />
              <div className="py-3  flex md:flex-col justify-between">
                <h4 className="font-bold">Photography</h4>
                <h4 className="font-bold">Web Development</h4>
                <h4 className="font-bold">Data Science</h4>
              </div>
            </div>
          </div>

          {/* bottom right */}
          <div className='mx-auto w-full lg:ml-20'>
            <div className='w-full flex flex-row px-10 items-center border-t border-b border-gray-200 text-sm'>
              <div className='flex flex-row justify-center items-center mr-5'>
                <Link to="" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Photos</Link>
              </div>
              <div className='flex flex-row justify-center items-center mr-5'>
                <Link to="about" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> About</Link>
              </div>
              <div className='flex flex-row justify-center items-center mr-5'>
                <Link to="settings" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Settings</Link>
              </div>
            </div>
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