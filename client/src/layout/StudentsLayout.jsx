import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListOfQcm from '../features/Students/components/ListOfQcm'
import  { StudentContext } from '../features/Students/StudentContext'

function StudentsLayout() {
  return (
    <StudentContext>
      <Routes>
          <Route path='' element={<ListOfQcm/>} />
      </Routes>
    </StudentContext>
  )
}

export default StudentsLayout