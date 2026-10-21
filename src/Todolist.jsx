import Todiitem from './Todiitem.jsx'
export default function TodoList() {
const tasks = ['hw react','complete something','go to the gym'];
return (
    <>
      <h2>Tasks </h2>
      <ul>
        {tasks.map((task, index) => (
          <Todiitem key={index} task={task} />
        ))}
      </ul>
    </>
  );

}
