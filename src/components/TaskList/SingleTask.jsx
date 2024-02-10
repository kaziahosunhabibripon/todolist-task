import React, { useEffect, useState } from "react";
import styles from "../../styles/modules/todoItem.module.scss";
import { format } from "date-fns";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../Redux/slices/todoSlice";
import toast from "react-hot-toast";
import TodoModal from "../Modal/TodoModal";
import CheckButton from "../Button/CheckButton";
const SingleTask = ({ todo }) => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);
  const [updateModal, setUpdateModal] = useState(false);
  const handleUpdate = () => {
    setUpdateModal(true);
  };
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("todo deleted successfully");
  };
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p
              className={`${styles.todoText}  ${
                todo.status === "complete" && styles["todoText--completed"]
              }`}
            >
              {todo.title}
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
          <div className={styles.texts}>
            <h1 className={styles.time}>
              {format(new Date(todo.time), "p, MM/dd/yyyy")}
            </h1>
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
