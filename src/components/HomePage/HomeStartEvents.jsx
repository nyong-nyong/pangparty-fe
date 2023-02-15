/* eslint-disable jsx-a11y/alt-text */
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "../Search/SearchEvent";

export default function HomeStartEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(requests.events.getEvent("start"))
        .then((res) => {
          setEvents(res.data.startEvents);
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
            <span>오늘 생성된 이벤트, 같이 축하해요!</span>
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
