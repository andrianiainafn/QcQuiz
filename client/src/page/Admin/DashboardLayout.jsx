import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarAdmin from '../../features/Admin/components/elements/SideBarAdmin'
import Topbar from '../../features/Admin/components/elements/Topbar'
import { AdminContext } from '../../features/Admin/context/AdminContext'

function DashboardLayout() {
  return (
    <div>
        <div className="flex justify-between   w-full">
            <div className='w-[15%]'>
                <SideBarAdmin/>
            </div>
            <div className="w-[80%]">
                <div className="">
                  <div className="">
                    <Topbar/>
                  </div>
                  <div className="">
                    <AdminContext>
                      <Outlet/>
                    </AdminContext>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout