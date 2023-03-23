import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../../features/Admin/components/elements/SideBarAdmin'

function DashboardLayout() {
  return (
    <div>
        <div className="flex justify-between  w-full">
            <div>
                <SideBarAdmin/>
            </div>
            <div className="w-[85%]">
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout