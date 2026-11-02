import React from 'react';
import AcceptTask from '../TaskList/AcceptTask';

const TaskListNumber = ({data}) => {
  
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
      
      <div className=" rounded-xl p-10 w-[45%] bg-blue-400 py-6 px-9">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-xl font-medium'>new Task</h3>
      </div>
      <div className=" rounded-xl p-10 w-[45%] bg-green-400 py-6 px-9">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.completed}</h2>
        <h3 className='text-xl font-medium'>Competed Task</h3>
      </div>
      <div className=" rounded-xl p-10 w-[45%] bg-yellow-400 py-6 px-9">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.active}</h2>
        <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className=" rounded-xl p-10 w-[45%] bg-red-400 py-6 px-9">
        <h2 className='text-3xl font-semibold'>{data.taskNumbers.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
}

export default TaskListNumber;
