import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../features/Admin/components/ui/SideBar'

function DashboardLayout() {
  return (
    <div>
        <div className="flex justify-between items-center w-full">
            <div className="w-[10%]">
                <SideBar/>
            </div>
            <div className="w-[85%]">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout