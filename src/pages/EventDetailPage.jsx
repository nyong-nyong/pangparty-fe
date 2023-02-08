import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/EventDetailPage.scss";

export default function EventDetailPage() {
  const [eventInfo, setEventInfo] = useState(undefined);

  const params = useParams();

  useEffect(() => {
    const id = params.eventId;
    async function fetchData() {
      const request = await axios.get(requests.events.getEventDetail(id));
      setEventInfo(request.data);
    }
    fetchData();
  }, []);

  return (
    <div className="detailContainer">
      <div className="dDayInfoBox">
        <div className="dDayBox">D-day</div>
        <p className="dDayDate">{eventInfo && eventInfo.dDay}</p>
      </div>
      <header className="header">{eventInfo && eventInfo.eventName}</header>
      <div className="banner">
        <div className="bannerContentBox">
          <p className="bannerContent">{eventInfo && eventInfo.introduction}</p>
        </div>
      </div>
      <div className="rPinfoBox">
        <p className="rpTitle">롤링페이퍼</p>
        <hr style={{ width: "80%", color: "#CFCFCF" }} />
        <p className="rpContent">
          현재 {eventInfo && eventInfo.rollingPaperParticipantCnt}명이{" "}
          {eventInfo && eventInfo.targetId}님 에게
          <br />
          롤링페이퍼를 작성했어요!
        </p>
      </div>
      <p>{eventInfo && eventInfo.likeCnt}</p>
      <p>좋아요여부:{eventInfo && eventInfo.isLiked}</p>
      {eventInfo &&
        eventInfo.hashtags.map((hashtag) => {
          if (hashtag) {
            return (
              <div key={hashtag.name} className="hashtagBox">
                <p>{hashtag.name}</p>
              </div>
            );
          }
          return null;
        })}
      {eventInfo &&
        eventInfo.eventMedias.map((eventMedia) => {
          if (eventMedia) {
            return (
              <div className="albumImgBox" key={eventMedia.uid}>
                <img src={eventMedia.mediaUrl} className="albumImg" alt="" />
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
