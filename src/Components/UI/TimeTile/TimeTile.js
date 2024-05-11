/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./TimeTile.module.css";
import Flex from "../Flex/Flex";
import { MoveRight } from "lucide-react";

const TimeTile = ({ label, onSelect }) => {
  const [select, setSelected] = useState(false);

  const onTileClick = (e) => {
    setSelected((prevState) => !prevState);
  };

  useEffect(() => {
    onSelect(select);
  }, [select]);

  return (
    <Fragment>
      <div
        className={`${style.container} ${select && `${style.selected}`}`}
        onClick={onTileClick}
      >
        <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
          {select ? (
            <MoveRight
              size={14}
              absoluteStrokeWidth
              className={`${style.icon}`}
            />
          ) : (
            <div className={`${style.radio}`}></div>
          )}
          <div className={`${style.time}`}>
            <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
              <p>{label}</p>
            </Flex>
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default TimeTile;
