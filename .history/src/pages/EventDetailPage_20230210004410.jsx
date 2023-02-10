/* eslint-disable */
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/EventDetailPage.scss";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";
import Button from "../components/common/Button";
import IntroHeader from "../components/CreateEvent/IntroHeader";
import IntroRpHeader from "../components/CreateEvent/IntroRpHeader";
import IntroHashTag from "../components/CreateEvent/IntroHashTag";
import RpCreateButton from "../components/CreateEvent/RpCreateButton";
import styled from "styled-components";

export default function EventDetailPage() {
  const [eventInfo, setEventInfo] = useState(undefined);
  const [isPart, setIsPart] = useState(false);

  const params = useParams();

  useEffect(() => {
    const id = params.eventId;
    async function fetchData() {
      const request = await axios.get(
        requests.events.introEvent.eventItroAll(id)
      );
      setEventInfo(request.data);
      setIsPart(request.data.isParticipant);
      // console.log(request.data.isParticipant);
    }
    fetchData();
  }, []);

  const participateHandler = () => {
    
  };

  return (
    <div className="detailContainer">
      <IntroHeader eventInfo={eventInfo} params={params} />
      <RpCreateContainer>
        <IntroRpHeader eventInfo={eventInfo} />
        <RpButtonContainer>
          <Link to="/piece">
            <RpCreateButton />
          </Link>
        </RpButtonContainer>
      </RpCreateContainer>
      <IntroHashTag eventInfo={eventInfo} />
      <p className="albumTitle">@{eventInfo && eventInfo.targetId} 과의 추억</p>
      <PhotoAlbum />
      <Button onClick={participateHandler}>참여하기</Button>
    </div>
  );
}

const RpCreateContainer = styled.div`
  position: relative;
`;

const RpButtonContainer = styled.div`
  width: "50px";
  height: "50px";

  position: absolute;
  top: 85%;
  left: 84%;
`;
