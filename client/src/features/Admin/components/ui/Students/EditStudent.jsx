import React, { useContext, useEffect, useState } from 'react'
import {TextField} from '@mui/material'
import axios from 'axios'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import {InputLabel} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../../context/AdminContext';

function EditStudent() {
  const {getArrayOfStudents} = useContext(DataContext);
  const {id} = useParams()
  const navigate = useNavigate()
  const [lastData,setLastData] = useState()
  const getLastData = async()=>{
    const data = await axios.get(`http://localhost:8080/Etudiant/getEdit.php/${id}`)
    setLastData(data.data)
  }
  useEffect(()=>{
       getLastData()
  },[])
  const [nom,setNom] = useState()
  const [prenom,setPrenom] = useState()
  const [adr_email,setEmail] = useState()
  const [niveau,setNiveau]= useState()
  useEffect(()=>{
    if(lastData){
      setNom(lastData.nom)
      setPrenom(lastData.prenom)
      setEmail(lastData.adr_email)
      setNiveau(lastData.niveau)
    }
  },[lastData])
  const HandleChangeNiveau = (e)=>{
    setNiveau(e.target.value)
  }
  const HandleChangeNom = (e)=>{
    setNom(e.target.value)
  }
  const HandleChangePrenom = (e)=>{
    setPrenom(e.target.value)
  }
  const HandleChangeEmail = (e)=>{
    setEmail(adr_email)
  }
  const HanClickAddStudents = async()=>{
      const information ={
        nom,
        prenom,
        adr_email,
        niveau,
        id
      }
      const student = await axios.put('http://localhost:8080/Etudiant/edit.php',information)
      console.log(student)
      if(student.status === 200){
        getArrayOfStudents()
        navigate('/admin/dashboard/student/list')
        
      }else{
        console.log('Failed to create student')
      }
  }
  const HandleClickCancel = ()=>{
    navigate('/admin/dashboard/student/list')
  }
  return (
     <>
        {
          lastData && (
            <div className=" flex justify-center items-center w-[100%] h-[75vh]">
            <div className='w-[50%] flex flex-col space-y-5 '>
              <div className='w-full'>
                <TextField variant='outlined' value={nom} sx={{height: '7vh'}} fullWidth type='text' name='nom' onChange={HandleChangeNom} label='Nom ...'/>          
              </div>
              <div className='w-full'>
                <TextField variant='outlined' value={prenom} fullWidth type='text' name='prenom' onChange={HandleChangePrenom} label='Prenom ...'  />
              </div>
              <div className='w-full'>
                <TextField variant='outlined' value={adr_email} fullWidth type='text' name='adr_email' onChange={HandleChangeEmail} label='Email ...'  /> 
              </div>
              <div className='w-full flex justify-between '>      
                <FormControl className=' w-[100%] '   >
                    <InputLabel id="demo-simple-select-label">Niveau</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      required
                      label="Gender"
                      onChange={HandleChangeNiveau}
                    >
                      <MenuItem value={'L1'}>L1</MenuItem>
                      <MenuItem value={'L2'}>L2</MenuItem>
                      <MenuItem value={'L3'}>L3</MenuItem>
                      <MenuItem value={'M1'}>M1</MenuItem>
                      <MenuItem value={'M2'}>M2</MenuItem>
                    </Select>
              </FormControl>
              </div> 
              <div className='w-full flex justify-between items-center'>  
                <button onClick={HanClickAddStudents} className="hover:animate-pulse px-8 py-2  border border-[#f2f2f2] bg-[#66ACFF]  rounded-lg text-[#f2f2f2]">
                   Edit
                </button>
                <button onClick={HandleClickCancel} className="hover:animate-pulse px-3 py-2 bg-transparent border border-[#66ACFF] rounded-lg text-[#66ACFF]">
                    Cancel
                </button>
              </div>
            </div>
          </div>
          )
        }
     </>
    )
}

export default EditStudent