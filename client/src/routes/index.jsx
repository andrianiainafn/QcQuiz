import React,{useContext} from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import AdminLayout from '../layout/AdminLayout'
import AuthLayout from '../layout/AuthLayout'
import StudentsLayout from '../layout/StudentsLayout'
import Home from '../page/Home/Home'
import Context from '../context/AuthContext'

function AppRoute() {
  const {isConnected} = useContext(Context)
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='students/*' element={<StudentsLayout/>}/>
            <Route path='auth/*' element={<AuthLayout/>}/>
            <Route path='admin/*' element={<AdminLayout/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoute