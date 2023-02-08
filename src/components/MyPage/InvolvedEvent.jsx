import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function InvolvedEvent() {
  const [involvedEventInfo, setInvolvedEventInfo] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.profile.getProfileInvolvedEvents("dasom02")
      );
      setInvolvedEventInfo(request.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      {involvedEventInfo && (
        <p>내가 참여중인 이벤트는 총 {involvedEventInfo.totalCnt}건 이에요</p>
      )}
      {involvedEventInfo &&
        involvedEventInfo.involvedEvents.map((event) => {
          if (event) {
            return (
              <Link
                key={event.uid}
                to={`/events/${event.uid}`}
                className="eventCardContainer"
              >
                <div className="">
                  <img className="eventCardImg" src={event.imgUrl} alt="" />
                </div>
                <div className="eventCardRightBox">
                  <p className="eventContent">{event.eventName}</p>
                  <p className="eventwriter">@{event.targetId}</p>
                  <p className="eventdDay">디데이:{event.dDay}</p>
                </div>
              </Link>
            );
          }
          return null;
        })}
    </div>
  );
}
