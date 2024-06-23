/** @format */

import React, { Fragment } from "react";
import style from "./RadioButton.module.css";
import Flex from "../Flex/Flex";

const RadioButton = ({ name, label }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex align={"alignCenter"} justify={"justifyFlexStart"}>
          <input type="radio" name={name} />
          <label>{label}</label>
        </Flex>
      </div>
    </Fragment>
  );
};

export default RadioButton;
