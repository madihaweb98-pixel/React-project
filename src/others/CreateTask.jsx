import React, { useContext,useState } from 'react'
import { AuthContex } from '../context/AuthProvider'

function CreateTask() {
     const [userData,setUserData] = useContext(AuthContex)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTod, setAsignTod] = useState('')
  const [category, setCategory] = useState('')

   const[Task,setTask] =  useState('')

  const submitHandle =(e)=>{
    e.preventDefault()
  setTask({taskTitle,taskDesc,taskDate,category,asignTod,active:false,newTask:true,failed:false,completed:false})
  
      const data = userData
        data.forEach(function (elem){
          if(asignTod == elem.firstname){
            elem.tasks.push(Task)
          }
        })
        setUserData(data)
            console.log(data)
       

        setAsignTod('')
        setCategory('')
        setTaskDesc('')
        setTaskDate('')
        setTaskTitle('')
     }

  return (

      <div className='p-5 bg-[#1C1C1C] mt-7 rounded'>

        <form onSubmit={(e)=>{
          submitHandle(e)
        }} 
        className='flex flex-wrap w-full items-start justify-between'>

          <div className='w-1/2'>
            <div>
              <h3 className='text-sm  text-gray-300 mb-0.5'>Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='Make a UI design'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input
               value={taskDate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="date"
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
              <input
               value={asignTod}
              onChange={(e)=>{
                setAsignTod(e.target.value)
              }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='employee name'
              />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input
               value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                type="text"
                placeholder='design,dev,etc'
              />
            </div>
          </div>

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
               value={taskDesc}
              onChange={(e)=>{
                setTaskDesc(e.target.value)
              }}
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border border-gray-400'
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>

            <button className='bg-emerald-500 py-4 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
            </form>
            </div>
          
  )
}

export default CreateTask
