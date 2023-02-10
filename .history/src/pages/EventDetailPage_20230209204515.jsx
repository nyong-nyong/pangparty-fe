/* eslint-disable */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/EventDetailPage.scss";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";
import Button from "../components/common/Button";

import IntroHeader from "../components/CreateEvent/IntroHeader";

export default function EventDetailPage() {
  const [eventInfo, setEventInfo] = useState(undefined);

  const params = useParams();

  useEffect(() => {
    const id = params.eventId;
    async function fetchData() {
      const request = await axios.get(
        requests.events.introEvent.eventItroAll(id)
      );
      setEventInfo(request.data);
    }
    fetchData();
  }, []);

  return (
    <div className="detailContainer">
      <IntroHeader eventInfo={eventInfo} params={params} />
      {/* <div className="rPinfoBox">
        <p className="rpTitle">롤링페이퍼</p>
        <hr style={{ width: "80%", color: "#CFCFCF" }} />
        <p className="rpContent">
          현재{" "}
          <span style={{ color: "#678cff" }}>
            {/* {eventInfo && eventInfo.rollingPaperParticipantCnt} */}
          </span>
          명이{" "}
          <span style={{ color: "#FF7A5C" }}>
            {eventInfo && eventInfo.targetId}님{" "}
          </span>
          에게
          <br />
          롤링페이퍼를 작성했어요!
        </p>
      </div> */}
      <Intro
      {/* <div className="hashtagContainer">
        <p className="hashtag">#해시태그</p>
        {eventInfo &&
          eventInfo.hashtags.map((hashtag) => {
            if (hashtag) {
              return (
                <div key={hashtag.name}>
                  <p className="hashtag">{hashtag.name}</p>
                </div>
              );
            }
          })}
      </div> */}
      <p className="albumTitle">@{eventInfo && eventInfo.targetId} 과의 추억</p>
      <PhotoAlbum />
      <Button
      // onClick={participateHandler}
      >
        참여하기
      </Button>
    </div>
  );
}
