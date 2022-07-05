import { Scroll } from "phosphor-react";

import { Task } from "./Task";

import styles from './TaskList.module.css';

export function TaskList() {
  return (
    <>
      <header className={styles.listHeader}>
        <p>
          Tarefas criadas
          <span>0</span>
        </p>

        <p>
          Concluídas
          <span>0</span>
        </p>
      </header>

      <div className={styles.emptyList}>
        <Scroll size={56} />
        <p><strong>Você ainda não tem tarefas cadastradas</strong>        </p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>

      <ul className={styles.taskList}>
        <Task />
        <Task />
        <Task />
      </ul>
    </>
  );
}
