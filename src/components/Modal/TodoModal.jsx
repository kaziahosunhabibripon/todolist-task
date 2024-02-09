import React, { useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import style from "../../styles/modules/button.module.scss";
import { addTodo } from "../../Redux/slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
const TodoModal = ({ modalShow, setModalShow }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const [priority, setPriority] = useState("low");
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (title && status && priority) {
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
      setModalShow(false);
    } else {
      toast.error("Please fill all the fields");
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
            <h1 className={styles.formTitle}>Task Title</h1>
            <label htmlFor="title">
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
                Add Task
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
