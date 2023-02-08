import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function HostEvent() {
  const [hostEventInfo, setHostEventInfo] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.profile.getProfileHostEvents("dasom02")
      );
      setHostEventInfo(request.data);
    }
    fetchData();
  }, []);

  const getDetail = (params, e) => {
    console.log(params);
    console.log(e);
  };

  return (
    <div>
      {hostEventInfo && (
        <p>내가 주최한 이벤트는 총 {hostEventInfo.totalCnt}건 이에요</p>
      )}
      {hostEventInfo &&
        hostEventInfo.hostEvents.map((event) => {
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
                  <button
                    style={{ height: "20px", zIndex: "100000" }}
                    type="button"
                    onClick={(e) => {
                      getDetail(event.uid, e);
                    }}
                  >
                    <Link to={`/events/${event.uid}`}>
                      상세 페이지 조회해보기
                    </Link>
                  </button>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
