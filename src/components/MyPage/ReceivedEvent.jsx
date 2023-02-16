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

  // 지난 이벤트를 확인하기 위한 당일 날짜 조회
  const originToday = new Date();
  const fullyear = originToday.getFullYear().toString();
  const month = (originToday.getMonth() + 1).toString();
  const date = originToday.getDate().toString();
  const testCount =
    parseInt(fullyear, 10) * 365 +
    parseInt(month, 10) * 30 +
    parseInt(date, 10);

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
              <div key={event.eventUid} className="eventCardContainerBorder">
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
                {parseInt(event.dday.substr(0, 4), 10) * 365 +
                  parseInt(event.dday.slice(5, -1), 10) * 30 +
                  parseInt(event.dday.substr(8, 9), 10) <=
                testCount ? (
                  <button type="button" className="pangBtn">
                    <Link
                      to={`/gift/${event.eventUid}`}
                      state={{ userName, dDay: event.dday }}
                    >
                      <img src={pangImg} className="pangImg" alt="" />
                    </Link>
                  </button>
                ) : null}
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
