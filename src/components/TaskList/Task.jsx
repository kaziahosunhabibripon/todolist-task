import React from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
import styles from "../../styles/modules/app.module.scss";
const Task = () => {
  const todoList = useSelector(state => state.todo.todoList);

  const filterStatus = useSelector(state => state.todo.filterStatus);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

  const filteredTodoList = sortedTodoList.filter(item => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div className={styles.content__wrapper}>
      {filteredTodoList && filteredTodoList.length > 0
        ? filteredTodoList.map((todo, id) => {
            return <SingleTask key={id} todo={todo} />;
          })
        : "no to do found"}
    </div>
  );
};

export default Task;
