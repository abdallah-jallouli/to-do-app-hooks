import React from 'react';
import Edit from './Edit';

const TaskCard = ({ task, handleDelete, handleEdit, handleComplete }) => {
    const handleDone=(task)=>{
        const newTask = {id:task.id , name:task.name , isDone: !task.isDone};
        handleComplete(newTask)
    };

    return (
        <div className={`task-card ${task.isDone ? "isDone" : "notDone"}`}>
            <h3 className="task-name">{task.name}</h3>
            <div className="task-actions">
                <button className="delete-btn" onClick={() => handleDelete(task.id)}>Delete</button>
                <Edit oldTask={task} handleEdit={handleEdit} />
                <button className="complete-btn" onClick={() => handleDone(task)}>Complete</button>
            </div>
        </div>
    );
};

export default TaskCard;
