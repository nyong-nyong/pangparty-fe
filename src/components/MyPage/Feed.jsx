/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
// import Icon from "../common/Icon";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import SearchEventResult from "../Search/SearchEvent";
import Feed from "../Feed/Feed";
import "../Feed/FeedList.scss";
import "../Feed/Feed.scss";

import { detailFeedState } from "../../recoils/Feed/Atoms";

export default function MyFeed() {
  const [feedInfo, setFeedInfo] = useState(undefined);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (!user) return;
      await axios
        .get(requests.profile.getProfileFeed(`${user}`, 0, 30))
        .then((res) => {
          // console.log(res);
          setFeedInfo(res.data);
        })
        .catch((err) => console.error(err));
    }
    fetchData();
    // 렌더링 시점 수정필요
  }, [user]);

  return (
    <div className="feedWrapper">
      {feedInfo &&
        feedInfo.feed.map((post) => {
          if (post) {
            return (
              <div key={post.uid}>
                <Link
                  to={`/feed/${post.uid}`}
                  onClick={() => {
                    setDetailFeed(post);
                  }}
                >
                  <Feed feed={post} />
                </Link>
                <ul>
                  {post.event ? <SearchEventResult event={post.event} /> : null}
                </ul>
              </div>
            );
          }
          return null;
        })}
    </div>
  );
}
