import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function Following() {
  const memberId = "pang";
  const page = 1;
  const limit = 30;
  const [followingInfo, setFollowingInfos] = useState(undefined);

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
      <p>팔로잉</p>
      {followingInfo &&
        followingInfo.following.map((infos) => {
          if (infos) {
            return (
              <div key={infos.id} className="outline">
                <div className="followContainer">
                  <div className="followimgBox">
                    <img
                      className="profileImg"
                      src={infos.imgUrl}
                      alt="profile"
                    />
                  </div>
                  <div className="rightContainer">
                    <div className="followInfoBox">
                      <p>{infos.id}</p>
                      <p>{infos.name}</p>
                    </div>
                    <div className="followButton">
                      <button type="button">팔로잉</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
