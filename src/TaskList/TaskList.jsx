import React from 'react';
import AcceptTask from './AcceptTask';
import CompeleteTask from './CompeleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({data}) => {
  console.log(data);
  
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center flex-nowrap justify-start gap-5 w-full py-5  mt-10'>
   {data.tasks.map((elem)=>{
    if(elem.active){
      return  <AcceptTask data={elem}></AcceptTask>
    }
    if(elem.newTask){
      return <NewTask data={elem}></NewTask>
    }
    if(elem.completed){
      return <CompeleteTask data={elem}></CompeleteTask>
    }
    if(elem.failed){
      return <FailedTask data={elem}></FailedTask>
    }
   })}
     
     </div>

  );
}

export default TaskList;
