import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AuthLayout from '../layout/AuthLayout'
import StudentsLayout from '../layout/StudentsLayout'

function AppRoute() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<h1 className='text-red-500'>Homme Page</h1>} />
            <Route path='students/*' element={<StudentsLayout/>}/>
            <Route path='auth/*' element={<AuthLayout/>}/>
            <Route path='admin/*' element={<AdminLayout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute