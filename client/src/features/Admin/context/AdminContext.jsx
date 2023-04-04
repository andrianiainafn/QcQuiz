import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()
function AdminContext({children}) {
    const [arrayOfStudents,setArrayOfStudents] = useState([])
    const [arrayOfQcm,setArrayOfQcm] = useState([])  
    const [arrayOfStudentByLevel,setArrayOfStudentByLevel] = useState([])
    const [arrayOfNotes,setArrayOfNotes] = useState([])
    const [effectif,setEffectif] = useState(11)
    const getArrayOfStudents = async()=>{
        const getStudents = await axios.get('http://localhost:8080/Etudiant/list.php')
        if(getStudents.status === 200){
          setArrayOfStudents(getStudents.data)
        }
    }
    const getStudentByLevel = async(level = 'L2')=>{
      const studentByLevel = await axios.get(`http://localhost:8080/Etudiant/listByLevel.php/${level}`)
        if(studentByLevel.status === 200){
          setEffectif(studentByLevel.data.effectif.effectif)
          setArrayOfStudentByLevel(studentByLevel.data.lists)
        }
      }
      const getArrayOfQcm = async()=>{
        const getQcm = await axios.get('http://localhost:8080/Qcm/listQcm.php')
        if(getQcm.status === 200){
          setArrayOfQcm(getQcm.data)
        }
      }
      const getArrayOfNotes = async()=>{
        const getNotes = await axios.get('http://localhost:8080/Note/list.php')
        if(getNotes.status === 200){
          console.log(getNotes.data)
          setArrayOfNotes(getNotes.data)
          console.log(arrayOfNotes,909090)
        }
      }
      useEffect(()=>{
        getArrayOfNotes()
        getArrayOfStudents()
        getArrayOfQcm()
        getStudentByLevel()
    },[])

  return (
    <DataContext.Provider value={{arrayOfStudents,effectif,arrayOfQcm,arrayOfStudentByLevel,arrayOfNotes,getArrayOfNotes,getArrayOfStudents,getArrayOfQcm,getStudentByLevel}}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
export {AdminContext}
