/** @format */

import React, { Fragment } from "react";
import style from "./FormV1.module.css";
import InputField from "../../UI/InputField/InputField";
import Flex from "../../UI/Flex/Flex";
import RadioButton from "../../UI/RadioButton/RadioButton";
import useForm from "../../../hooks/useForm";

const FormV1 = (props) => {
  const { onChangeHandler, formSate } = useForm();

  return (
    <Fragment>
      <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
        <InputField
          type="text"
          label={"first name"}
          placeholder={"enter frist name"}
          onChange={onChangeHandler}
        />
        <InputField
          type="text"
          label={"last name"}
          placeholder={"enter last name"}
          onChange={onChangeHandler}
        />
      </Flex>
      <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
        <InputField
          type="phone number"
          label={"phone"}
          placeholder={"7672015234"}
          onChange={onChangeHandler}
        />
        <InputField
          type="number"
          label={"Age"}
          placeholder={"enter age"}
          onChange={onChangeHandler}
        />
      </Flex>
      <div className={`${style.radio_group}`}>
        <p>Reason</p>
        <Flex wrap justify={"justifySpaceBetween"}>
          <RadioButton name={"reason"} label={"vaccination"} />
          <RadioButton name={"reason"} label={"consultation"} />
          <RadioButton name={"reason"} label={"follow up"} />
          <RadioButton name={"reason"} label={"others"} />
        </Flex>
      </div>
    </Fragment>
  );
};

export default FormV1;
