import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import { userState } from "../recoils/user/Atoms";
import Feed from "../components/MyPage/Feed";
import ReceicedEvent from "../components/MyPage/ReceivedEvent";
import Badges from "../components/MyPage/Badges";
import EventCalander from "../components/MyPage/EventCalander";
import axios from "../api/axios";
import requests from "../api/requests";
import "../styles/MyPage.scss";
import useAuth from "../hooks/useAuth";

export default function MyPage() {
  const [profileInfo, setProfileInfo] = useState(undefined);
  const [isActivate, setIsActivate] = useState({
    Feed: true,
    ReceicedEvent: false,
    Badges: false,
    EventCalander: false,
  });

  // const userID = useRecoilValue(userState);
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.profile.getProfileTop(`${user}`)
        // requests.profile.getProfileTop("pang3333")
      );
      console.log(request.data);
      setProfileInfo(request.data);
    }
    fetchData();
  }, [user]);

  const activateHandler = (e) => {
    const newActivation = {
      Feed: false,
      ReceicedEvent: false,
      Badges: false,
      EventCalander: false,
    };
    const newTarget = e.target.id;
    newActivation[newTarget] = true;
    setIsActivate(newActivation);
  };

  return (
    <div className="MyPage">
      {/* 프로필 상단 */}
      <div>
        <div className="profileContainer">
          <div className="imgBox">
            <img
              className="profileImg"
              src={`${profileInfo && profileInfo.imgUrl}`}
              alt="profileimg"
              style={{ width: "150px" }}
            />
          </div>
          <div className="profileBox">
            <p className="userId">{profileInfo && profileInfo.memberId}</p>
            <p className="username">{profileInfo && profileInfo.name}</p>
            <p className="userintro">
              {profileInfo && profileInfo.introduction}
            </p>
            <div className="followContainer">
              {/* 추후 profileInfo 수정 예정 */}
              <Link
                to="/follows"
                state={{ following: false, follower: true }}
                style={{ textDecoration: "none" }}
              >
                <div className="followBox">
                  <p className="followText">팔로워</p>
                  <p className="followNum">
                    {profileInfo && profileInfo.followerCnt}
                  </p>
                </div>
              </Link>
              <Link
                to="/follows"
                state={{ following: true, follower: false }}
                style={{ textDecoration: "none" }}
              >
                <div className="followBox">
                  <p className="followText">팔로잉</p>
                  <p className="followNum">
                    {profileInfo && profileInfo.followingCnt}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <button className="profileEditButton" type="button">
          프로필 수정
        </button>
        <div className="eventInfoContainers">
          <button type="button" className="eventBox">
            <Link
              to="/myevents"
              state={{ host: true, involving: false, involved: false }}
            >
              <p className="eventBoxText">
                주최한 <br /> 이벤트
              </p>
              <p className="eventBoxNum">
                {profileInfo && profileInfo.hostEventCnt}
              </p>
            </Link>
          </button>
          <button type="button" className="eventBox">
            <Link
              to="/myevents"
              state={{ host: false, involving: true, involved: false }}
            >
              <p className="eventBoxText">
                참여중인 <br /> 이벤트
              </p>
              <p className="eventBoxNum">
                {profileInfo && profileInfo.involvingEventCnt}
              </p>
            </Link>
          </button>
          <button type="button" className="eventBox">
            <Link
              to="/myevents"
              state={{ host: false, involving: false, involved: true }}
            >
              <p className="eventBoxText">
                참여한 <br /> 이벤트
              </p>
              <p className="eventBoxNum">
                {profileInfo && profileInfo.involvedEventCnt}
              </p>
            </Link>
          </button>
        </div>
      </div>
      {/* 하위 컴포넌트 */}
      <div className="ComponentsChooser">
        <button
          type="button"
          id="Feed"
          className={isActivate.Feed ? "componentBoxActive" : "componentBox"}
          onClick={activateHandler}
        >
          피드
        </button>
        <button
          type="button"
          id="ReceicedEvent"
          className={
            isActivate.ReceicedEvent ? "componentBoxActive" : "componentBox"
          }
          onClick={activateHandler}
        >
          받은 이벤트
        </button>
        <button
          type="button"
          id="Badges"
          className={isActivate.Badges ? "componentBoxActive" : "componentBox"}
          onClick={activateHandler}
        >
          뱃지
        </button>
        <button
          type="button"
          id="EventCalander"
          className={
            isActivate.EventCalander ? "componentBoxActive" : "componentBox"
          }
          onClick={activateHandler}
        >
          이벤트 달력
        </button>
      </div>
      <div>
        {isActivate.Feed && <Feed />}
        {isActivate.ReceicedEvent && <ReceicedEvent />}
        {isActivate.Badges && <Badges />}
        {isActivate.EventCalander && <EventCalander />}
      </div>
    </div>
  );
}
