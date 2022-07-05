import { Trash } from "phosphor-react";

import styles from './Task.module.css';

interface TaskProps {
  task: Task;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function Task({task}: TaskProps) {
  return (
    <li className={styles.task}>
      <div className={styles.radioContainer}>
        <label htmlFor={task.id}>
          <input id={task.id} type="checkbox" defaultChecked={task.completed} />
          <div className={styles.customRadio} />
          <span>{task.title}</span>
        </label>
      </div>

      <button>
        <Trash />
      </button>
    </li>
  );
}
