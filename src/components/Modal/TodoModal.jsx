import React, { useEffect, useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import style from "../../styles/modules/button.module.scss";
import { addTodo, updateTodo } from "../../Redux/slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
const TodoModal = ({ type, modalShow, setModalShow, todo }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === "Update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
      setPriority(todo.priority);
    } else {
      setTitle("");
      setStatus("incomplete");
      setPriority("low");
    }
  }, [type, todo, modalShow]);
  const handleSubmit = e => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter a title");
      return;
    }
    if (title && status && priority) {
      if (type === "Task") {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            priority,
            time: new Date().toLocaleString(),
          })
        );
        toast.success("Task Added successfully");
      }
      if (type === "Update") {
        if (
          todo.title !== title ||
          todo.status !== status ||
          todo.priority !== priority
        ) {
          dispatch(
            updateTodo({
              ...todo,
              title,
              status,
              priority,
              time: new Date().toLocaleString(),
            })
          );
          toast.success("Task Updated successfully");
          setModalShow(false);
        }
      }
      setModalShow(false);
    }
  };
  return (
    modalShow && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => {
              setModalShow(false);
            }}
            onKeyDown={() => {
              setModalShow(false);
            }}
            tabIndex={0}
            role="button"
          >
            <MdOutlineClose />
          </div>
          <form className={styles.form} onSubmit={e => handleSubmit(e)}>
            <h1 className={styles.formTitle}>
              {type === "Update" ? "Update" : "Task"} Modal
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                className={styles.formInput}
                placeholder="Task Title"
              />
            </label>
            <label htmlFor="status">
              Status
              <select
                name="status"
                id="status"
                value={status}
                onChange={e => setStatus(e.target.value)}
                className={styles.formSelect}
              >
                <option value="complete">Complete</option>
                <option value="incomplete">Incomplete</option>
              </select>
            </label>
            <label htmlFor="priority">
              Priority
              <select
                name="priority"
                id="priority"
                className={styles.formSelect}
                value={priority}
                onChange={e => setPriority(e.target.value)}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <button
                type="submit"
                className={`${style.button} ${style["button--primary"]}`}
              >
                {type === "Update" ? "Update" : "Add"} Task
              </button>
              <button
                type="button"
                className={`${style.button} ${style["button--secondary"]}`}
                onClick={() => {
                  setModalShow(false);
                }}
                onKeyDown={() => {
                  setModalShow(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default TodoModal;
