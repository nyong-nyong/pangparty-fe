import { useState, useEffect } from "react";
// import Icon from "../common/Icon";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import Feed from "../Feed/Feed";
import SearchEventResult from "../Search/SearchEvent";

import { detailFeedState } from "../../recoils/Feed/Atoms";
import "../Feed/FeedList.scss";
import "../Feed/Feed.scss";

export default function FriendFeed({ friendId }) {
  const [feedInfo, setFeedInfo] = useState(undefined);
  const setDetailFeed = useSetRecoilState(detailFeedState);

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      if (!user) return;
      await axios
        .get(requests.profile.getProfileFeed(`${friendId}`, 0, 30))
        .then((res) => {
          // console.log(res);
          setFeedInfo(res.data);
        })
        .catch((err) => console.error(err));
    }
    fetchData();
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
