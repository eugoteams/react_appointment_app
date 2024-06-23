/** @format */

import React, { Fragment, useState } from "react";
import style from "./SearchPatient.module.css";
import SearchBar from "../UI/SearchBar/SearchBar";
import { X } from "lucide-react";
import Flex from "../UI/Flex/Flex";
import Button from "../UI/Button/Button";
import { patients } from "../../model/Constants";
import { checkSubString } from "../../Util/Helper";
import FormV1 from "../Forms/FormV1/FormV1";

const SearchPatient = ({ props }) => {
  const [state, setSate] = useState({
    resultSelected: null,
    isSearchActive: false,
    searchResult: [],
  });

  const onSearchTextListener = (searchQuery) => {
    let filteredResult = patients.filter(
      (patient) =>
        checkSubString(
          `${patient.first_name}${patient.last_name}`,
          searchQuery
        ) || checkSubString(patient.phone, searchQuery)
    );
    if (filteredResult.length > 0) {
      setSate((prevSate) => ({
        ...prevSate,
        isSearchActive: true,
        searchResult: [...filteredResult],
      }));
      return;
    }
    setSate((prevSate) => ({
      searchResult: [],
      isSearchActive: true,
    }));
    console.log(filteredResult);
  };

  const onClearListener = () => {
    setSate((prevSate) => ({
      ...prevSate,
      searchResult: [],
      isSearchActive: false,
    }));
  };

  const onClickResultCard = (e) => {
    let resultObj = JSON.parse(e.target.getAttribute("name"));
    setSate((prevSate) => ({
      ...prevSate,
      resultSelected: { ...resultObj },
      searchResult: [],
      isSearchActive: false,
    }));
  };
  console.log(state);
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
          {!state.resultSelected && (
            <SearchBar
              onChangeSearch={onSearchTextListener}
              onClear={onClearListener}
            />
          )}
        </div>
        <div className={`${style.result_container}`}>
          {!state.resultSelected ? (
            state.searchResult.length > 0 &&
            state.isSearchActive &&
            state.searchResult.map((result) => {
              return (
                <p
                  key={result.id}
                  className={`${style.result_card}`}
                  onClick={onClickResultCard}
                  name={JSON.stringify(result)}
                >
                  {result.first_name} {result.last_name}
                </p>
              );
            })
          ) : (
            <FormV1 />
          )}
        </div>
        <div className={`${style.footer}`}>
          {state.searchResult.length === 0 && state.isSearchActive ? (
            <Flex align={"alignCenter"} justify={"justifyCenter"}>
              <Button label={"add new"} />
            </Flex>
          ) : (
            ""
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default SearchPatient;
