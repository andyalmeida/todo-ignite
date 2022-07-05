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
    const tasks = localStorage.getItem('tasks') || '[]';
    setTasks(JSON.parse(tasks));
  },[]);

  useEffect(()=>{
    if(!newTask) return;

    const task = { id: uuidv4(), title: newTask, completed: false };
    setTasks([...tasks, task]);
    saveTasks([...tasks, task]);
  },[newTask]);

  function toggleTaskCompletion(taskId: string) {
    const changedTasks = tasks.map(task => {
      if(task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(changedTasks);
    saveTasks(changedTasks);
  }

  function deleteTask(taskId: string) {
    const changedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(changedTasks);
    saveTasks(changedTasks);
  }

  function saveTasks(tasks: Task[]) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

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
          return <Task
            key={task.id}
            task={task}
            onToggleTaskCompletion={toggleTaskCompletion}
            onDeleteTask={deleteTask}
          />;
        })}
      </ul>
      )}
    </>
  );
}
