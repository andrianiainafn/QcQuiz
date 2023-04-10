import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListOfQcmExam from '../features/Students/components/ListOfQcmExam'
import  { StudentContext } from '../features/Students/StudentContext'

function StudentsLayout() {
  return (
    <StudentContext>
      <Routes>
          <Route path='' element={<ListOfQcmExam/>} />
      </Routes>
    </StudentContext>
  )
}

export default StudentsLayout