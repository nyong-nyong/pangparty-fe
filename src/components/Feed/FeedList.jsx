/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./FeedList.scss";
import profile from "../../assets/profile.svg";
import useAuth from "../../hooks/useAuth";
import SearchEventResult from "../Search/SearchEvent";

export default function FeedList() {
  const [feedList, setFeedList] = useState([]);

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
          console.log(response.data.feed);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getFeed();
  }, []);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  return (
    <div className="feedWrapper">
      {feedList ? (
        feedList.map((feed) => {
          if (!feed) return null;
          return (
            // <div key={feed.uid} onClick={(e) => handleClickfeed(e, feed)}>
            <Link to={`/feed/${feed.uid}`}>
              <div key={feed.uid}>
                <div className="feedContainer">
                  <div className="feedMember">
                    <img src={profile} alt="" />
                    <div className="titleAndMember">
                      <p className="feedTitle">{feed.title}</p>
                      <p className="feedId">@{feed.memberId}</p>
                    </div>
                  </div>
                  <div className="feedContent">
                    <p>{feed.content}</p>
                    <p className="feedTime">{timeForToday(feed.createTime)}</p>
                  </div>
                </div>
                <ul>
                  {feed.event ? <SearchEventResult event={feed.event} /> : null}
                </ul>
              </div>
            </Link>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
}
