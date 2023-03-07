import { useState, useEffect } from "react";
import ProfileTop from "../components/MyPage/ProfileTop";
import ProfileBottom from "../components/MyPage/ProfileBottom";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/MyPage.scss";
import useAuth from "../hooks/useAuth";
// import useUserAction from "../hooks/useUserAction";

export default function MyPage() {
  const [profileInfo, setProfileInfo] = useState(undefined);

  // const userID = useRecoilValue(userState);
  const auth = useAuth();
  const [user, setUser] = useState("");
  // const userAction = useUserAction();
  // const logOut = (e) => {
  //   e.preventDefault();
  //   userAction.logOut();
  // };

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      await axios
        .get(requests.profile.getProfileTop(`${user}`))
        .then((res) => {
          setProfileInfo(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [user]);

  return (
    <div className="MyPage">
      {/* 프로필 상단 */}
      <ProfileTop profileInfo={profileInfo} user={user} />
      {/* 하위 컴포넌트 */}
      <ProfileBottom profileInfo={profileInfo} />
    </div>
  );
}
