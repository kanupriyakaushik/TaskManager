import { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  const addTask = async (taskData) => {
    const res = await API.post("/tasks", taskData);
    setTasks([...tasks, res.data]);
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const toggleStatus = async (task) => {
    const updatedStatus =
      task.status === "completed" ? "pending" : "completed";

    const res = await API.put(`/tasks/${task._id}`, {
      status: updatedStatus,
    });

    setTasks(
      tasks.map((t) => (t._id === task._id ? res.data : t))
    );
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <TaskForm onAdd={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleStatus}
        />
      </div>
    </div>
  );
}

export default Dashboard;