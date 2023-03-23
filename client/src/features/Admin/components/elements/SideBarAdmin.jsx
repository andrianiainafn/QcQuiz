import React from 'react'
import { ProSidebarProvider } from 'react-pro-sidebar'
import SIdbarC from './SIdbarC'

function SideBarAdmin() {
  return (
      <div className="h-screen">
          <ProSidebarProvider >
            <SIdbarC/> 
          </ProSidebarProvider>
      </div>
  )
}

export default SideBarAdmin