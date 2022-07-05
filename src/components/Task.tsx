import { Trash } from "phosphor-react";

import styles from './Task.module.css';

export function Task() {
  return (
    <li className={styles.task}>
      <div className={styles.radioContainer}>
        <label htmlFor="1">
          <input id="1" type="checkbox" />
          <div className={styles.customRadio} />
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </label>
      </div>

      <button>
        <Trash />
      </button>
    </li>
  );
}
