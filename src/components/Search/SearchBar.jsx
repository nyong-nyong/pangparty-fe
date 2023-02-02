import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchTextState, searchResultsState, searchTypeState } from 'recoils/search/Atoms'
import { useDebounce } from 'hooks/useDebounce'
import { useEffect } from 'react'
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function SearchBar() {
  const type = useRecoilValue(searchTypeState)
  const [searchText, setSearchText] = useRecoilState(searchTextState)
  const [searchResults, setSearchResults] = useRecoilState(searchResultsState)

  const onChange = (e) => {
    setSearchText(e.target.value);
  }

  const debouncedSearchText = useDebounce(searchText, 1000);

  useEffect(() => {
    if(debouncedSearchText) {
      fetchSearchText(debouncedSearchText)
    }
  }, [debouncedSearchText, type])

  const fetchSearchText = async (debouncedSearchText) => {
    console.log(type)
    const request = await axios.get(
      requests.search.getSearch(type, debouncedSearchText, 1, 30)
    )
    .then((response) => {
      console.log(response.data);
      setSearchResults(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return (
    <form>
      <input type="text" placeholder="검색어를 입력해주세요" onChange={onChange}/>
      <button>검색</button>
    </form>
  )
}
