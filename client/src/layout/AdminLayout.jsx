import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddQcm from '../features/Admin/components/ui/Qcm/AddQcm'
import EditQcm from '../features/Admin/components/ui/Qcm/EditQcm'
import ListOfQcm from '../features/Admin/components/ui/Qcm/ListOfQcm'
import AddStudents from '../features/Admin/components/ui/Students/AddStudents'
import Bar from '../features/Admin/components/ui/Students/Bar'
import EditStudent from '../features/Admin/components/ui/Students/EditStudent'
import History from '../features/Admin/components/ui/Students/History'
import Line from '../features/Admin/components/ui/Students/Line'
import ListOfStudents from '../features/Admin/components/ui/Students/ListOfStudents'
import Pie from '../features/Admin/components/ui/Students/Pie'
import DashboardLayout from '../page/Admin/DashboardLayout'

function AdminLayout() {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route path='' index={true} element={<History/>}/>
            <Route path='student/list' element={<ListOfStudents/>}/>
            <Route path='student/create' element={<AddStudents/>}/>
            <Route path='student/:id/edit' element={<EditStudent/>}/>
            <Route path='qcm/list' element={<ListOfQcm/>}/>
            <Route path='qcm/create' element={<AddQcm/>}/>
            <Route path='qcm/:id/edit' element={<EditQcm/>}/>
            <Route path='bar' element={<Bar/>}/>
            <Route path='line' element={<Line/>}/>
            <Route path='pie' element={<Pie/>}/>
        </Route>
    </Routes>
  )
}

export default AdminLayout