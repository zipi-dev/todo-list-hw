export default function Todiitem({ task }) {
  const getTaskStyle = () => {
    return {
      color: task.completed ? 'green' : 'red', // ירוק אם בוצע, אדום אם לא
      textDecoration: task.completed ? 'line-through' : 'none' 
    };
  };

return (
    <li style={getTaskStyle()}>
      {task.title}
    </li> 
)

}
