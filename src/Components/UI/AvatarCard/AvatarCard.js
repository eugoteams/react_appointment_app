/** @format */

import React, { Fragment } from "react";
import style from "./AvatartCard.module.css";
import Flex from "../Flex/Flex";

const AvatartCard = ({ firstName, lastName, profession, size = "sm" }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
          <div className={`${style.avatar} ${style[size]}`}>
            <span>{firstName.charAt(0)}</span>
            <span>{lastName.charAt(0)}</span>
          </div>
          <div className={`${style.description}`}>
            <p className={`${style.name}`}>{`dr . ${firstName} ${lastName}`}</p>
            <p className={`${style.profession}`}>{`${profession}`}</p>
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default AvatartCard;
