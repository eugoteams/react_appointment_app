/** @format */

import React, { Fragment } from "react";
import style from "./Header.module.css";
import Select from "../Select/Select";
import { doctorsList } from "../../model/Constants";
import CDatePicker from "../CDatePicker/CDatePicker";
import Flex from "../UI/Flex/Flex";
import Button from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";

const Header = ({ onDoctorSelect }) => {
  const navigation = useNavigate();

  const onSelectListener = (doctor) => {
    onDoctorSelect(doctor);
  };

  const navigateToBooking = (e) => {
    navigation("/booking");
  };

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
          <div className={`${style.wrapper}`}>
            <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
              <Select data={doctorsList} onSelectListener={onSelectListener} />
              <CDatePicker />
            </Flex>
          </div>
          <div className={`${style.button_wrapper}`}>
            <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
              <Button label={"appointments"} onClick={navigateToBooking} />
              <Button label={"walk in"} />
            </Flex>
          </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default Header;
