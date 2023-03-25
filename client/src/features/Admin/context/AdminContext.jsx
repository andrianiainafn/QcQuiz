import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function AdminContext({children}) {
    const [arrayOfStudents,setArrayOfStudents] = useState([])
    const [arrayOfQcm,setArrayOfQcm] = useState([])  
    const getArrayOfStudents = async()=>{
        const getStudents = await axios.get('http://localhost:8080/Etudiant/list.php')
        if(getStudents.status === 200){
          setArrayOfStudents(getStudents.data)
        }
    }

    const getArrayOfQcm = async()=>{
      const getQcm = await axios.get('http://localhost:8080/Qcm/listQcm.php')
      console.log(getQcm)
      if(getQcm.status === 200){
        setArrayOfQcm(getQcm.data)
      }
    }
    useEffect(()=>{
        getArrayOfStudents()
        getArrayOfQcm()
    },[])

  return (
    <DataContext.Provider value={{arrayOfStudents,arrayOfQcm,getArrayOfStudents,getArrayOfQcm}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {AdminContext}
