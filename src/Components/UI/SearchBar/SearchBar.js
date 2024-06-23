/** @format */

import React, { Fragment, useEffect, useRef, useState } from "react";
import style from "./SearchBar.module.css";
import Flex from "../Flex/Flex";
import { Search, X } from "lucide-react";

const SearchBar = ({ onChangeSearch, onClear }) => {
  const [searchText, setSearchText] = useState("");
  const debounceRef = useRef();
  const onChangeListener = (e) => {
    setSearchText((prevState) => e.target.value);
  };

  const onClickClear = () => {
    onClear();
    setSearchText((prevState) => "");
  };

  useEffect(() => {
    debounceRef.current = setTimeout(() => {
      onChangeSearch(searchText);
    }, 1000);
    return () => {
      clearInterval(debounceRef.current);
    };
  }, [searchText]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
          <input
            type="text"
            placeholder="search by name / phone number"
            value={searchText}
            onChange={onChangeListener}
          />
          {!searchText ? (
            <Search size={14} absoluteStrokeWidth className={`${style.icon}`} />
          ) : (
            <X
              size={14}
              absoluteStrokeWidth
              className={`${style.icon}`}
              onClick={onClickClear}
            />
          )}
        </Flex>
      </div>
    </Fragment>
  );
};

export default SearchBar;
