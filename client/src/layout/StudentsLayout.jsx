import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListOfQcm from '../features/Students/components/ListOfQcm'

function StudentsLayout() {
  return (
    <Routes>
        <Route path='' element={<ListOfQcm/>} />
    </Routes>
  )
}

export default StudentsLayout