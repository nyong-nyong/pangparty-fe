/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";

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
  //         // console.log(response.data);
  //       })
  //       .catch((e) => {
  //         console.err(e);
  //       });
  //   }
  //   getFeed();
  // });

  const handleClickPost = (e, post) => {
    e.preventDefault();
    console.log(post.uid);
    // navigate(`/${post.uid}`);
  };

  return (
    <div>
      {feedList ? (
        feedList.map((post) => {
          return (
            <div key={post.uid} onClick={(e) => handleClickPost(e, post)}>
              <div className="postContainer">
                <p>{post.id}</p>
                <p>{post.content}</p>
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
