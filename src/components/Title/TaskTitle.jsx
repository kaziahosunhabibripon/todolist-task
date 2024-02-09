import React, { useState } from "react";
import style from "../../styles/modules/app.module.scss";
import SelectButton from "../Button/SelectButton";
import TodoModal from "../Modal/TodoModal";
import Status from "../Priority/Status";
import Task from "../TaskList/Task";
import styles from "../../styles/modules/button.module.scss";
const TaskTitle = () => {
  const [modalShow, setModalShow] = useState(false);
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
        <SelectButton />
        <Status />
      </div>
      <Task />
      <TodoModal modalShow={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

export default TaskTitle;
