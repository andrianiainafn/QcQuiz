import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios'


export const Context = createContext()

function AuthContext({children}) {
  const [isConnected,setIsConnected] = useState(false) 
  const [studentMatricule,setStudentMatricule] = useState()
  const [studentNiveau,setStudentNiveau] = useState()
  const [studentName,setStudentName] = useState()
  const getIsConnected = async ()=>{
    const connection = await axios.get('http://localhost:8080/Auth/verifySession.php',{withCredentials:true})
    console.log(connection.data)
       if(connection.status === 200){
          setIsConnected(connection.data.isconnected)
          console.log(connection.data.isconnected,9000)
          setStudentMatricule(connection.data.matricule)
          console.log(connection.data.matricule,8000)
          setStudentNiveau(connection.data.niveau)
          setStudentName(connection.data.name)
       }
    }
    useEffect(()=>{
      getIsConnected()
    },[])
  return (
    <Context.Provider value={{isConnected,studentMatricule,studentNiveau,getIsConnected,studentName}}>
        {children}
    </Context.Provider>
  )
}

export default Context
export {AuthContext}
