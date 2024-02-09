import React from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";
const Task = () => {
  const todoList = useSelector(state => state.todoList);
  console.log(todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo, index) => {
            return <SingleTask key={index} todo={todo} />;
          })
        : "no to do found"}
    </div>
  );
};

export default Task;
