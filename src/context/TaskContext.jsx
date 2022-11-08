import { createContext } from "react";
import { tasks as data } from "../data/tasks.js";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(newTitle, newDescription) {
    const newId = tasks.length === 0 ? 0 : tasks[tasks.length - 1].id + 1;
    setTasks([
      ...tasks,
      {
        id: newId,
        title: newTitle,
        description: newDescription,
      },
    ]);
  }

  function deleteTask(taskToDelete) {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
