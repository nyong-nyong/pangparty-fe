import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import { userState } from "../../recoils/user/Atoms";
import useAuth from "../../hooks/useAuth";
import "../../styles/MyPage.scss";

export default function Following({ followsInfo, setFollowsInfos, id }) {
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
        requests.myfollow.getMyFollowings(id, page, size)
      );
      setFollowingInfos(request.data);
    }
    fetchData();
  }, [user]);

  const postFollow = async (e) => {
    const followeeId = e.target.value;
    await axios
      .post(requests.following.postFollowing(followeeId), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setFollowsInfos({
          followerCount: followsInfo.followerCount,
          followingCount: followsInfo.followingCount + 1,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delFollow = async (e) => {
    // console.log(e.target.value);
    const followeeId = e.target.value;
    await axios
      .delete(requests.following.delFollowing(followeeId), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setFollowsInfos({
          followerCount: followsInfo.followerCount,
          followingCount: followsInfo.followingCount - 1,
        });
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
                    <Link to={`../friend/${infos.id}`}>
                      <p className="followId">{infos.id}</p>
                      <p className="followName">{infos.name}</p>
                    </Link>
                  </div>
                </div>

                <div className="rightContainer">
                  <div className="buttonContainer">
                    {infos.following ? (
                      <Button
                        color="gray-4"
                        size="small"
                        value={infos.id}
                        onClick={delFollow}
                      >
                        unfollow
                      </Button>
                    ) : (
                      <Button
                        color="orange-1"
                        size="small"
                        value={infos.id}
                        onClick={postFollow}
                      >
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
