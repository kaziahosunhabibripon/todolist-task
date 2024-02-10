import React, { useEffect, useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import style from "../../styles/modules/button.module.scss";
import { addTodo, updateTodo } from "../../Redux/slices/todoSlice";
import { v4 as uuid } from "uuid";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const dropIn = {
  hidden: {
    opacity: 0,
    transform: "scale(0.9)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.9)",
    opacity: 0,
  },
};
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
    <AnimatePresence>
      {modalShow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.wrapper}
        >
          <motion.div
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div
              initial={{ top: 40, opacity: 0 }}
              animate={{ top: -10, opacity: 1 }}
              exit={{ top: 40, opacity: 0 }}
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
            </motion.div>
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TodoModal;
