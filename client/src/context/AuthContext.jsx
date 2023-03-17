import React, { createContext } from 'react'

export const Context = createContext()


function AuthContext({children}) {
  return (
    <Context.Provider>
        {children}
    </Context.Provider>
  )
}

export default AuthContext