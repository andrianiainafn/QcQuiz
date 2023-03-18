import React from 'react'
import { Outlet } from 'react-router-dom'
import Illustration from '../../features/Auth/components/elements/Illustration'

function AuthPage() {
  return (
    <div className='h-full mt-0 md:mt-10'>
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
