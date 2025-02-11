import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Tasklists from "./components/Tasklists";

 export default function App() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    useEffect(() => {
      fetchTasks();
    }, []);

    return (
      <div>
        <TaskForm fetchTask = {fetchTasks}/>
        <Tasklists tasks={tasks}fetchTask = {fetchTasks}/>
      </div>
    )
  }

