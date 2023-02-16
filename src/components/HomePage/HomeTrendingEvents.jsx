/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "../Search/SearchEvent";

export default function HomeTrendingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(requests.events.getEvent("trending"))
        .then((res) => {
          setEvents(res.data.trendingEvents);
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
          {" "}
          <div className="homeEventHeader">
            <img className="checkIcon" />
            <span>인기이벤트를 소개합니다!</span>
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
          </ul>{" "}
        </div>
      ) : (
        <div className="homeEventHeader">
          <img className="checkIcon" />
          <span>아직 생성된 이벤트가 없어요. 이벤트를 만들어볼까요?</span>
        </div>
      )}
    </div>
  );
}
