export default function Todiitem({ task, onComplete }) {
  const getTaskStyle = () => {
    return {
      color: task.completed ? 'green' : 'red',
      textDecoration: task.completed ? 'line-through' : 'none'
    };
  };

  return (
    <li style={getTaskStyle()}>
      {task.title}
      
      {!task.completed && (
        <button onClick={() => onComplete(task.id)}>
          המשימה בוצעה
        </button>
      )}
    </li>
  );
}
