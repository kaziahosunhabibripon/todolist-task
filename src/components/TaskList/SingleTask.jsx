import React from "react";

const SingleTask = ({ todo }) => {
  console.log(todo);
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
};

export default SingleTask;
