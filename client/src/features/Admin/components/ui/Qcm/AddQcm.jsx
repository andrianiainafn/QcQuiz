import React, { useState } from 'react'
import {FormControl, InputLabel, MenuItem, Select, TextField} from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddQcm() {
  const [information,setInformation] = useState({})
  const navigate = useNavigate()
  const HandleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInformation(info=>({...info,[name]:value}))
  }
  const HanClickAddStudents = async()=>{
    if(!information.reponse1 || !information.reponse2 || !information.reponse3 || !information.reponse4
       || !information.reponse1 || !information.reponse_vrai || !information.question){
        console.log('Please Enter the required information')

    }else{
      const student = await axios.post('http://localhost:8080/Qcm/create.php',information)
      console.log(student)
      if(student.status === 200){
        console.log('success')
      }else{
        console.log('Failed to create student')
      }
    }
  }
  const HandleClickCancel = ()=>{
    navigate('/admin/dashboard/qcm/list')
}
  return (
    <div className=" flex justify-center items-center w-[100%] h-[75vh]">
    <div className='w-[50%] flex flex-col space-y-5 '>
      <div className='w-full'>
        <TextField variant='outlined' sx={{height: '7vh'}} fullWidth type='text' name='question' onChange={HandleChange} label='Question...'/>          
      </div>
      <div className='w-full'>
        <TextField variant='outlined' fullWidth type='text' name='reponse1' onChange={HandleChange} label='Response N.1'  />
      </div>
      <div className='w-full'>
        <TextField variant='outlined' fullWidth type='text' name='reponse2' onChange={HandleChange} label='Response N.2'  /> 
      </div>
      <div className='w-full'>
        <TextField variant='outlined' fullWidth type='text' name='reponse3' onChange={HandleChange} label='Response N.3'  /> 
      </div>
      <div className='w-full'>
        <TextField variant='outlined' fullWidth type='text' name='reponse4' onChange={HandleChange} label='Response N.4'  /> 
      </div>
      <div className='w-full flex justify-between '>      
            <FormControl className=' w-[40%] '   >
                <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  label="Gender"
                  name="niveau"
                  onChange={HandleChange}
                >
                  <MenuItem value={'L1'}>L1</MenuItem>
                  <MenuItem value={'L2'}>L2</MenuItem>
                  <MenuItem value={'L3'}>L3</MenuItem>
                  <MenuItem value={'M1'}>M1</MenuItem>
                  <MenuItem value={'M2'}>M2</MenuItem>
                </Select>
          </FormControl>
          <FormControl className=' w-[50%] '   >
                <InputLabel id="demo-simple-select-label">True respons</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  required
                  label="Gender"
                  name="reponse_vrai"
                  onChange={HandleChange}
                >
                  <MenuItem value={'reponse1'}>Respons N.1</MenuItem>
                  <MenuItem value={'reponse2'}>Respons N.2</MenuItem>
                  <MenuItem value={'reponse3'}>Respons N.3</MenuItem>
                  <MenuItem value={'reponse4'}>Respons N.4</MenuItem>
                </Select>
          </FormControl>
          </div> 
      <div className='w-full flex justify-between items-center'>  
            <button onClick={HanClickAddStudents} className="hover:animate-pulse px-3 py-2 bg-transparent border border-[#f2f2f2] bg-[#66ACFF]  rounded-lg text-[#f2f2f2]">
              Add QCM
            </button>
            <button onClick={HandleClickCancel} className="hover:animate-pulse px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
                Cancel
            </button>
          </div>
    </div>
  </div>
  )
}

export default AddQcm