import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function AdminContext({children}) {
    const [arrayOfStudents,setArrayOfStudents] = useState([])
    const [arrayOfQcm,setArrayOfQcm] = useState([])  
    const [arrayOfStudentByLevel,setArrayOfStudentByLevel] = useState([])
    const getArrayOfStudents = async()=>{
        const getStudents = await axios.get('http://localhost:8080/Etudiant/list.php')
        if(getStudents.status === 200){
          setArrayOfStudents(getStudents.data)
        }
    }
    const getStudentByLevel = async(level = 'L2')=>{
      const studentByLevel = await axios.get(`http://localhost:8080/Etudiant/listByLevel.php/${level}`)
        if(studentByLevel.status === 200){
          setArrayOfStudentByLevel(studentByLevel.data)
          console.log(arrayOfStudentByLevel)
        }
    }
    const getArrayOfQcm = async()=>{
      const getQcm = await axios.get('http://localhost:8080/Qcm/listQcm.php')
      console.log(getQcm,9000)
      if(getQcm.status === 200){
        setArrayOfQcm(getQcm.data)
      }
    }
    useEffect(()=>{
        getArrayOfStudents()
        getArrayOfQcm()
        getStudentByLevel()
    },[])

  return (
    <DataContext.Provider value={{arrayOfStudents,arrayOfQcm,arrayOfStudentByLevel,getArrayOfStudents,getArrayOfQcm,getStudentByLevel}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {AdminContext}
