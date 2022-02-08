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
              <h1 className="text-4xl font-extrabold leading-normal text-gray-900 text-center">
                Create your task list
              </h1>
            </div>
          </div>
          <div class="flex justify-center">
            <input
              className="p-2 rounded-md border-none mr-2 min-w-min w-3/5"
              ref={taskRef}
              type="text"
              placeholder="Write a new task..."
            />
            <Button variant="primary" onClick={handleTaskAdd}>
              Add
            </Button>
            <Button variant="secondary" onClick={handleClearTasks}>
              Clear completed
            </Button>
          </div>
          <div className="mt-10 mb-3">
            <PendingTasks pendingTasks={pendingTasks} />
          </div>
          <ToDoList tasks={tasks} toggleTask={toggleTask} />
        </section>
      </main>
    </>
  );
}
