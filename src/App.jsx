
import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployDhasboard from './Dhasboard/EmployDhasboard'
import AdmitDhasboard from './Dhasboard/AdmitDhasboard'
import { getLocalStorage, setLocalStorage } from './utility/LocalStorage'
import { AuthContex } from './context/AuthProvider'

const App = () => {

   const [user,setUser] = useState(null)
   const[loggedInData, setLoggedInData] = useState(null)
     const [userData,setUserData] = useContext(AuthContex)
   
     useEffect(()=>{
        const loggedInUser = localStorage.getItem('loggedInUser')

        if(loggedInUser){
          const userData = JSON.parse(loggedInUser)
          setUser(userData.role)
          setLoggedInData(userData.data)
        }
     },[])

   const handleLogin = ( email , password)=>{
      if(email === 'admin@me.com' && password === '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
      }else if(userData){
        const employee = userData.find((e)=> e.email === email && e.password === password)
        if(employee){
         setUser('employee')
         setLoggedInData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data: employee}))
        }
      
      }else{
       alert("Invalid Credential")
      }
   }
  //  handleLogin("user@me.com",123)

 
   
  return (
    <>
     { !user ? <Login handleLogin={handleLogin}/> : ''}
      {user == 'admin' ? <AdmitDhasboard changeUser ={setUser} /> : (user === "employee"? <EmployDhasboard changeUser ={setUser} data= {loggedInData}/> : null)}
    
    </>
  )
}

export default App
