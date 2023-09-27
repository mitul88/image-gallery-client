import React from 'react'
import { MdEmail, MdWork } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchUser } from '../utils/http';

const UserInfo = () => {
  const params = useParams();
  const {data, isError, error} = useQuery({
    queryKey: ['user', params.userId],
    queryFn: ({signal}) => fetchUser({signal, id: params.userId})
  })

  let date = new Date(data.dob);
  return (
    <div className='flex flex-col justify-between min-h-[200px] w-96 shadow-md shadow-gray-200  m-5 p-5' style={{fontFamily: 'Quicksand'}}>
      <div className='flex flex-row items-center text-gray-600'>
        <MdWork />
        <div>
        <span className="text-sm ml-5 tracking-wider">{data.profession}</span>
        </div>
      </div>
      
      <div className='flex flex-row items-center text-gray-600'>
        <MdEmail />
        <div>
          <span className="text-sm ml-5 tracking-wider">{data.email}</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <BsFillTelephoneFill />
        <div>
          <span className="text-sm ml-5 tracking-wider">{data.phone}</span>
        </div>
      </div>

      <div className='flex flex-row items-center text-gray-600'>
        <FaBirthdayCake />
        <div>
          <span className="text-sm ml-5 tracking-wider">{data.dob && date.toDateString()}</span>
        </div>
      </div>

    </div>
  )
}

export default UserInfo