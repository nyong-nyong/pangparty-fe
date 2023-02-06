import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "../../components/MyPage/Follow.css";

export default function FollowPage() {
  const memberId = "pang";
  const page = 1;
  const limit = 30;
  const [followingInfo, setFollowingInfos] = useState(undefined);

  // MyPage에서 클릭한 지점 저장
  const location = useLocation();
  const [tabState, setTabState] = useState({
    followingTab: location.state.following,
    followerTab: location.state.follower,
  });

  const tabHandler = (e) => {
    const newTab = {
      followingTab: false,
      followerTab: false,
    };
    const newTarget = e.target.id;
    newTab[newTarget] = true;
    setTabState(newTab);
  };

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.following.getFollowing(memberId, page, limit)
      );
      setFollowingInfos(request.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <header className="header">
        <button type="button" id="followerTab" onClick={tabHandler}>
          팔로워
        </button>
        <button type="button" id="followingTab" onClick={tabHandler}>
          팔로잉
        </button>
      </header>
      {tabState.followingTab ? <p>팔로잉</p> : <p>없읍</p>}
      {tabState.followerTab ? <p>팔로워</p> : <p>없읍</p>}
      {followingInfo &&
        followingInfo.following.map((infos) => {
          if (infos) {
            return (
              <div key={infos.id}>
                <p>{infos.name}</p>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
