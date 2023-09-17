import React from 'react'

const ProfilePhoto = () => {
  return (
    <div className="mx-auto lg:mx-0 w-[220px] h-[220px] rounded-md">
        <img 
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" 
            alt="" 
            className='h-full w-full rounded-md md:rounded-full'  
        />
    </div>
  )
}

export default ProfilePhoto