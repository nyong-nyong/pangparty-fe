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
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [clickedEvent, setClickedEvent] = useState({});

  const onChange = (e) => {
    setSearchText(e.target.value);
    setModalOpen(true);
  };

  const debouncedSearchText = useDebounce(searchText, 1000);

  const fetchSearchText = async (text) => {
    await axios
      .get(requests.search.getSearch("event", text, 0, 30))
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

  const clearText = (e) => {
    e.preventDefault();
    setSearchText("");
    setModalOpen(false);
    setClickedEvent({});
  };

  return (
    <div className="eventLinkWrapper">
      {modalOpen && (
        <div className="resultsContainer">
          <div className="linkModalexit" />
          <EventLinkResults
            setClickedEvent={setClickedEvent}
            searchResults={searchResults}
            setModalOpen={setModalOpen}
          />
        </div>
      )}
      <div className="linkContainer">
        <Icon img="link" />
        {clickedEvent.eventUid ? (
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
        <Icon img="clear" onClick={clearText} />
      </div>
    </div>
  );
}
