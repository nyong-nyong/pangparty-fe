import { Link } from "react-router-dom";

export default function ProfileTop({ profileInfo, user }) {
  return (
    <div>
      <div className="profileContainer">
        <div className="profileimgBox">
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
          <p className="userintro">{profileInfo && profileInfo.introduction}</p>
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
                      userInfo: user,
                    }
                  : {
                      following: false,
                      follower: true,
                      followingCount: 0,
                      followerCount: 0,
                      userInfo: "",
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
                      userInfo: user,
                    }
                  : {
                      following: true,
                      follower: false,
                      followingCount: 0,
                      followerCount: 0,
                      userInfo: "",
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
      <Link
        to={`/mypage/${profileInfo && profileInfo.id}/update`}
        state={
          profileInfo
            ? {
                id: profileInfo.id,
                name: profileInfo.name,
                imgUrl: profileInfo.imgUrl,
                introduction: profileInfo.introduction,
              }
            : {
                id: "",
                name: "",
                imgUrl: "",
                introduction: "",
              }
        }
      >
        <button className="profileEditButton" type="button">
          프로필 변경
        </button>
      </Link>
      <div className="eventInfoContainers">
        <button type="button" className="eventBox">
          <Link
            to="/myevents"
            state={{
              host: true,
              involving: false,
              involved: false,
              id: user,
            }}
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
            state={{
              host: false,
              involving: true,
              involved: false,
              id: user,
            }}
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
            state={{
              host: false,
              involving: false,
              involved: true,
              id: user,
            }}
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
  );
}
