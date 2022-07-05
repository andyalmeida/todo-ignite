import { useState } from "react";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

export function App() {
  const [newTask, setNewTask] = useState("");

  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskForm onCreateTask={setNewTask} />
        <TaskList newTask={newTask}/>
      </main>
    </>
  );
}
