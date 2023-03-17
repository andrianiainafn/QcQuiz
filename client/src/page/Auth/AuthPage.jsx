import React from 'react'
import { Outlet } from 'react-router-dom'
import Illustration from '../../features/Auth/components/elements/Illustration'

function AuthPage() {
  return (
    <div>
      <div className="">
        <div className="">
            <Illustration/>
        </div>
        <div className="">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
