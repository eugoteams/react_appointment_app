/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./TimeSlotBooking.module.css";
import { Sunrise } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import TimeTile from "../UI/TimeTile/TimeTile";

const TimeSlotBooking = ({ onTimeSlotSelected }) => {
  const [timeSelected, setTimeSelected] = useState("");

  const onTileClickListener = (timeSlot) => {
    setTimeSelected((prevState) => timeSlot);
  };

  useEffect(() => {
    onTimeSlotSelected(timeSelected);
  }, [timeSelected]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div style={{ marginTop: "2.5rem" }}>
          <div className={`${style.wrapper}`}>
            <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
              <Sunrise size={18} absoluteStrokeWidth color="#fab005" />
              <div className={`${style.title}`}>
                <p>morning</p>
                <p>9:00 AM to 12:00 PM</p>
              </div>
            </Flex>
          </div>
          <div className={`${style.slot_wrapper}`}>
            <Flex justify={"justifyCenter"} align={"alignCenter"}>
              <div style={{ width: "90%" }}>
                <Flex wrap>
                  <TimeTile label={"9:00 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:10 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:20 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:30 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:40 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:50 AM"} onSelect={onTileClickListener} />
                  <TimeTile label={"10:00 AM"} onSelect={onTileClickListener} />
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
        <div style={{ marginTop: "8rem" }}>
          <div className={`${style.wrapper}`}>
            <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
              <Sunrise size={18} absoluteStrokeWidth color="#fab005" />
              <div className={`${style.title}`}>
                <p>evening</p>
                <p>5:00 PM to 9:00 PM</p>
              </div>
            </Flex>
          </div>
          <div className={`${style.slot_wrapper}`}>
            <Flex justify={"justifyCenter"} align={"alignCenter"}>
              <div style={{ width: "90%" }}>
                <Flex wrap>
                  <TimeTile label={"9:00 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:10 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:20 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:30 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:40 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"9:50 PM"} onSelect={onTileClickListener} />
                  <TimeTile label={"10:00 PM"} onSelect={onTileClickListener} />
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default TimeSlotBooking;
