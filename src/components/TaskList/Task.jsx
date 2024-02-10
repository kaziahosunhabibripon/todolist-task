import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleTask from "./SingleTask";
import styles from "../../styles/modules/app.module.scss";
import style from "../../styles/modules/button.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import {
  updateFilterPriority,
  updateFilterStatus,
} from "../../Redux/slices/todoSlice";
const Task = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const filterPriority = useSelector(state => state.todo.filterPriority);
  const filterStatus = useSelector(state => state.todo.filterStatus);

  const dispatch = useDispatch();
  const updateStatus = status => {
    dispatch(updateFilterStatus(status));
  };
  const updatePriority = e => {
    dispatch(updateFilterPriority(e.target.value));
  };
  const filteredPriorityList = todoList
    .filter(item => {
      if (filterPriority === "all") {
        return true;
      }
      if (filterPriority === "low") {
        return item.priority === "low";
      }
      return item.priority === filterPriority;
    })
    .filter(item => {
      if (filterStatus === "complete") {
        return item.status === "complete";
      }
      if (filterStatus === "incomplete") {
        return item.status === "incomplete";
      }
      return true;
    });
  const completedItems = todoList.filter(item => item.status === "complete");
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const child = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      animate="visible"
      initial="hidden"
      className={styles.content__wrapper}
    >
      <div className={styles.count__title}>
        <h1>Count {todoList.length}</h1>
        <h1>
          Completed {completedItems.length} out of {todoList.length}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <select
          value={filterPriority}
          onChange={updatePriority}
          className={`${style.button} ${style["button__select"]}`}
          style={{ marginBottom: "10px", display: "block" }}
        >
          <option value="all">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className={`${style.button} ${style["button--primary"]}`}
          value="complete"
          onClick={() => updateStatus("complete")}
        >
          Complete
        </button>
        <button
          className={style.button}
          style={{ backgroundColor: "tomato", color: "white" }}
          value="incomplete"
          onClick={() => updateStatus("incomplete")}
        >
          Incomplete
        </button>
      </div>
      <AnimatePresence>
        {filteredPriorityList && filteredPriorityList.length > 0 ? (
          filteredPriorityList.map((todo, id) => {
            return <SingleTask key={id} todo={todo} />;
          })
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            no to do found
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Task;
