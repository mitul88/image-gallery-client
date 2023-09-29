import { Link, useParams, useRouteLoaderData } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const ProfileTab = ({userId, authUser}) => {
    const params = useParams('userId');
    const token = useRouteLoaderData('root');
    let decoded;
    if (token){
      if(token !== "EXPIRED") {
        decoded = jwtDecode(token)
      }
    };
  

  return (
    <div className='w-full flex flex-row items-center justify-center md:justify-normal border-t border-b border-gray-200 text-sm'>
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Photos</Link>
        </div>
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="about" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> About</Link>
        </div>
        {authUser?._id === userId && (
          <div className='flex flex-row justify-center items-center mr-5'>
              <Link to="upload" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Upload Photo</Link>
          </div>
         )
        }
        {authUser?._id === userId && (
        <div className='flex flex-row justify-center items-center mr-5'>
            <Link to="settings" className='flex flex-row justify-between items-center p-2 rounded-lg text-gray-400 hover:bg-gray-100'> Settings</Link>
        </div>
        )
        }   
    </div>
  )
}

export default ProfileTab