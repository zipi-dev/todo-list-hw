export default function TodoForm({ onAdd }) {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() === '') return;
    
    // קוראים לפונקציה שקיבלנו מהאבא ומעבירים לו את המשימה החדשה!
    onAdd(newTask.trim());
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="הכנס משימה חדשה..." 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button type="submit">אישור</button>
    </form>
  );
}