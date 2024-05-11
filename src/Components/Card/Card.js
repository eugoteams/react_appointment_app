/** @format */

import React, { Fragment } from "react";
import style from "./Card.module.css";
import Flex from "../UI/Flex/Flex";
import EllipseMenu from "../UI/EllipseMenu/EllipseMenu";

const Card = ({ id, firstName, lastName, age, contact }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
          <div className={`${style.index} ${style.wrapper_flex}`}>
            {id / 10 < 1 ? "0" + id : id}{" "}
          </div>
          <div className={`${style.patient_info} ${style.wrapper_flex}`}>
            <Flex direction={"Cols"} justify={"justifyFlexStart"}>
              <p>
                {firstName} {lastName}
              </p>
              <p>{`male , ${age}`}</p>
            </Flex>
          </div>
          <div className={`${style.wrapper_flex}`}>
            <Flex align={"alignCenter"} justify={"justifyCenter"}>
              <p>{contact}</p>
            </Flex>
          </div>
          <div className={`${style.wrapper_flex}`}>
            <Flex align={"alignCenter"} justify={"justifyCenter"}>
              <p>05:10 am</p>
            </Flex>
          </div>

          <div className={`${style.icon} ${style.wrapper_flex}`}>
            <Flex align={"alignCenter"} justify={"justifyFlexEnd"}>
              <EllipseMenu />
            </Flex>
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default Card;
