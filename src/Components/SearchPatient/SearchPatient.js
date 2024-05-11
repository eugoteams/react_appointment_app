/** @format */

import React, { Fragment, useState } from "react";
import style from "./SearchPatient.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import { X } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import Button from "../UI/Button/Button";
import { patients } from "../../model/Constants";

const SearchPatient = ({ props }) => {
  const [searchResult, setSearchResult] = useState("");

  const onSearchTextListener = (searchQuery) => {
    let filteredResult = patients.filter((patient) =>
      String(patient.first_name)
        .toLocaleLowerCase()
        .includes(searchQuery.toLocaleLowerCase())
    );
    console.log(filteredResult);
    setSearchResult((prevState) => searchQuery);
  };
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.footer}`}>
          <Flex align={"alignCenter"} justify={"justifySpaceBetween"}>
            <p>Book appointment for </p>
            <X
              size={14}
              color="#495057"
              absoluteStrokeWidth
              style={{ cursor: "pointer" }}
            />
          </Flex>
        </div>
        <div className={`${style.search_wrapper}`}>
          <SearchBar onChangeSearch={onSearchTextListener} />
        </div>
        <div className={`${style.result_container}`}></div>
        <div className={`${style.footer}`}>
          {searchResult && (
            <Flex align={"alignCenter"} justify={"justifyCenter"}>
              <Button label={"add new"} />
            </Flex>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchPatient;
