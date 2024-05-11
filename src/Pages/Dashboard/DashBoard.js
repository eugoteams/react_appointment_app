/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./Dsahboard.module.css";
import Card from "../../Components/Card/Card";
import { patients } from "../../model/Constants";
import Header from "../../Components/Header/Header";

const Dsahboard = (props) => {
  const [doctor, selectedDoctor] = useState({});
  const [pat, setPatients] = useState(patients);
  const onDoctorSelectLitener = (doctor) => {
    selectedDoctor((prevState) => ({ ...doctor }));
  };

  useEffect(() => {
    let filteredData = patients.filter(
      (patient, _) => patient.doctorId === doctor.id
    );
    if (filteredData.length > 0) {
      setPatients((prevState) => [...filteredData]);
    } else {
      setPatients((prevState) => [...patients]);
    }
  }, [doctor]);

  console.log(pat);
  return (
    <Fragment>
      <div className={`${style.container}`}>
        {pat.map((patient) => {
          return (
            <Card
              key={patient.id}
              id={patient.id}
              firstName={patient.first_name}
              lastName={patient.last_name}
              age={patient.age}
              contact={patient.phone}
            />
          );
        })}
      </div>
    </Fragment>
  );
};

export default Dsahboard;
