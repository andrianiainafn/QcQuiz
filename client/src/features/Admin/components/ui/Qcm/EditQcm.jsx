import React, { useContext, useEffect, useState } from 'react'
import {TextField} from '@mui/material'
import axios from 'axios'
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import {InputLabel} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../../../context/AdminContext';

function EditQcm() {
  const {getArrayOfQcm} = useContext(DataContext)
  const navigate = useNavigate()
  const {id} = useParams()
  const [lastData,setLastData] = useState()
  const getLastData = async()=>{
    const data = await axios.get(`http://localhost:8080/Qcm/getEdit.php/${id}`)
    setLastData(data.data)
  }
  useEffect(()=>{
       getLastData()
  },[])
  const [question,setQuestion] = useState()
  const [reponse1,setReponse1] = useState()
  const [reponse2,setReponse2] = useState()
  const [reponse3,setReponse3]= useState()
  const [reponse4,setReponse4]= useState()
  const [niveau,setNiveau] = useState()
  const [reponse_vrai,setReponseVrai] = useState()
  useEffect(()=>{
    if(lastData){
      setQuestion(lastData.question)
      setReponse1(lastData.reponse1)
      setReponse2(lastData.reponse2)
      setReponse3(lastData.reponse3)
      setReponse4(lastData.reponse4)
      setNiveau(lastData.niveau)
      setReponseVrai(lastData.reponse_vrai)
      console.log(niveau)
    }
  },[lastData])
  const HandleChangeNiveau = (e)=>{
    setNiveau(e.target.value)
  }
  const HandleChangeQuestion = (e)=>{
    setQuestion(e.target.value)
  }
  const HandleChangeReponse1 = (e)=>{
    setReponse1(e.target.value)
  }
  const HandleChangeReponse2 = (e)=>{
    setReponse2(e.target.value)
  }
  const HandleChangeReponse3 = (e)=>{
    setReponse3(e.target.value)
  }
  const HandleChangeReponse4 = (e)=>{
    setReponse4(e.target.value)
  }
  const HandleChangeTrueResponse = (e)=>{
    setReponseVrai(e.target.value)
  }
  const HanClickCancelEdit = ()=>{
      navigate('/admin/dashboard/qcm/list')
  }
  const HanClickAddQcm = async()=>{
      const information ={
        question,
        reponse1,
        reponse2,
        reponse3,
        reponse4,
        niveau,
        reponse_vrai,
        num_quest: parseInt(id)
      }
      const qcm = await axios.post('http://localhost:8080/Qcm/edit.php',information)
      console.log(qcm)
      if(qcm.status === 200){
        getArrayOfQcm()
        navigate('/admin/dashboard/qcm/list')
        console.log('success')
      }else{
        console.log('Failed to create student')
      }
  }
  return (
    <>
    {
      lastData && (
        <div className=" flex justify-center items-center w-[100%] h-[75vh]">
        <div className='w-[50%] flex flex-col space-y-5 '>
          <div className='w-full'>
            <TextField variant='outlined' value={question} sx={{height: '7vh'}} fullWidth type='text' name='question' onChange={HandleChangeQuestion} label='Question..'/>          
          </div>
          <div className='w-full'>
            <TextField variant='outlined' value={reponse1} fullWidth type='text' name='prenom' onChange={HandleChangeReponse1} label='Response 1'  />
          </div>
          <div className='w-full'>
            <TextField variant='outlined' value={reponse2} fullWidth type='text' name='adr_email' onChange={HandleChangeReponse2} label='Response 2'  /> 
          </div>
          <div className='w-full'>
            <TextField variant='outlined' value={reponse3} fullWidth type='text' name='adr_email' onChange={HandleChangeReponse3} label='Response 3'  /> 
          </div>
          <div className='w-full'>
            <TextField variant='outlined' value={reponse4} fullWidth type='text' name='adr_email' onChange={HandleChangeReponse4} label='Response 4'  /> 
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
                  defaultValue={niveau}
                  onChange={HandleChangeNiveau}
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
                  defaultValue={reponse_vrai}
                  onChange={HandleChangeTrueResponse}
                >
                  <MenuItem value={'reponse1'}>Respons N.1</MenuItem>
                  <MenuItem value={'reponse2'}>Respons N.2</MenuItem>
                  <MenuItem value={'reponse3'}>Respons N.3</MenuItem>
                  <MenuItem value={'reponse4'}>Respons N.4</MenuItem>
                </Select>
          </FormControl>
          </div>
          <div className='w-full flex justify-between items-center'>  
            <button onClick={HanClickAddQcm} className="hover:animate-pulse px-8 py-2
             border border-[#f2f2f2] bg-[#66ACFF]  rounded-lg text-[#f2f2f2]">
               Edit
            </button>
            <button onClick={HanClickCancelEdit} className="hover:animate-pulse px-3 py-2 bg-transparent
             border border-[#66ACFF] rounded-lg text-[#66ACFF]">
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

export default EditQcm