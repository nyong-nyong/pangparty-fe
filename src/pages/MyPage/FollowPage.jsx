import { useState } from "react";
import { useLocation } from "react-router-dom";
import Following from "../../components/MyPage/Following";
import Follower from "../../components/MyPage/Follower";
import "../../components/MyPage/Follow.scss";

export default function FollowPage() {
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
      {tabState.followerTab ? <Follower /> : null}
      {tabState.followingTab ? <Following /> : null}
    </div>
  );
}
