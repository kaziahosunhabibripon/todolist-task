import React from "react";
import styles from "../../styles/modules/todoItem.module.scss";
const SingleTask = ({ todo }) => {
  console.log(todo);
  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        [ ]
        <div className={styles.texts}>
          <p
            className={`${styles.todoText}  ${
              todo.status === "complete" && styles["todoText--completed"]
            }`}
          >
            {todo.title}
          </p>
        </div>
        <div className={styles.texts}>
          <p className={`${styles.todoText}`}>{todo.status}</p>
        </div>
        <div className={styles.texts}>
          <p
            className={`${styles.todoText} ${
              todo.priority === "low" && styles["todoText--low"]
            }
                ${todo.priority === "medium" && styles["todoText--medium"]}
                ${todo.priority === "high" && styles["todoText--high"]}`}
          >
            {todo.priority}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTask;
