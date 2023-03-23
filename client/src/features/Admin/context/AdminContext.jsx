import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function AdminContext({children}) {
    const [arrayOfStudents,setArrayOfStudents] = useState([])
    const [arrayOfQcm,setArrayOfQcm] = useState([])
    const getArrayOfStudents = async()=>{
        const getStudents = await axios.get('http://localhost:8080/Etudiant/list.php')
        if(getStudents.status === 200){
            console.log(getStudents)
            setArrayOfStudents(getStudents.data)
        }
    }
    const getArrayOfQcm = async()=>{
      const getQcm = await axios.get('http://localhost:8080/Qcm/list.php')
      if(getQcm.status === 200){
        console.log(getQcm)
        setArrayOfQcm(getQcm.data)
      }
    }
    useEffect(()=>{
        getArrayOfStudents()
        getArrayOfQcm()
    },[])

  return (
    <DataContext.Provider value={{arrayOfStudents,arrayOfQcm}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {AdminContext}
