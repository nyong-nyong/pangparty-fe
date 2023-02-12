import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function InvolvedEvent() {
  const [involvedEventInfo, setInvolvedEventInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.profile.getProfileInvolvedEvents(`${user}`)
      );
      setInvolvedEventInfo(request.data);
    }
    fetchData();
  }, [user]);

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
                key={event.eventUid}
                to={`/events/${event.eventUid}`}
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
