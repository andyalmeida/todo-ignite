import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <TaskForm />
        <TaskList />
      </main>
    </>
  );
}
