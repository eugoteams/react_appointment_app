/** @format */

import React, { Fragment, useState } from "react";
import style from "./Booking.module.css";
import TimeSlotBooking from "../../Components/TimeSlotBooking/TimeSlotBooking";
import { MoveLeft } from "lucide-react";
import Flex from "../../Components/UI/Flex/Flex";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/UI/Modal/Modal";
import SearchPatient from "../../Components/SearchPatient/SearchPatient";

const Booking = (props) => {
  const [timeSlot, setStimeSlot] = useState("");

  const navigate = useNavigate();
  const onClickBackListener = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const onTimeSlotSelectedListener = (timeSlot) => {
    setStimeSlot((prevState) => timeSlot);
  };

  return (
    <Fragment>
      {timeSlot && (
        <Modal>
          <SearchPatient />
        </Modal>
      )}
      <div className={`${style.back_button_wrapper}`}>
        <div className={`${style.overlay}`} onClick={onClickBackListener}></div>
        <Flex justify="justifySpaceBetween">
          <MoveLeft size={14} color="black" absoluteStrokeWidth />
          <span>back</span>
        </Flex>
      </div>

      <TimeSlotBooking onTimeSlotSelected={onTimeSlotSelectedListener} />
    </Fragment>
  );
};

export default Booking;
