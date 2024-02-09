import React, { useState } from "react";
import styles from "../../styles/modules/modal.module.scss";
import { MdOutlineClose } from "react-icons/md";

import style from "../../styles/modules/button.module.scss";
const TodoModal = ({ modalShow, setModalShow }) => {
  return (
    <div>
      {modalShow && (
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
            <form className={styles.form}>
              <h1 className={styles.formTitle}>Task Title</h1>
              <label htmlFor="title">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className={styles.formInput}
                  placeholder="Task Title"
                />
              </label>
              <label htmlFor="status">
                Status
                <select name="status" id="status" className={styles.formSelect}>
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
      )}
    </div>
  );
};

export default TodoModal;
