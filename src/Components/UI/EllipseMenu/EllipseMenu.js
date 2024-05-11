/** @format */

import React, { Fragment, useState } from "react";
import style from "./EllipseMenu.module.css";
import { Ellipsis } from "lucide-react";

const EllipseMenu = ({ actioData = ["edit", "delete", "create"] }) => {
  const [dropdown, setDropDown] = useState(false);

  const onClickListener = (e) => {
    setDropDown((prevState) => !prevState);
  };

  const onItemClikcListener = (event) => {
    let actionType = event.target.getAttribute("name");
    console.log(actionType);
  };
  //Z-index 999
  return (
    <Fragment>
      <div>
        <Ellipsis size={18} absoluteStrokeWidth onClick={onClickListener} />
        {dropdown && (
          <div className={`${style.dropdown}`}>
            {actioData.map((action, index) => {
              return (
                <p name={action} onClick={onItemClikcListener} key={index}>
                  {action}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default EllipseMenu;
