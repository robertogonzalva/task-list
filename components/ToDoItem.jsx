export default function ToDoItem({ task, toggleTask }) {
  const { id, description, completed } = task;
  const variant = completed
    ? (variant = "completed")
    : (variant = "uncompleted");

  const variants = {
    completed:
      "font-semibold text-lg line-through text-gray-500 transition duration-500",
    uncompleted: "font-semibold text-lg transition duration-500",
  };

  const handleTaskCompleted = () => {
    toggleTask(id);
  };

  return (
    <li className="my-1">
      <input
        className="hover:scale-110 transition duration-200 ease-in-out mr-2 align-middle appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
        type="checkbox"
        checked={completed}
        onChange={handleTaskCompleted}
      />
      <label className={variants[variant]}>{description}</label>
    </li>
  );
}
