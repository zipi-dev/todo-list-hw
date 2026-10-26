import { useState } from "react";
import Todiitem from './Todiitem.jsx'
export default function TodoList() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'hw react', completed: false },
    { id: 2, title: 'complete something', completed: true },
    { id: 3, title: 'go to the gym', completed: false }
  ]);

  const [newTask, setNewTask] = useState('');

const handleSubmit = (e) => {
    e.preventDefault(); 
    if (newTask.trim() === '' || tasks.includes(newTask.trim())) {
      return; 
    }
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
        {tasks.map((task) => (
          <Todiitem key={task.id} task={task} />
        ))}
      </ul>
    </>
  );

}
