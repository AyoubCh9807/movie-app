import React from 'react'
import ParamChecker from '../components/ParamChecker'
import PurpleButton from '../components/buttons/PurpleButton'

const page = () => {
  return (
    <>
    <p className='text-3xl text-center text-blue-500 bg-blue-300 font-sans font-bold'>Settings</p>
    <ParamChecker param='Enable experimental features' />
    <ParamChecker param='Enable data collection' />
    <ParamChecker param='Enable data saver' />
    <ParamChecker param='Disable ad preferences' />
    <div className='grid place-content-center'>
      <PurpleButton text='return' link='./'/>
    </div>
    </>
  )
}

export default page