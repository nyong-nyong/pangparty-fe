import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import FriendFeed from "./FriendFeed";
import ReceicedEvent from "../MyPage/ReceivedEvent";
import Badges from "../MyPage/Badges";
import Button from "../common/Button";

export default function FriendProfile(props) {
  const [profileInfo, setProfileInfo] = useState(undefined);
  const [isFollowing, setIsFollowing] = useState("");
  const [isActivate, setIsActivate] = useState({
    Feed: true,
    ReceicedEvent: false,
    Badges: false,
    EventCalander: false,
  });
  const friendId = props.memberId;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.profile.getProfileTop(`${friendId}`)
      );
      setProfileInfo(request.data);
      setIsFollowing(request.data.following);
    }
    fetchData();
  }, []);

  const activateHandler = (e) => {
    const newActivation = {
      Feed: false,
      ReceicedEvent: false,
      Badges: false,
    };
    const newTarget = e.target.id;
    newActivation[newTarget] = true;
    console.log(profileInfo);
    setIsActivate(newActivation);
  };

  const postFollow = async () => {
    const followeeId = profileInfo.id;

    if (profileInfo.following === true) {
      setIsFollowing(false);
      await axios.delete(requests.following.delFollowing(followeeId), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      setIsFollowing(true);
      await axios.post(requests.following.postFollowing(followeeId), {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    // 반영 위한 새로고침
    window.location.reload();
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
            <p className="userId">{profileInfo && profileInfo.id}</p>
            <p className="username">{profileInfo && profileInfo.name}</p>
            <p className="userintro">
              {profileInfo && profileInfo.introduction}
            </p>
            <div className="followContainer">
              {/* 추후 profileInfo 수정 예정 */}
              <Link
                to="/follows"
                state={
                  profileInfo
                    ? {
                        following: false,
                        follower: true,
                        followingCount: profileInfo.followingCount,
                        followerCount: profileInfo.followerCount,
                      }
                    : {
                        following: false,
                        follower: true,
                        followingCount: 0,
                        followerCount: 0,
                      }
                }
                style={{ textDecoration: "none" }}
              >
                <div className="followBox">
                  <p className="followText">팔로워</p>
                  <p className="followNum">
                    {profileInfo ? profileInfo.followerCount : 0}
                  </p>
                </div>
              </Link>
              <Link
                to="/follows"
                state={
                  profileInfo
                    ? {
                        following: true,
                        follower: false,
                        followingCount: profileInfo.followingCount,
                        followerCount: profileInfo.followerCount,
                      }
                    : {
                        following: true,
                        follower: false,
                        followingCount: 0,
                        followerCount: 0,
                      }
                }
                style={{ textDecoration: "none" }}
              >
                <div className="followBox">
                  <p className="followText">팔로잉</p>
                  <p className="followNum">
                    {profileInfo ? profileInfo.followingCount : 0}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Button
          size="small"
          color={isFollowing ? "gray-4" : "orange-1"}
          onClick={postFollow}
        >
          Follow
        </Button>
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
                {profileInfo && profileInfo.hostEventCount}
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
                {profileInfo && profileInfo.involvingEventCount}
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
                {profileInfo && profileInfo.involvedEventCount}
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
      </div>
      <div>
        {isActivate.Feed && <FriendFeed friendId={friendId} />}
        {isActivate.ReceicedEvent && <ReceicedEvent />}
        {isActivate.Badges && <Badges />}
      </div>
    </div>
  );
}
