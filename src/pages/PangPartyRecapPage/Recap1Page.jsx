// import "./Recap.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import RecapCarousel from "../../components/Recap/RecapCarousel";
import { userState } from "../../recoils/user/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import "../../styles/Recap.scss";

export default function Recap1Page() {
  const [eventInfo, setEventInfo] = useState({
    eventExports: [
      {
        eventLikeCnt: 0,
        rollingPaperParticipantCnt: 0,
        rollingPaperCnt: 0,
        albumMediaCnt: 0,
      },
    ],
  });
  const userID = useRecoilValue(userState);
  const auth = useAuth();
  const [user, setUser] = useState("");

  const params = useParams();
  const eventUid = params.eventId;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.events.getPangExport(eventUid));
      setEventInfo(undefined);
      setEventInfo(request.data);
      // console.log(request.data);
    }
    setUser(auth.user);
    fetchData();
  }, [user]);

  return (
    <div>
      <div className="recapTop">
        <p className="recapTitleDday">23/02/14</p>
        <p className="recapTitleMent">
          {userID}님 <br /> 축하드립니다
        </p>
      </div>
      <RecapCarousel eventInfo={eventInfo} eventUid={eventUid} />
    </div>
  );
}
