import React from 'react'
import Task from './Task'

function Tasks({tasks, onClick}) {
  return (
    <>
        {tasks.map((task)=>(
        <Task key={task.id} ts={task} onClick={onClick}/>
        ))}
    </>
  )
}

export default Tasks
