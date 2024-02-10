import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleTask from "./SingleTask";
import styles from "../../styles/modules/app.module.scss";
import style from "../../styles/modules/button.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import { updateFilterPriority } from "../../Redux/slices/todoSlice";
const Task = () => {
  const todoList = useSelector(state => state.todo.todoList);
  const filterPriority = useSelector(state => state.todo.filterPriority);

  const dispatch = useDispatch();
  const updatePriority = e => {
    dispatch(updateFilterPriority(e.target.value));
  };
  const filteredPriorityList = todoList.filter(item => {
    if (filterPriority === "low") {
      return item.priority === "low";
    }
    return item.priority === filterPriority;
  });
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
        <h1>Completed out of {todoList.length}</h1>
      </div>
      <select
        value={filterPriority}
        onChange={updatePriority}
        className={`${style.button} ${style["button__select"]}`}
        style={{ marginBottom: "10px", display: "block" }}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

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
