import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Listes from '../features/Admin/components/ui/Notes/Listes'
import AddQcm from '../features/Admin/components/ui/Qcm/AddQcm'
import EditQcm from '../features/Admin/components/ui/Qcm/EditQcm'
import ListOfQcm from '../features/Admin/components/ui/Qcm/ListOfQcm'
import AddStudents from '../features/Admin/components/ui/Students/AddStudents'
import Bar from '../features/Admin/components/ui/Students/Bar'
import ByLevel from '../features/Admin/components/ui/Students/ByLevel'
import EditStudent from '../features/Admin/components/ui/Students/EditStudent'
import History from '../features/Admin/components/ui/Students/History'
import Line from '../features/Admin/components/ui/Students/Line'
import ListOfStudents from '../features/Admin/components/ui/Students/ListOfStudents'
import Pie from '../features/Admin/components/ui/Students/Pie'
import Search from '../features/Admin/components/ui/Students/Search'
import DashboardLayout from '../page/Admin/DashboardLayout'
// import ListOfQcmExam from '../features/Students/components/ListOfQcmExam'

function AdminLayout() {
  return (
    <Routes>
        <Route path='/dashboard' element={<DashboardLayout/>}>
            <Route path='' index={true} element={<History/>}/>
            <Route path='student/list' element={<ListOfStudents/>}/>
            <Route path='student/notes' element={<Listes/>}/>
            <Route path='student/byLevel' element={<ByLevel/>}/>
            <Route path='student/create' element={<AddStudents/>}/>
            <Route path='student/search' element={<Search/>}/>
            <Route path='student/:id/edit' element={<EditStudent/>}/>
            <Route path='qcm/list' element={<ListOfQcm/>}/>
            <Route path='qcm/create' element={<AddQcm/>}/>
            <Route path='qcm/:id/edit' element={<EditQcm/>}/>
            <Route path='bar' element={<Bar/>}/>
            <Route path='line' element={<Line/>}/>
            <Route path='pie' element={<Pie/>}/>
            {/* <Route path='test' element={<ListOfQcmExam/>}/> */}
        </Route>
    </Routes>
  )
}

export default AdminLayout
