import React, { useState } from 'react'
import {Button, TextField} from '@mui/material'
import axios from 'axios'

function AddStudents() {
  const [information,setInformation] = useState({})
  const HandleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInformation(info=>({...info,[name]:value}))
  }
  const HanClickAddStudents = async()=>{
      const student = await axios.post('http://localhost:8080/Etudiant/create.php',information)
      console.log(student)
      if(student.status === 200){
        console.log('success')
      }else{
        console.log('Failed to create student')
      }
  }
  return (
      <div>
        <div className='flex flex-col space-y-5 justify-center items-center w-[70%] mt-10'>
          <TextField variant='outlined' type='text' name='num_etudiant' onChange={HandleChange} label='matricule'  />
          <TextField variant='outlined' type='text' name='nom' onChange={HandleChange} label='nom'/>
          <TextField variant='outlined' type='text' name='prenom' onChange={HandleChange} label='prenom'  />
          <TextField variant='outlined' type='text' name='niveau' onChange={HandleChange} label='niveau'  />
          <TextField variant='outlined' type='text' name='adr_email' onChange={HandleChange} label='email'  />
          <Button variant='outlined' onClick={HanClickAddStudents} className='w-[25%]'> Add Student</Button>
        </div>
      </div>
    // :num_etudiant,:nom,:prenom,:niveau,:adr_email
    

  )
}

export default AddStudents