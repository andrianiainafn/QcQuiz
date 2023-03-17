import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../features/Admin/components/ui/SideBar'

function DashboardLayout() {
  return (
    <div>
        <div className="">
            <div className="">
                <SideBar/>
            </div>
            <div className="">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout