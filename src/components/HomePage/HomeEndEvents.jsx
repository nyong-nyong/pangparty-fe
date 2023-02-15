/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "../Search/SearchEvent";

export default function HomeEndEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(requests.events.getEvent("end"))
        .then((res) => {
          setEvents(res.data.endEvents);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="homeEventSectionContainer">
      {events ? (
        <div>
          <div className="homeEventHeader">
            <img className="checkIcon" />
            <span>D-day, 오늘 꼭 축하해주세요!</span>
          </div>
          <ul>
            {events
              ? events.map((event) => {
                  if (!event) return null;
                  return (
                    <SearchEventResult key={event.eventUid} event={event} />
                  );
                })
              : null}
          </ul>
        </div>
      ) : (
        <div className="homeEventHeader">
          <img className="checkIcon" />
          <span>
            오늘은 마감 이벤트가 없는 날이에요. <br /> 새로운 D-Day를 기대해
            주세요!
          </span>
        </div>
      )}
    </div>
  );
}
