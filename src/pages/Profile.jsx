import { Outlet, useParams } from 'react-router-dom';
import ProfilePhoto from '../components/profile/ProfilePhoto';
import ProfileHeader from '../components/profile/ProfileHeader';
import ProfileTab from '../components/profile/ProfileTab';
import ProfileAside from '../components/profile/ProfileAside';
import { useQuery } from '@tanstack/react-query';
import { fetchUser, queryClient } from '../utils/http';
import _ from 'lodash';

const ProfilePage = () => {
  const params = useParams('userId')

  const {data, isError, error} = useQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  })

  return (
    <section className='bg-slate-200 pt-5 min-h-screen px-0 md:px-5 lg:px-[250px]'>
      <div className='container mx-auto min-h-[800px] bg-white rounded-md flex flex-col'>
        {/* top section */}
        <div className='w-full p-5 flex flex-col md:flex-row '>
          <ProfilePhoto imgUrl={data.profile_photo}/>
          <ProfileHeader data={_.pick(data, ['name', 'profession', 'createdAt'])} /> 
        </div>

        {/* bottom section */}
        <div className="w-full px-5 flex flex-col lg:flex-row ">
          <ProfileAside data={_.pick(data, ['bio', 'skills'])} />
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