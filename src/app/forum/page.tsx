import React from 'react'
import PurpleButton from '../components/buttons/PurpleButton'

const page = () => {
  return (
    <>
    <div>
      <p className='text-2xl text-gray-400 text-center my-10'>Forum coming soon!</p>
      <div className='grid place-content-center'>
        <PurpleButton text='home page'  link='./'/>
      </div>
    </div>
    </>
  )
}

export default page