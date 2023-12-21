import React from 'react'
import Edit from './Edit'

const TaskCard = ({task,handleDelete,handleEdit,handleComplete}) => {
    const handleDone=(task)=>{
        const newTask = {id:task.id , name:task.name , isDone: !task.isDone};
        handleComplete(newTask)
    }
    
  return (
    <div className={task.isDone?"isDone" : "notDone"}>
        <h3>{task.name}</h3>
        <button onClick={()=>handleDelete(task.id)}>Delete</button>
        <Edit oldTask={task} handleEdit={handleEdit}/>
        <button onClick={()=>handleDone(task)}>complete</button>
    </div>
  )
}

export default TaskCard