import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function ReceicedEvent() {
  const [recievedEventInfo, setRecievedEventInfo] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.profile.getProfileRecievedEvents("dasom02")
      );
      setRecievedEventInfo(request.data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <p className="recievedCnt">
        총 {recievedEventInfo && recievedEventInfo.totalCnt}건의 받은 이벤트가
        있어요
      </p>
      {recievedEventInfo &&
        recievedEventInfo.receivedEvents.map((event) => {
          if (event) {
            return (
              <div key={event.uid} className="eventCardContainer">
                <div className="">
                  <img className="eventCardImg" src={event.imgUrl} alt="" />
                </div>
                <div className="eventCardRightBox">
                  <p className="eventContent">{event.eventName}</p>
                  <p className="eventwriter">@{event.targetId}</p>
                  <p className="eventdDay">디데이:{event.dDay}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
