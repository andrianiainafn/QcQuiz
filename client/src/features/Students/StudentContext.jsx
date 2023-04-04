import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Context from '../../context/AuthContext'

const ListContext = createContext()

function StudentContext({children}) {
  const {studentNiveau} = useContext(Context)
  const [exam,setExam] = useState([])
  const [firstYears,setFirstYears] = useState()
  const [secondeYears,setSecondYears] = useState()
  const modifyFirstYears = (newValeu)=>{
    setFirstYears(newValeu)
  }
  const modifySecondYears = (newValeu)=>{
    setSecondYears(newValeu)
  }
  const getArrayOfQcm = async()=>{
    const listOfQcm = await axios.get(`http://localhost:8080/Qcm/list.php/${studentNiveau}`)
    if(listOfQcm.status === 200){
      console.log(listOfQcm.data)
      setExam(listOfQcm.data)
    }
  }
  useEffect(()=>{
        getArrayOfQcm()
  },[])
  return (
    <ListContext.Provider value={{exam,firstYears,secondeYears,modifyFirstYears,modifySecondYears}}>
        {children}
    </ListContext.Provider>
  )
}

export  {StudentContext}
export default ListContext