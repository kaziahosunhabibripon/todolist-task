import React, { useState } from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import styles from "../../styles/modules/app.module.scss";
import { motion, AnimatePresence } from "framer-motion";
const Task = () => {
  const todoList = useSelector(state => state.todo.todoList);

  const filterStatus = useSelector(state => state.todo.filterStatus);
  const filterPriority = useSelector(state => state.todo.filterPriority);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter(item => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  const filteredPriorityList = sortedTodoList.filter(item => {
    if (filterPriority === "low") {
      return true;
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
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo, id) => {
            return <SingleTask key={id} todo={todo} />;
          })
        ) : (
          <motion.p variants={child} className={styles.emptyText}>
            no to do found
          </motion.p>
        )}
      </AnimatePresence>
      {/* {filteredPriorityList && filteredPriorityList.length > 0
        ? filteredPriorityList.map((todo, id) => {
            return <SingleTask key={id} todo={todo} />;
          })
        : "no to do found"} */}
    </motion.div>
  );
};

export default Task;
