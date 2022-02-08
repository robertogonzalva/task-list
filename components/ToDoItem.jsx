export default function ToDoItem({ task, toggleTask }) {
  const { id, description, completed } = task;

  const handleTaskCompleted = () => {
    toggleTask(id);
  };

  return (
    <li>
      <input
        className="mr-2 align-middle appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-slate-600 checked:border-slate-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2"
        type="checkbox"
        checked={completed}
        onChange={handleTaskCompleted}
      />
      <label className="font-semibold text-lg">{description}</label>
    </li>
  );
}
