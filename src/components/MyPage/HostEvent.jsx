import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function HostEvent({ id }) {
  const [hostEventInfo, setHostEventInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (!user || !id) return;
      await axios
        .get(requests.profile.getProfileHostEvents(`${id}`))
        .then((res) => {
          setHostEventInfo(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [user, id]);

  return (
    <div>
      {hostEventInfo && (
        <p>
          @{id}님이 주최한 이벤트는 총 {hostEventInfo.totalCnt}건 이에요
        </p>
      )}
      {hostEventInfo &&
        hostEventInfo.hostEvents.map((event) => {
          if (event) {
            return (
              <Link
                key={event.eventUid}
                to={`/events/${event.eventUid}`}
                className="eventCardContainer"
              >
                <div className="eventCardImgContainer">
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
