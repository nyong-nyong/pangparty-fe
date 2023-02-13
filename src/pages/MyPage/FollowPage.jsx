/* eslint-disable */

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
  const followsInfo = {
    followingCount: location.state.followingCount,
    followerCount: location.state.followerCount,
  };

  const tabHandler = (e) => {
    const newTab = {
      followingTab: false,
      followerTab: false,
    };
    const newTarget = e.target.id;
    console.log(e.target.value);
    newTab[newTarget] = true;
    setTabState(newTab);
    console.log(tabState);
  };

  return (
    <div>
      <header className="header">
        <button
          type="button"
          id="followerTab"
          className="followTab"
          onClick={tabHandler}
        >
          <span
            className="headerFollowText"
            id="followerTab"
            onClick={tabHandler}
          >
            팔로워
          </span>
          <span className="headerFollowNum">{followsInfo.followerCount}명</span>
          {tabState.followerTab ? (
            <p className="underline"> </p>
          ) : (
            <p className="Nounderline"> </p>
          )}
        </button>
        <button
          type="button"
          id="followingTab"
          className="followTab"
          onClick={tabHandler}
        >
          <span
            className="headerFollowText"
            id="followingTab"
            onClick={tabHandler}
          >
            팔로잉
          </span>
          <span className="headerFollowNum">
            {followsInfo.followingCount}명
          </span>
          {tabState.followingTab ? (
            <p className="underline"> </p>
          ) : (
            <p className="Nounderline"> </p>
          )}
        </button>
      </header>
      {tabState.followerTab ? <Follower /> : null}
      {tabState.followingTab ? <Following /> : null}
    </div>
  );
}
