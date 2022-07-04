import { Scroll } from "phosphor-react";

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
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </>
  );
}
