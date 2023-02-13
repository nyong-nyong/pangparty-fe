/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useDebounce } from "../../hooks/useDebounce";
import MemberSearchResults from "./MemberSearchResults";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import "./Feed.scss";
import Icon from "../../components/common/Icon";

export default function EventLink() {
  const searchType = "Member";
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedMember, setClickedMember] = useState({});

  const onChange = (e) => {
    setSearchText(e.target.value);
    setModalOpen(true);
  };

  const modalClose = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  const debouncedSearchText = useDebounce(searchText, 1000);

  const fetchSearchText = async (text) => {
    const request = await axios
      .get(requests.search.getSearch("member", text, 0, 30))
      .then((response) => {
        setSearchResults(response.data.members);
      })
      .catch((error) => {
        console.err(error);
      });
  };

  useEffect(() => {
    if (debouncedSearchText) {
      fetchSearchText(debouncedSearchText);
    }
  }, [debouncedSearchText]);

  const clearText = () => {
    setSearchText("");
    setModalOpen(false);
  };

  return (
    <div>
      {modalOpen && (
        <div className="resultsContainer">
          <MemberSearchResults
            setClickedMember={setClickedMember}
            searchResults={searchResults}
            setModalOpen={setModalOpen}
          />
          <button onClick={clearText}>X</button>
        </div>
      )}
      <div className="linkContainer">
        <Icon img="link" />
        {clickedMember.id ? (
          <div>{clickedMember.id}</div>
        ) : (
          <input
            type="text"
            placeholder="검색어를 입력해주세요"
            className="EventSearchBar"
            onChange={onChange}
            maxLength="19"
            value={searchText || ""}
          />
        )}
      </div>
    </div>
  );
}
