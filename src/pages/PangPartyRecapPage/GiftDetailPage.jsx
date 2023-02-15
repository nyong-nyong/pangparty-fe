import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JSConfetti from "js-confetti";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "../../styles/EventDetailPage.scss";
// import GiftRpList from "../../components/Gift/GiftRpList";
// import PhotoAlbum from "../../components/PhotoAlbum/PhotoAlbum";
import IntroHeader from "../../components/CreateEvent/IntroHeader";
import IntroHashTag from "../../components/CreateEvent/IntroHashTag";
import useAuth from "../../hooks/useAuth";

export default function GiftDetailPage() {
  const [eventInfo, setEventInfo] = useState(undefined);
  // const [isPart, setIsPart] = useState(false);
  const auth = useAuth();
  const [user, setUser] = useState("");

  const params = useParams();

  useEffect(() => {
    setUser(auth.user);
    const id = params.eventId;

    async function fetchData() {
      await axios
        .get(requests.events.getPangExportAll(id))
        .then((res) => {
          setEventInfo(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [user]);

  const jsConfetti = new JSConfetti();

  const confettiPang = () => {
    jsConfetti.addConfetti({
      confettiColors: [
        "#ff0a54",
        "#ff477e",
        "#ff7096",
        "#ff85a1",
        "#fbb1bd",
        "#f9bec7",
      ],
      // emojis: ["💖", "✨", "🥳", "🎊", "🍰", "🦋"],
      confettiRadius: 5,
      confettiNumber: 100,
    });
  };

  return (
    <div className="detailContainer" onTouchStart={confettiPang}>
      <p>test</p>
      {eventInfo ? <p>받았다</p> : <p>no</p>}
      <IntroHeader eventInfo={eventInfo.eventIntroduce} params={params} />
      {/* <GiftRpList eventInfo={eventInfo} params={params} /> */}
      <IntroHashTag eventInfo={eventInfo.eventIntroduce} />
      <p className="albumTitle">
        @{eventInfo && eventInfo.eventIntroduce.targetId} 과의 추억
      </p>
      {/* <PhotoAlbum isPart={isPart} eventUid={params.eventId} /> */}
    </div>
  );
}
