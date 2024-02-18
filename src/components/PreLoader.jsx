import React from 'react'
import { logo } from '../../src/assets'
const PreLoader = () => {
  return (
    <div className="w-full h-screen flex flex-col bg-[#fff29f]">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <img src={logo} alt="website logo" />
        <div className='loader' />
      </div>
    </div>
  )
}

export default PreLoader