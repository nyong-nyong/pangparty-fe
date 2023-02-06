import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function Follower() {
  const memberId = "pang";
  const page = 1;
  const limit = 30;
  const [followerInfo, setFollowerInfos] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.follower.getFollower(memberId, page, limit)
      );
      setFollowerInfos(request.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>팔로워</p>
      {followerInfo &&
        followerInfo.followers.map((infos) => {
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
                      <button type="button">팔취</button>
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
