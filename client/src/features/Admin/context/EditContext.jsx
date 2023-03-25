import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateContext = createContext()
function EditContext({children}) {
    const {id} = useParams()
    const [editStudents,setEditStudents] = useState()
    const getEditStudent = async()=>{
        const data = await axios.get(`http://localhost:8080/Etudiant/getEdit.php/${id}`)
        if(data.status === 200){
          setEditStudents(data.data)
        }
        }
        useEffect(()=>{
          getEditStudent()
        },[])
  return (
    <UpdateContext.Provider value={{editStudents,getEditStudent}}>
        {children}
    </UpdateContext.Provider>
  )
}


export {EditContext}
export default UpdateContext