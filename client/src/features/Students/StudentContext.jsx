import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import Context from '../../context/AuthContext'

const ListContext = createContext()

function StudentContext({children}) {
  const {studentNiveau} = useContext(Context)
  const [exam,setExam] = useState([])
  const getArrayOfQcm = async()=>{
    const listOfQcm = await axios.get(`http://localhost:8080/Qcm/list.php/${studentNiveau}`)
    if(listOfQcm.status === 200){
      console.log(listOfQcm.data)
      setExam(listOfQcm.data)
      // const array = listOfQcm.data.map((elem)=>{return elem})
      // setExam(array)
      // console.log(exam,9898)
    }
  }
  useEffect(()=>{
        getArrayOfQcm()
  },[])
  return (
    <ListContext.Provider value={{exam}}>
        {children}
    </ListContext.Provider>
  )
}

export  {StudentContext}
export default ListContext