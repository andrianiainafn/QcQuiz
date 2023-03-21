import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'

function ListOfStudents() {
  const Handleclick = async()=>{
    const student = await axios.get('http://localhost:8080/Etudiant/list.php')
    console.log(student.data)

  }
  return (
    <div>
      <Button variant='outlined' onClick={Handleclick}>List of students</Button>
    </div>
  )
}

export default ListOfStudents