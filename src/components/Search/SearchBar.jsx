/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import {
  searchTextState,
  searchResultsState,
  searchTypeState,
} from "../../recoils/search/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function SearchBar() {
  const type = useRecoilValue(searchTypeState);
  const [searchText, setSearchText] = useRecoilState(searchTextState);
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState);

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const debouncedSearchText = useDebounce(searchText, 1000);

  const fetchSearchText = async (text) => {
    // console.log(type);
    const request = await axios
      .get(requests.search.getSearch(type, text, 1, 30))
      .then((response) => {
        // console.log(response.data);
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    if (debouncedSearchText) {
      fetchSearchText(debouncedSearchText);
    }
  }, [debouncedSearchText, type]);

  return (
    <form>
      <input
        type="text"
        placeholder="검색어를 입력해주세요"
        onChange={onChange}
      />
      <button>검색</button>
    </form>
  );
}
