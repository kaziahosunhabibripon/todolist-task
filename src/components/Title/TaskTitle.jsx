import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../../styles/modules/app.module.scss";
import TodoModal from "../Modal/TodoModal";
import Status from "../Priority/Status";
import Task from "../TaskList/Task";
import styles from "../../styles/modules/button.module.scss";
import { updateFilterStatus } from "../../Redux/slices/todoSlice";
const TaskTitle = () => {
  const [modalShow, setModalShow] = useState(false);
  const filterStatus = useSelector(state => state.todo.filterStatus);

  const dispatch = useDispatch();

  const updateFilter = e => {
    dispatch(updateFilterStatus(e.target.value));
  };

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
        <select
          id="status"
          value={filterStatus}
          onChange={updateFilter}
          className={`${styles.button} ${styles["button__select"]}`}
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>

        <Status />
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
