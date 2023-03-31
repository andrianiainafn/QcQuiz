import React, { useContext, useState } from 'react'
import {Alert, AlertTitle, TextField} from '@mui/material'
import {styled } from '@mui/material/styles'
import axios from 'axios'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import {InputLabel} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DataContext from '../../../context/AdminContext';
import { motion } from 'framer-motion';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#332fd0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#332fd0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      height: '7vh',
    },
    '&:hover fieldset': {
      borderColor: '#fb2576',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#332fd0',
    },
  },
});
function AddStudents() {
  const [information,setInformation] = useState({})
  const {getArrayStudents} = useContext(DataContext)
  const [error,setError] = useState(false)
  const [success,setSuccess] = useState()
  const [message,setMessage] = useState('Somthing went wrong when adding student')
  const navigate = useNavigate()
  const HandleChange = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setInformation(info=>({...info,[name]:value}))
  }
  const HandleClickCancel = ()=>{
      navigate('/admin/dashboard/student/list')
  }
  const HanClickAddStudents = async()=>{
      if (!information.nom || !information.prenom || !information.niveau || !information.adr_email || !information.niveau ){
            setMessage("Please complete the required information! ")
            setError(true)
      }
      else{
        const student = await axios.post('http://localhost:8080/Etudiant/create.php',information)
        console.log(student)
        if(student.status === 200){
            if(student.data.status === 200){
              setSuccess(true)
              getArrayStudents()
            }else{
              setError(true)    
            }
        }else{
          setError(true)
        }
      }
  }
  return (
      <div className=" flex justify-center items-center w-[100%] h-[75vh]">
        <div className='w-[50%] flex flex-col space-y-5 '>
          <div className='w-full'>
            <TextField variant='outlined' sx={{height: '7vh'}} fullWidth type='text' name='nom' onChange={HandleChange} label='Nom ...'/>          
          </div>
          <div className='w-full'>
            <TextField variant='outlined' fullWidth type='text' name='prenom' onChange={HandleChange} label='Prenom ...'  />
          </div>
          <div className='w-full'>
            <TextField variant='outlined' fullWidth type='text' name='adr_email' onChange={HandleChange} label='Email ...'  /> 
          </div>
          <div className='w-full flex justify-between '>
            <div className='w-50%'>
              <TextField  variant='outlined' fullWidth type='text' name='num_etudiant' onChange={HandleChange} label='N.Matricule ...'  />
            </div>      
            <FormControl className=' w-[50%] '   >
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
          </div> 
          {
            error && (
              <motion.div
              initial={
                {
                 opacity: 0,
                 y:-100
                }
                }
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={
                    {
                      duration: 0.7
                    }
                }>
                  <Alert severity='error'  onClose={()=>{setError(false)}}>
                    <AlertTitle>Error</AlertTitle>
                    {message}
                  </Alert>
              </motion.div>
            )
          }
          {
            success && (
              <motion.div
              initial={
                {
                 opacity: 0,
                 y:-100
                }
                }
                animate={{
                    opacity:1,
                    y:0
                }}
                transition={
                    {
                      duration: 0.7
                    }
                }>
                <Alert severity='success' onClose={()=>{setSuccess(false)}}>
                    <AlertTitle>Success!</AlertTitle>
                    Question created successfully!
                </Alert>
              </motion.div>
            )
          }
          <div className='w-full flex justify-between items-center'>  
            <button onClick={HanClickAddStudents} className="hover:animate-pulse px-3 py-2  border border-[#f2f2f2] bg-[#66ACFF]  rounded-lg text-[#f2f2f2]">
              Add student
            </button>
            <button onClick={HandleClickCancel} className="hover:animate-pulse px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
               <KeyboardBackspaceIcon/> Back
            </button>
          </div>
        </div>
      </div>
    // :num_etudiant,:nom,:prenom,:niveau,:adr_email
    

  )
}

export default AddStudents