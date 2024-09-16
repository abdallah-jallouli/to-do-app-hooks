import React, { useState } from 'react';

const Add = ({ handleAdd }) => {
    const [title, setTitle] = useState("");

    const createNewTask = (title) => {
        const newTask = { id: Math.random(), name: title, isDone: false };
        handleAdd(newTask);
        setTitle(""); 
    };

    return (
        <div className="add-task-container">
            <input 
                className="task-input" 
                type="text" 
                value={title} 
                placeholder="Enter a task" 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <button className="add-btn" onClick={() => createNewTask(title)}>Add</button>
        </div>
    );
};

export default Add;
