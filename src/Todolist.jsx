import { useState } from "react";
import Todiitem from './Todiitem.jsx'
export default function TodoList() {
const [tasks, setTasks] = useState(['hw react','complete something','go to the gym']);
const [newTask, setNewTask] = useState('');

const handleSubmit = (e) => {
    e.preventDefault(); 
    setTasks([...tasks, newTask]); 
    setNewTask(''); 
  };

return (
    <>
      <h2>Tasks </h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="הכנס משימה חדשה..." 
         value={newTask}
        onChange={(e) => setNewTask(e.target.value)}/>
        <button type="submit">אישור</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <Todiitem key={index} task={task} />
        ))}
      </ul>
    </>
  );

}
