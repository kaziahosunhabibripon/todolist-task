import React from "react";
import style from "../../styles/modules/button.module.scss";
const Status = () => {
  return (
    <>
      <select className={`${style.button} ${style["button__select"]}`}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="High">High</option>
      </select>
    </>
  );
};

export default Status;
