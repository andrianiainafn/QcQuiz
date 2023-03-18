import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginStudents from '../features/Auth/components/ui/LoginStudents'
import AuthPage from '../page/Auth/AuthPage'

function AuthLayout() {
  return (
    <Routes>
        <Route path='/login' element={<AuthPage/>}>
            <Route path='' index={true} element={<LoginStudents/>}/>
        </Route>
    </Routes>
  )
}

export default AuthLayout