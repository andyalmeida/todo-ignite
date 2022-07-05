import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  task: Task;
  onToggleTaskCompletion: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function Task({task, onToggleTaskCompletion, onDeleteTask}: TaskProps) {
  return (
    <li className={styles.task}>
      <div className={styles.radioContainer}>
        <label htmlFor={task.id}>
          <input
            id={task.id}
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleTaskCompletion(task.id)}
          />
          <div className={styles.customRadio} />
          <span>{task.title}</span>
        </label>
      </div>

      <button onClick={() => onDeleteTask(task.id)}>
        <Trash />
      </button>
    </li>
  );
}
