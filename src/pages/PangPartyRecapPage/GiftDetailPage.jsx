import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "../../styles/EventDetailPage.scss";
import GiftRpList from "../../components/Gift/GiftRpList";
import PhotoAlbum from "../../components/PhotoAlbum/PhotoAlbum";
import IntroHeader from "../../components/CreateEvent/IntroHeader";
import IntroHashTag from "../../components/CreateEvent/IntroHashTag";
import useAuth from "../../hooks/useAuth";

export default function GiftDetailPage() {
  const [eventInfo, setEventInfo] = useState(undefined);
  const [isPart, setIsPart] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState("");

  const params = useParams();

  useEffect(() => {
    const id = params.eventId;
    async function fetchData() {
      const request = await axios.get(
        requests.events.introEvent.eventIntroAll(id)
      );
      // console.log(request.data);
      setEventInfo(request.data);
      setIsPart(request.data.isParticipant);
      // console.log(request.data.isParticipant);
    }
    setUser(auth.user);
    // console.log(user);
    fetchData();
    // const rpUid = response.data.rollingPaperUid;
    console.log(eventInfo);
    console.log(params);
  }, [user]);

  return (
    <div className="detailContainer">
      <IntroHeader eventInfo={eventInfo} params={params} />
      <GiftRpList eventInfo={eventInfo} params={params} />
      <IntroHashTag eventInfo={eventInfo} />
      <p className="albumTitle">@{eventInfo && eventInfo.targetId} 과의 추억</p>
      <PhotoAlbum isPart={isPart} eventUid={params.eventId} />
    </div>
  );
}
