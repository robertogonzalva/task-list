import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem key={task.key} task={task} toggleTask={toggleTask} />
      ))}
    </ul>
  );
}
