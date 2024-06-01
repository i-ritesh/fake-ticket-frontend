import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthContextProvider({children}) {

    const [authDetails, setAuthDetails]= useState({
        isLogedIn:false,
        token:null,
    })

    const login=(token)=>{
        setAuthDetails({
            isLogedIn:true,
            token:token,
        })
    }

    const logout=()=>{
        setAuthDetails({
            isLogedIn:false,
            token:null,
        })
    }

  return (
    <AuthContext.Provider value={{authDetails,login,logout}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider