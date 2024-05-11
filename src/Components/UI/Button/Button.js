/** @format */

import React, { Fragment } from "react";
import style from "./Button.module.css";

const Button = ({ label, onClick }) => {
  return (
    <Fragment>
      <button className={`${style.button}`} onClick={onClick}>
        {label}
      </button>
    </Fragment>
  );
};

export default Button;
