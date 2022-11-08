import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
("../context/TaskContext");

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  function handleSutmit(e) {
    e.preventDefault();
    // const newTask = {
    //   title,
    // };
    createTask(title, description);
    setTitle("");
    setDescription("");
  }

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-white mb-3 text-center">
        Create your tasks list 📝
      </h1>
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSutmit}>
        <input
          placeholder="Write your task 👉"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Write the description of the task"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white mx-auto">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
