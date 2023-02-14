/* eslint-disable object-shorthand */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./FeedList.scss";
import useAuth from "../../hooks/useAuth";
import SearchEventResult from "../Search/SearchEvent";
import Feed from "./Feed";

export default function FeedList() {
  const [feedList, setFeedList] = useState([]);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  // 한별
  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, []);

  // localhost
  const page = 0;
  const size = 30;
  useEffect(() => {
    async function getFeed() {
      await axios
        .get(requests.feed.getFeed(page, size))
        .then((response) => {
          setFeedList(response.data.feed);
          // console.log(response.data.feed);
        })
        .catch((err) => {
          console.log(e);
        });
    }
    getFeed();
  }, []);

  return (
    <div className="feedWrapper">
      {feedList ? (
        feedList.map((feed) => {
          if (!feed) return null;
          return (
            <div key={feed.uid}>
              <Link
                to={`/feed/${feed.uid}`}
                onClick={() => {
                  setDetailFeed(feed);
                }}
              >
                <Feed feed={feed} />
              </Link>
              <ul>
                {feed.event ? <SearchEventResult event={feed.event} /> : null}
              </ul>
            </div>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
}
