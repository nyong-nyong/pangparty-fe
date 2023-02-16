import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function InvolvedEvent({ id }) {
  const [involvedEventInfo, setInvolvedEventInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user || !id) return;
      await axios
        .get(requests.profile.getProfileInvolvedEvents(`${id}`))
        .then((res) => {
          setInvolvedEventInfo(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [user, id]);

  return (
    <div>
      {involvedEventInfo && (
        <p>
          @{id}님이 참여한 이벤트는 총 {involvedEventInfo.totalCnt}건 이에요
        </p>
      )}
      {involvedEventInfo &&
        involvedEventInfo.involvedEvents.map((event) => {
          if (event) {
            return (
              <div className="eventCardContainerBorder" key={event.eventUid}>
                <Link
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
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
