/** @format */

import React, { Fragment, useState, useRef, useEffect } from "react";
import style from "./SearchBar.module.css";
import { Search, X } from "lucide-react";
import Flex from "../UI/Flex/Flex";

const SearchBar = (props) => {
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState("");
  let debounceRef = useRef();

  const onSearchListener = (e) => {
    setSearchText((prevState) => e.target.value);
  };

  const onClickClear = (e) => {
    e.preventDefault();
    setSearchText((prevState) => "");
  };

  const onFocusListener = () => {
    setFocus((prevState) => !prevState);
  };

  useEffect(() => {
    console.log(searchText);
    debounceRef.current = setTimeout(() => {
      if (searchText) {
        console.log("Api Call", searchText);
      }
    }, 1000);
    return () => {
      //clean Up Code
      clearInterval(debounceRef.current);
    };
  }, [searchText]);

  return (
    <Fragment>
      <div
        className={`${style.container} ${focus && `${style.container_focus}`}`}
      >
        <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
          <div style={{ marginLeft: "1rem" }}>
            <Search size={14} absoluteStrokeWidth />
          </div>

          <input
            type="text"
            placeholder="default placeholder"
            value={searchText}
            onChange={onSearchListener}
            onFocus={onFocusListener}
          />
          {searchText.length > 0 && (
            <div style={{ marginRight: "1rem" }} onClick={onClickClear}>
              <X size={14} absoluteStrokeWidth onClick={onClickClear} />
            </div>
          )}
        </Flex>
      </div>
    </Fragment>
  );
};

export default SearchBar;
