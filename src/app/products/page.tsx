import React from 'react'
import PurpleButton from '../components/buttons/PurpleButton'

const page = () => {
  return (
    <>
    <div className='bg-gradient-to-b from-purple-800 to-black'>
      <p className='text-2xl text-center'>Products are not available right now</p>
      <p className='text-4xl text-center'>Coming Soon</p>
        <div className='grid place-content-center my-5 '>
          <PurpleButton text='back' link='./'/>
        </div>
    </div>
    </>
  )
}

export default page