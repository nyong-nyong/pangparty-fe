/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import classNames from "classnames";
import { useDebounce } from "../../hooks/useDebounce";
import EventLinkResults from "./EventLinkResults";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./CreateFeed.scss";
import Icon from "../common/Icon";

export default function EventLink({ eventUid, setEventUid }) {
  const searchType = "Event";
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({});

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
      .get(requests.search.getSearch("Event", text, 1, 30))
      .then((response) => {
        setSearchResults(response.data.events);
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
    <div className="eventLinkWrapper">
      {modalOpen && (
        <div className="resultsContainer">
          <div className="linkModalexit">
            <Icon img="exit" onClick={clearText} />
          </div>
          <EventLinkResults
            setClickedEvent={setClickedEvent}
            searchResults={searchResults}
            setModalOpen={setModalOpen}
          />
        </div>
      )}
      <div className="linkContainer">
        <Icon img="link" />
        {clickedEvent.uid ? (
          <div>{clickedEvent.eventName}</div>
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
