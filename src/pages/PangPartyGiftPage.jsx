import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import GiftIntro from "../components/Gift/GiftIntro";
import useAuth from "../hooks/useAuth";
// import axios from "../api/axios";
// import requests from "../api/requests";

export default function PangPartyGiftPage() {
  const auth = useAuth();
  const [user, setUser] = useState("");

  const location = useLocation();
  const { userName, dDay } = location.state;

  const params = useParams();
  const { eventId } = params;

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  // const test = () => {
  //   console.log(user);
  //   console.log(userName);
  //   console.log(dDay);
  // };

  return (
    <div>
      <GiftIntro userName={userName} dDay={dDay} eventId={eventId} />
      {/* <button type="button" onClick={test}>
        test
      </button> */}
    </div>
  );
}
