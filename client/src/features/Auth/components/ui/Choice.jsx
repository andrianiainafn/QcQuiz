import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

function Choice() {
  const navigate = useNavigate()
  const HandleClickBack = ()=>{
      navigate('/')
  }
  const HandleClickStudents = ()=>{
    navigate('/auth/login/students')
  }
  const HandleClickAdmin = ()=>{
      navigate('/auth/login/admin')
  }
  return (
    <div className='md:mt-16 mt-[25vh]'>
      <div className="fex justify-start   items-start flex-col  md:w-full space-y-10">
        <div className="text-center text-2xl">
          <h3>Enter you Choice</h3>
        </div>
        <div className="">
            <button onClick={HandleClickAdmin} className='bg-[#38C172] text-[#f2f2f2] w-[60vw] md:w-[20vw] p-4 rounded-lg'>ADMINISTRATOR</button>
        </div>
        <div className="">
          <button onClick={HandleClickStudents} className='bg-[#38C172] text-[#f2f2f2] w-[60vw] md:w-[20vw] p-4 rounded-lg'>STUDENTS</button>
        </div>
        <div className="flex justify-end cursor-pointer" onClick={HandleClickBack}>
          <div className="flex justify-between items-center text-xl mx-3">
            <KeyboardBackspaceIcon/>
            <h4 className='ml-2'>Back</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Choice
