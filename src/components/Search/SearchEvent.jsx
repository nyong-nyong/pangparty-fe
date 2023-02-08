/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "./SearchEvent.scss";
// import axios from "../../api/axios";
// import requests from "../../api/requests";

export default function SearchEventResult({ event }) {
  const onClickEvent = () => {
    const navigate = useNavigate();
    navigate("/");
    // 해당 이벤트 페이지로 이동
  };

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getDday = (date) => {
    const dDay = new Date(date);
    const today = new Date();
    return Math.floor((dDay - today) / (1000 * 60 * 60 * 24));
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
              <div className="EventTitle">{event.eventName}</div>
              <div className="EventDday">D-{getDday(event.dDay)}</div>
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
