import './App.css';
import { useState } from 'react';
import TasksList from './Components/TasksList';
import Add from './Components/Add';
import Filter from './Components/Filter';

function App() {
 const [tasks, setTasks] = useState([{id : Math.random(), name : "wake up" , isDone : true},
 {id : Math.random(), name : "eat breakfast" , isDone : false},
 {id : Math.random(), name : "sleep" , isDone : false}])

 const [isFiltered, setIsFiltered] = useState(true)

 const ChangeIsFiltered =()=>{
     setIsFiltered(!isFiltered)
 }
 const handleDelete =(id)=>setTasks(tasks.filter(task=>task.id!==id));
 const handleAdd = (task) =>setTasks([...tasks, task]);
 const handleEdit = (task)=>setTasks(tasks.map(el=>el.id===task.id? task:el));
 const handleComplete=(task)=>setTasks(tasks.map(el=>el.id === task.id ? task : el));
 


  return (
    <div className="App">
      <Add handleAdd={handleAdd}/>
      <TasksList tasks ={tasks} handleDelete={handleDelete} handleEdit={handleEdit} handleComplete={handleComplete} isFiltered={isFiltered}  />
      <Filter ChangeIsFiltered={ChangeIsFiltered} />
    </div>
  );
}

export default App;
