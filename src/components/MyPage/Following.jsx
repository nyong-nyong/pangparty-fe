import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import { userState } from "../../recoils/user/Atoms";
import useAuth from "../../hooks/useAuth";
import "../../styles/MyPage.scss";
import Button from "../common/Button";

export default function Following() {
  const page = 0;
  const size = 30;
  const [followingInfo, setFollowingInfos] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);

    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.myfollow.getMyFollowings(user, page, size)
      );
      setFollowingInfos(request.data);
    }
    fetchData();
  }, [user]);

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
                  <div className="followInfoBox">
                    <p className="followId">{infos.id}</p>
                    <p className="followName">{infos.name}</p>
                  </div>
                </div>

                <div className="rightContainer">
                  <div className="buttonContainer">
                    {infos.following ? (
                      <Button color="gray-4" size="small">
                        unfollow
                      </Button>
                    ) : (
                      <Button color="orange-1" size="small">
                        follow
                      </Button>
                    )}
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
