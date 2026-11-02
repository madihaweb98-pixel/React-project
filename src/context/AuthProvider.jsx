import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage,
     setLocalStorage
 } from '../utility/LocalStorage'
export const AuthContex  = createContext()
  const AuthProvider=({children})=>{

 const [userData, setUserData] = useState(null)

useEffect( ()=> {
  setLocalStorage()
  const {employees} = getLocalStorage()
  setUserData(employees)

},[])

  return (
    <div>
      <AuthContex.Provider value={[userData,setUserData]}>
         {children}
      </AuthContex.Provider>
    </div>
  )
}

export default AuthProvider
