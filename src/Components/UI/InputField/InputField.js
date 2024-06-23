/** @format */

import React, { Fragment } from "react";
import style from "./InputField.module.css";
import Flex from "../Flex/Flex";

const InputField = ({ type, label, placeholder, onChange }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex direction={"Cols"}>
          <label>{label} :</label>
          <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            name={label}
          />
        </Flex>
      </div>
    </Fragment>
  );
};

export default InputField;
