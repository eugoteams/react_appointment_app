/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./Select.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import AvatartCard from "../UI/AvatarCard/AvatarCard";

const Select = ({ data, onSelectListener }) => {
  const [dropdown, setDropDown] = useState(false);
  const [doctor, setDoctor] = useState({
    id: 1,
    firstname: "sandeep",
    lastname: "maturi",
    profession: "general doctor",
  });

  const onClickListener = (e) => {
    setDropDown((prevState) => !prevState);
  };

  const onClicItemkListener = (e) => {
    console.log("entered here", e.target.getAttribute("name"));
    let docObj = JSON.parse(e.target.getAttribute("name"));
    setDoctor((prevState) => ({ ...docObj }));
    setDropDown((prevState) => !prevState);
  };

  useEffect(() => {
    onSelectListener(doctor);
  }, [doctor]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div onClick={onClickListener}>
          <Flex justify={"justifySpaceBetween"} align={"alignCenter"}>
            <AvatartCard
              firstName={doctor.firstname}
              lastName={doctor.lastname}
              profession={doctor.profession}
            />
            <div className={`${style.icon}`}>
              {dropdown ? (
                <ChevronUp size={14} absoluteStrokeWidth />
              ) : (
                <ChevronDown size={14} absoluteStrokeWidth />
              )}
            </div>
          </Flex>
        </div>
        {dropdown && (
          <div className={`${style.dropdown}`}>
            {data.map((doctor) => {
              return (
                <div className={`${style.item_container}`} key={doctor.id}>
                  <div
                    className={`${style.overlay}`}
                    name={JSON.stringify({ ...doctor })}
                    onClick={onClicItemkListener}
                  ></div>
                  <AvatartCard
                    firstName={doctor.firstname}
                    lastName={doctor.lastname}
                    profession={doctor.profession}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Select;
