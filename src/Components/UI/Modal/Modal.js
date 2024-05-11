/** @format */

import React, { Children, Fragment } from "react";
import style from "./Modal.module.css";
import { createPortal } from "react-dom";

//Create children with pos: absolute
const Modal = ({ children }) => {
  return createPortal(
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.overlay}`}></div>
        {children}
      </div>
    </Fragment>,
    document.getElementById("modal")
  );
};

export default Modal;
