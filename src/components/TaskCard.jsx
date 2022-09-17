import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
function TaskCard({ task }) {
  const { removeTask } = useContext(TaskContext);
  return (
    <div className="bg bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalizep">{task.title}</h1>
      <p className="text-gray-500 text-sm"> {task.description} </p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300"
        onClick={() => removeTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
