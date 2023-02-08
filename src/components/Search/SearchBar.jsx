/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import classNames from "classnames";
import { useDebounce } from "../../hooks/useDebounce";
import {
  searchTextState,
  searchResultsState,
  searchTypeState,
} from "../../recoils/search/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Icon from "../common/Icon";
import "./SearchBar.scss";

export default function SearchBar() {
  const searchType = "Search";
  const type = useRecoilValue(searchTypeState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const debouncedSearchText = useDebounce(searchText, 1000);

  const fetchSearchText = async (text) => {
    console.log(type);
    const request = await axios
      .get(requests.search.getSearch(type, text, 1, 30))
      .then((response) => {
        setSearchResults(response.data[`${type}s`]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (debouncedSearchText) {
      // console.log(debouncedSearchText)
      fetchSearchText(debouncedSearchText);
    }
  }, [debouncedSearchText, type]);

  return (
    <form style={{ display: "flex", position: "relative" }}>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        className={classNames("SearchBar", searchType)}
        onChange={onChange}
        maxLength="19"
      />
      <Icon
        style={{
          display: "flex",
          position: "absolute",
          top: "3px",
          right: "10px",
        }}
        img="search"
        isActive={false}
      />
      {/* <button>검색</button> */}
    </form>
  );
}
