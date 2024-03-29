/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import {
  searchTextState,
  searchResultsState,
  searchTypeState,
  lastSearchState,
} from "../../recoils/search/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Icon from "../common/Icon";
import "./SearchBar.scss";

function SearchBar() {
  const searchType = "Search";
  const [type, setType] = useRecoilState(searchTypeState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);
  const [isSearched, setIsSearched] = useState(false);
  const [lastSearch, setLastSearch] = useRecoilState(lastSearchState);
  const navigate = useNavigate();

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const debouncedSearchText = useDebounce(searchText, 1000);

  const fetchSearchText = async (text) => {
    // console.log(type);
    const request = await axios
      .get(requests.search.getSearch(type, text, 0, 30))
      .then((response) => {
        setSearchResults(response.data[`${type}s`]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setIsSearched(false);
  }, [searchText]);

  useEffect(() => {
    if (debouncedSearchText) {
      fetchSearchText(debouncedSearchText);
    }
  }, [debouncedSearchText, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSearched(true);
    navigate(`/search/${searchText}`);
  };

  const clearText = () => {
    setSearchText("");
    navigate("/search");
  };

  return (
    <form
      style={{ display: "flex", position: "relative" }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className={classNames("SearchBar", searchType)}
        onChange={onChange}
        maxLength="19"
        value={searchText || ""}
      />
      <Icon
        style={{
          display: "flex",
          position: "absolute",
          top: "3px",
          left: "10px",
        }}
        img="search"
        isActive={isSearched}
      />
      {searchText ? (
        <Icon
          style={{
            display: "flex",
            position: "absolute",
            top: "3px",
            right: "10px",
          }}
          img="clear"
          onClick={clearText}
        />
      ) : (
        ""
      )}
    </form>
  );
}

export default React.memo(SearchBar);
