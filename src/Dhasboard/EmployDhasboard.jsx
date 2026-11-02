import React from 'react';
import Header from '../others/Header';
import TaskListNumber from '../others/TaskListNumber';
import TaskList from '../TaskList/TaskList';

const EmployDhasboard = (props) => {

  return (
    <div className="p-10 bg-[#1C1C1C]! h-screen">
      <h1></h1>
      <Header changeUser={props.changeUser} data={props.data} ></Header>
      <TaskListNumber data={props.data} ></TaskListNumber>
      <TaskList data={props.data} ></TaskList>
    </div>
  )
}

export default EmployDhasboard;
