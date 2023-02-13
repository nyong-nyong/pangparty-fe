/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import _ from "lodash";
import {
  searchHistoryState,
  searchHistoryIdState,
} from "../../recoils/search/Atoms";
import "./SearchEvent.scss";

// import axios from "../../api/axios";
// import requests from "../../api/requests";

export default function SearchEventResult({ event }) {
  const navigate = useNavigate();
  const [canRender, setCanRender] = useState(false);
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);
  const [searchHistoryId, setSearchHistoryId] =
    useRecoilState(searchHistoryIdState);

  const onClickEvent = () => {
    navigate(`/events/${event.eventUid}`);
    const newSearchHistory = _.cloneDeep(searchHistory);
    // console.log(newSearchHistory);
    if (searchHistory.length === 10) {
      newSearchHistory.pop();
    }
    newSearchHistory.unshift();
    setSearchHistoryId(searchHistoryId + 1);
    newSearchHistory.push({ type: "event", id: searchHistoryId + 1, ...event });
    setSearchHistory(newSearchHistory);

    // 해당 이벤트 페이지로 이동
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getDday = (date) => {
    const dDay = new Date(date);
    const today = new Date();
    const answer = Math.floor((dDay - today) / (1000 * 60 * 60 * 24));
    if (answer >= 0) return `D-${answer}`;
    return "완료";
  };

  return (
    <li>
      {canRender ? (
        <div className={classNames("SearchEvent")}>
          <div onClick={onClickEvent}>
            <img src={event.imgUrl} className="EventThumbnail" />
          </div>
          <div onClick={onClickEvent} className="EventContents">
            <div className="EventHeader">
              {event.eventName && (
                <div className="EventTitle">{event.eventName}</div>
              )}
              {event.dday ? (
                <div className="EventDday">{getDday(event.dday)}</div>
              ) : null}
            </div>
            <div className="EventTag">@{event.targetId}</div>
            <div className="EventDate">{event.dDay}</div>
            <br />
          </div>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}
