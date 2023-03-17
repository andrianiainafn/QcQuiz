import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Choice from '../features/Auth/components/ui/Choice'
import LoginAdmin from '../features/Auth/components/ui/LoginAdmin'
import LoginStudents from '../features/Auth/components/ui/LoginStudents'
import AuthPage from '../page/Auth/AuthPage'

function AuthLayout() {
  return (
    <Routes>
        <Route path='/login' element={<AuthPage/>}>
            <Route path='' index={true} element={<Choice/>}/>
            <Route path='admin' element={<LoginAdmin/>} />
            <Route path='students' element={<LoginStudents/>}/>
        </Route>
    </Routes>
  )
}

export default AuthLayout