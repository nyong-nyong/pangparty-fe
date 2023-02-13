import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import pangImg from "../../assets/recap1.png";

export default function ReceicedEvent(props) {
  const { userName } = props;
  const [recievedEventInfo, setRecievedEventInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.profile.getProfileRecievedEvents(`${user}`)
      );
      setRecievedEventInfo(request.data);
    }
    fetchData();
  }, [user]);

  return (
    <div>
      <p className="recievedCnt">
        총 {recievedEventInfo ? recievedEventInfo.totalCnt : 0}건의 받은
        이벤트가 있어요
      </p>
      {recievedEventInfo &&
        recievedEventInfo.receivedEvents.map((event) => {
          if (event) {
            return (
              <div key={event.eventUid} className="eventCardContainer">
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
                    <p className="eventdDay">디데이:{event.dday}</p>
                  </div>
                </Link>
                <button type="button" className="pangBtn">
                  <Link
                    to={`/gift/${event.eventUid}`}
                    state={{ userName, dDay: event.dday }}
                  >
                    <img src={pangImg} className="pangImg" alt="" />
                  </Link>
                </button>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
