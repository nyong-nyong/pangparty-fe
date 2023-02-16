import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function InvolvingEvent({ id }) {
  const [involvingEventInfo, setInvolvingEventInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (!user || !id) return;
      await axios
        .get(requests.profile.getProfileInvolvingEvents(`${id}`))
        .then((res) => {
          setInvolvingEventInfo(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [user, id]);

  return (
    <div>
      {involvingEventInfo && (
        <p>
          @{id}님이 참여중인 이벤트는 총 {involvingEventInfo.totalCnt}건 이에요
        </p>
      )}
      {involvingEventInfo &&
        involvingEventInfo.involvingEvents.map((event) => {
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
