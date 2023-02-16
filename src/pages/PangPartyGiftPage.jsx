import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import GiftIntro from "../components/Gift/GiftIntro";
import useAuth from "../hooks/useAuth";
import Recap1Page from "./PangPartyRecapPage/Recap1Page";
// import axios from "../api/axios";
// import requests from "../api/requests";

export default function PangPartyGiftPage() {
  const auth = useAuth();
  const [user, setUser] = useState("");

  const [isOpened, setIsOpened] = useState(false);

  const location = useLocation();
  const { userName, dDay } = location.state;

  const params = useParams();
  const { eventId } = params;

  useEffect(() => {
    setUser(auth.user);
    window.scrollTo(0, 0);
  }, [user]);

  // const test = () => {
  //   console.log(user);
  //   console.log(userName);
  //   console.log(dDay);
  // };

  return (
    <div>
      <GiftIntro
        userName={userName}
        dDay={dDay}
        eventId={eventId}
        isOpened={isOpened}
        setIsOpened={setIsOpened}
      />
      {/* <button type="button" onClick={test}>
        test
      </button> */}
      {isOpened ? <Recap1Page eventId={eventId} /> : null}
    </div>
  );
}
