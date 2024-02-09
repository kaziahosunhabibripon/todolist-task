import React from "react";
import style from "../../styles/modules/button.module.scss";
const SelectButton = () => {
  return (
    <>
      <select className={`${style.button} ${style["button__select"]}`}>
        <option value="all">All</option>
        <option value="complete">Complete</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </>
  );
};

export default SelectButton;
