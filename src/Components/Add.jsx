import React, { useState } from 'react'

const Add = ({handleAdd}) => {

const [title, setTitle] = useState("")
const createNewTask =(title)=>{
    const newTask = {id:Math.random() , name : title , isDone : false}
    handleAdd(newTask)
}
  return (
    <div>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={()=>createNewTask(title)}>add</button>
    </div>
  )
}

export default Add