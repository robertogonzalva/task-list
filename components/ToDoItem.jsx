export default function ToDoItem({ task, toggleTask }) {
  const { id, description, completed } = task;

  const handleTaskCompleted = () => {
    toggleTask(id);
  };

  return (
    <li className="font-medium">
      <input
        className="mr-2 align-middle"
        type="checkbox"
        checked={completed}
        onChange={handleTaskCompleted}
      />
      {description}
    </li>
  );
}
