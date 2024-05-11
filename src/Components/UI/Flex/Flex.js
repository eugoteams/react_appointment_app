/** @format */

import React, { Fragment } from "react";
import style from "./Flex.module.css";

//props => properties
const Flex = ({ children, direction, justify, align, wrap }) => {
  return (
    <Fragment>
      <div
        className={`${style.container} ${style[direction]} ${style[justify]} ${
          style[wrap && "wrap"]
        }
        ${style[align]}
          `}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Flex;
