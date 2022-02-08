import ToDoItem from "./ToDoItem";
import PendingTasks from "./PendingTasks";

export default function ToDoList({ tasks, toggleTask, pendingTasks }) {
  return (
    <div>
      <div className="mt-10 mb-3">
        <PendingTasks pendingTasks={pendingTasks} />
      </div>
      <ul>
        {tasks.map((task) => (
          <ToDoItem key={task.key} task={task} toggleTask={toggleTask} />
        ))}
      </ul>
    </div>
  );
}
