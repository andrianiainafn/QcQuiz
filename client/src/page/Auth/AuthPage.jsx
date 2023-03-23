import React from 'react'
import { Outlet } from 'react-router-dom'
import Illustration from '../../features/Auth/components/elements/Illustration'

function AuthPage() {
  return (
    <div className='h-screen  bg-[#001E3C] '>
      <div className="flex justify-around items-center h-full ">
        <div className="w-20% hidden md:block ">
            <Illustration/>
        </div>
        <div className="w-40%  ">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
