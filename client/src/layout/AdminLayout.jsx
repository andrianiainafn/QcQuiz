import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddStudents from '../features/Admin/components/ui/AddStudents'
import History from '../features/Admin/components/ui/History'
import ListOfStudents from '../features/Admin/components/ui/ListOfStudents'
import UpdateStudents from '../features/Admin/components/ui/UpdateStudents'
import DashboardLayout from '../page/Admin/DashboardLayout'

function AdminLayout() {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route path='' index={true} element={<History/>}/>
            <Route path='student/list' element={<ListOfStudents/>}/>
            <Route path='student/create' element={<AddStudents/>}/>
            <Route path='student/:id/edit' element={<UpdateStudents/>}/>
        </Route>
    </Routes>
  )
}

export default AdminLayout