

import React from 'react'
import SavedShows from '../component/SavedShows';

const Account = () => {
  return (
    <div className='w-full text-white'>
<img
          className='hidden sm:block absolute h-[400px] w-full  object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
      <div className='absolute top-[20%] p-4 md:p-8'>
        <h1>My Shows</h1>
        <SavedShows></SavedShows>
      </div>
    </div>
  )
}

export default Account;
