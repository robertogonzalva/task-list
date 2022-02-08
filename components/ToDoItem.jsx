export default function ToDoItem({ task, toggleTask }) {
  const { id, description, completed } = task;

  const handleTaskCompleted = () => {
    toggleTask(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleTaskCompleted}
      />
      {description}
    </li>
  );
}
