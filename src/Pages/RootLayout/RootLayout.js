/** @format */

import React, { Fragment } from "react";
import style from "./RootLayout.module.css";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

const RootLayout = (props) => {
  return (
    <Fragment>
      <div>
        <Header onDoctorSelect={() => {}} />
        <div className={`${style.inner_container}`}>
          <Outlet />
        </div>
      </div>
    </Fragment>
  );
};

export default RootLayout;
