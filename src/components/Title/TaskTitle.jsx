import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/modules/app.module.scss";
import TodoModal from "../Modal/TodoModal";

import Task from "../TaskList/Task";
import styles from "../../styles/modules/button.module.scss";

const TaskTitle = () => {
  const [modalShow, setModalShow] = useState(false);

  const todoList = useSelector(state => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <div className={style.app__wrapper}>
      <div className={style.appHeader}>
        <button
          className={`${styles.button} ${styles["button--primary"]}`}
          type="button"
          onClick={() => {
            setModalShow(true);
          }}
        >
          Add Task
        </button>

        <button
          className={`${styles.button} ${styles["button--primary"]}`}
          value="complete"
        >
          Complete
        </button>
        <button
          className={styles.button}
          style={{ backgroundColor: "tomato", color: "white" }}
          value="incomplete"
        >
          Incomplete
        </button>
      </div>
      <Task />
      <TodoModal
        type="Task"
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </div>
  );
};

export default TaskTitle;
