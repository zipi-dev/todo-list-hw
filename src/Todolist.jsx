import { useState } from "react";
import Todiitem from './Todiitem.jsx';
import TodoForm from './TodoForm.jsx';

export default function TodoList() {

  const [tasks, setTasks] = useState([
    { id: 1, title: 'hw react', completed: false },
    { id: 2, title: 'complete something', completed: true },
    { id: 3, title: 'go to the gym', completed: false }
  ]);

  const handleCompleteTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };


  const handleAddTask = (titleText) => {
    if (tasks.some(task => task.title === titleText)) return;
    const newTaskObject = {
      id: Date.now(),            
      title: newTask.trim(),     // הטקסט שהוקלד
      completed: false         
    };

    setTasks([...tasks, newTaskObject]); 
    setNewTask(''); 
  };

return (
    <>
      <h2>Tasks </h2>
      <TodoForm onAdd={handleAddTask} />

      <ul>
        {tasks.map((task) => (
          <Todiitem key={task.id} task={task} onComplete={handleCompleteTask} />
        ))}
      </ul>
    </>
  );

}
