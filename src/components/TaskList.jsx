import TaskCard from "./taskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There are no tasks to do, yet 😃
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
