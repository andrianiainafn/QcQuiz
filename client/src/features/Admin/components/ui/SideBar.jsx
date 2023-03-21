import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div>
      <div>
        <Link to='/admin/dashboard/student/' >Home</Link>
      </div>
      <div>
        <Link to='/admin/dashboard/student/create' >Add  Students</Link>
      </div>
      <div>
        <Link to='/admin/dashboard/student/:1/edit' > Edit Students</Link>
      </div>
      <div>
        <Link to='/admin/dashboard/student/list' >List Of Students</Link>
      </div>
    </div>
  )
}

export default SideBar