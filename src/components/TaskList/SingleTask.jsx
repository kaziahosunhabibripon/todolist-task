import React, { useState } from "react";
import styles from "../../styles/modules/todoItem.module.scss";
import { format } from "date-fns";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../Redux/slices/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "../Modal/TodoModal";
const SingleTask = ({ todo }) => {
  const dispatch = useDispatch();
  const [updateModal, setUpdateModal] = useState(false);
  const handleUpdate = () => {
    setUpdateModal(true);
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("todo deleted successfully");
  };
  return (
    <>
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

            <p className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
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
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit />
          </div>
          <div
            className={styles.icon}
            onClick={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete />
          </div>
        </div>
      </div>
      <TodoModal
        type="Update"
        todo={todo}
        modalShow={updateModal}
        setModalShow={setUpdateModal}
      />
    </>
  );
};

export default SingleTask;
