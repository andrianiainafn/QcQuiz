import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios'


export const Context = createContext()

function AuthContext({children}) {
  const [isConnected,setIsConnected] = useState(false) 
  const getIsConnected = async ()=>{
    const connection = await axios.get('http://localhost:8080/api/Auth/verifySession.php')
       if(connection.status === 200){
        console.log(connection.data)
          setIsConnected(connection.data)
       }
    }
    useEffect(()=>{
      getIsConnected()
    },[])
  return (
    <Context.Provider value={{isConnected}}>
        {children}
    </Context.Provider>
  )
}

export default Context
export {AuthContext}