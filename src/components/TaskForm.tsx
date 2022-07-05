import { ChangeEvent, FormEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";

import styles from './TaskForm.module.css';

interface TaskFormProps {
  onCreateTask: (title: string) => void;
}

export function TaskForm({onCreateTask }: TaskFormProps) {
  const [title, setTitle] = useState('');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    onCreateTask(title);
    setTitle('');
  }

  function handleTitleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.taskForm}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="submit">
        Criar <PlusCircle size={20} weight="bold" />
      </button>
    </form>
  );
}
