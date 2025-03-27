import React from 'react'
import PurpleButton from '../components/buttons/PurpleButton'
const page = () => {
  return (
    <>
      <div className='bg-gradient-to-b from-purple-900 to-black'>
        <p className='text-3xl text-gray-300 font-sans font-bold text-center'>About </p>
        <p className='text-xl text-left text-gray-400 my-5'>Movie Browser 1.0.0 By AyoubChh Solo made in 3 Days</p>
        <div className='grid place-content-center my-10'>
          <PurpleButton text='return' link='./'/>
        </div>
      </div>
    </>
  )
}

export default page