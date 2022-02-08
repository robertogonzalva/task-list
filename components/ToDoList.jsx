import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, toggleTask }) {
  return (
    <div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem key={task.key} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
}
