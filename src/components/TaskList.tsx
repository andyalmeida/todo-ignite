import { useEffect, useState } from "react";
import { Scroll } from "phosphor-react";
import { v4 as uuidv4 } from 'uuid';

import { Task } from "./Task";

import styles from './TaskList.module.css';

interface TaskListProps {
  newTask: string;
}

interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export function TaskList({ newTask }: TaskListProps) {

  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(()=>{
    if(!newTask) return;

    const task = { id: uuidv4(), title: newTask, completed: false };
    setTasks([...tasks, task]);
  },[newTask]);

  const taskCount = tasks.length;
  const completedTaskCount = tasks.filter(task => task.completed).length;

  return (
    <>
      <header className={styles.listHeader}>
        <p>
          Tarefas criadas
          <span>{taskCount}</span>
        </p>

        <p>
          Concluídas
          <span>{taskCount ? `${completedTaskCount} de ${taskCount}` : '0'}</span>
        </p>
      </header>

      {!taskCount && (
        <div className={styles.emptyList}>
          <Scroll size={56} />
          <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
      )}

      {!!taskCount && (
      <ul className={styles.taskList}>
        {tasks.map(task => {
          return <Task key={task.id} task={task} />;
        })}
      </ul>
      )}
    </>
  );
}
