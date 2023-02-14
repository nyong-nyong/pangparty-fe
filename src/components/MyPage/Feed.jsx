import { useState, useEffect } from "react";
// import Icon from "../common/Icon";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function Feed() {
  const [feedInfo, setFeedInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      const request = await axios.get(
        requests.profile.getProfileFeed(`${user}`, 0, 30)
      );
      setFeedInfo(request.data);
      console.log(request.data);
    }
    fetchData();
  }, [user]);
  return (
    <div>
      {feedInfo &&
        feedInfo.feed.map((post) => {
          if (post) {
            return (
              <div key={post.uid} className="feedCardContainer">
                <div className="feedCard">
                  <div className="feedEventCard">
                    {post.event && (
                      <p>{post.memberId}님이 이벤트를 공유했어요</p>
                    )}
                    {post.event && <p>{post.event.eventName}</p>}
                    {post.event && (
                      <img
                        className="feedEventCardImg"
                        src={post.event.imgUrl}
                        alt=""
                      />
                    )}
                  </div>
                  <p className="feedWriter">@{post.memberId}</p>
                  <p className="feedCardContent">{post.content}</p>
                  {/* <Icon img="like">{post.hit}</Icon> */}
                  <p>작성일:{post.createTime}</p>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
