import { useState } from "react";
import Todiitem from './Todiitem.jsx'
export default function TodoList() {
const [tasks, setTasks] = useState(['hw react','complete something','go to the gym']);
return (
    <>
      <h2>Tasks </h2>
      <form>
        <input type="text" placeholder="הכנס משימה חדשה..." />
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
