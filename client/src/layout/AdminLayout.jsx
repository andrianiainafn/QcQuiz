import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddQcm from '../features/Admin/components/ui/Qcm/AddQcm'
import ListOfQcm from '../features/Admin/components/ui/Qcm/ListOfQcm'
import AddStudents from '../features/Admin/components/ui/Students/AddStudents'
import Bar from '../features/Admin/components/ui/Students/Bar'
import History from '../features/Admin/components/ui/Students/History'
import ListOfStudents from '../features/Admin/components/ui/Students/ListOfStudents'
import UpdateStudents from '../features/Admin/components/ui/Students/UpdateStudents'
import DashboardLayout from '../page/Admin/DashboardLayout'

function AdminLayout() {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route path='' index={true} element={<History/>}/>
            <Route path='student/list' element={<ListOfStudents/>}/>
            <Route path='student/create' element={<AddStudents/>}/>
            <Route path='student/:id/edit' element={<UpdateStudents/>}/>
            <Route path='qcm/list' element={<ListOfQcm/>}/>
            <Route path='qcm/create' element={<AddQcm/>}/>
            <Route path='bar' element={<Bar/>}/>
        </Route>
    </Routes>
  )
}

export default AdminLayout