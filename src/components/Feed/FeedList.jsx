/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./FeedList.scss";
import profile from "../../assets/profile.svg";

export default function FeedList() {
  const [feedList, setFeedList] = useState([]);
  const navigate = useNavigate();

  // mockApi
  useEffect(() => {
    async function getFeed() {
      await axios
        .get(requests.feed.getFeed())
        .then((response) => {
          setFeedList(response.data.posts);
          console.log(response.data);
        })
        .catch((e) => {
          console.err(e);
        });
    }
    getFeed();
  }, []);

  // localhost
  // const page = 1;
  // const limit = 3;
  // useEffect(() => {
  //   async function getFeed() {
  //     await axios
  //       .get(requests.feed.getFeed(page, limit))
  //       .then((response) => {
  //         setFeedList(response.data.posts);
  //         console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.err(e);
  //       });
  //   }
  //   getFeed();
  // }, []);

  const handleClickPost = (e, post) => {
    e.preventDefault();
    console.log(post.uid);
    // navigate(`/${post.uid}`);
  };

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
        feedList.map((post) => {
          return (
            <div key={post.uid} onClick={(e) => handleClickPost(e, post)}>
              <div className="feedContainer">
                <div className="feedMember">
                  <img src={profile} alt="" />
                  <div className="titleAndMember">
                    <p className="feedTitle">게시글 제목</p>
                    <p className="feedId">@{post.id}</p>
                  </div>
                </div>
                <div className="feedContent">
                  <p>{post.content}</p>
                  <p className="feedTime">{timeForToday(post.createTime)}</p>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div />
      )}
    </div>
  );
}
