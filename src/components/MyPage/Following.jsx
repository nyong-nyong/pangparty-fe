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
