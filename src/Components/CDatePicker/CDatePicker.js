/** @format */

import React, { Fragment, useState } from "react";
import style from "./CDatePicker.module.css";
import { ChevronDown, Calendar } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getDateObj } from "../../Util/DateUtil";

const CDatePicker = (props) => {
  const [date, setDate] = useState(getDateObj(new Date()));

  const onDateHandler = (selectedDate) => {
    let dateObject = getDateObj(selectedDate);
    setDate((prevSate) => ({ ...dateObject }));
  };

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
          <div className={`${style.color} ${style.icon}`}>
            <Calendar size={18} absoluteStrokeWidth />
          </div>
          <div className={`${style.selected_date}`}>
            <p>{date.day}</p>
            <p
              className={`${style.color}`}
            >{`${date.date} ${date.month} ${date.year}`}</p>
          </div>
          <div className={`${style.color}`}>
            <ChevronDown size={14} absoluteStrokeWidth />
          </div>
        </Flex>
        <div className={`${style.date_picker_container}`}>
          <DatePicker
            selected={new Date()}
            onChange={onDateHandler}
            className={`${style.inner_date}`}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CDatePicker;
