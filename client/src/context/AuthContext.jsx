import React, { createContext,useEffect,useState } from 'react'
import axios from 'axios'


export const Context = createContext()

function AuthContext({children}) {
  const [isConnected,setIsConnected] = useState(false)
  const getIsConnected = async ()=>{
    const connection = await axios.get('')
       if(connection.status === 200){
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