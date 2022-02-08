import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { v4 as uuid } from "uuid";

import ToDoList from "../components/ToDoList";
import Button from "../components/Button";
import PendingTasks from "../components/PendingTasks";

const KEY = "tasks";

export default function App() {
  const taskRef = useRef();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Save tasks in local storage
  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskAdd = () => {
    const description = taskRef.current.value;

    // If is a empty task, do nothing
    if (description === "") return;

    setTasks((prevTasks) => {
      return [...prevTasks, { id: uuid(), description, completed: false }];
    });

    taskRef.current.value = null;
  };

  const toggleTask = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.id === id);
    task.completed = !task.completed;
    setTasks(newTasks);
  };

  const handleClearTasks = () => {
    const newTasks = tasks.filter((task) => !task.completed);
    setTasks(newTasks);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleTaskAdd();
    }
  };

  const pendingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <>
      <Head>
        <title>Task list 📝</title>
        <meta
          name="description"
          content="In this website you will be able to list all task you have"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-zinc-100 min-h-screen">
        <section className="container mx-auto px-42">
          <div class="px-5 py-20 mx-auto">
            <div class="flex flex-col text-center">
              <h1 className="sm:text-4xl text-3xl font-extrabold leading-normal text-slate-900 text-center">
                <span className="inline font-medium">Create your</span> task
                list
              </h1>
            </div>
          </div>
          <div class="flex justify-center max-h-10">
            <input
              className="auto-focus shadow-md rounded-md mr-2 w-7/12 border border-slate-300 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 text-base outline-none text-gray-700 py-1 px-3 transition-colors duration-200 ease-in-out"
              type="text"
              placeholder="Write a new task..."
              onKeyPress={handleKeyPress}
            />
            <Button
              className="shadow-md"
              variant="primary"
              onClick={handleTaskAdd}
            >
              Add
            </Button>
            <Button
              id="clear-btn"
              variant="secondary"
              onClick={handleClearTasks}
            >
              Clear completed
            </Button>
          </div>
          <ToDoList
            tasks={tasks}
            toggleTask={toggleTask}
            pendingTasks={pendingTasks}
          />
        </section>
      </main>
    </>
  );
}
