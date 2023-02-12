/* eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Icon from "../common/Icon";

const likeContainerStyle = {
  width: "40px",
  height: "30px",
  // backgroundColor: "aqua",
  display: "flex",
  justifyContnet: "flex-start",
  alignItems: "center",
};

export default function PhotoLikes({ mediaUid, eventUid, isLikedProps, likeCnt }) {
  const [tmpLikeCnt, setTmpLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(isLikedProps);
    setTmpLikeCnt(likeCnt);
  }, [mediaUid]);

  // useEffect(() => {
  //   setTmpLikeCnt(likeCnt);
  // }, [likeCnt])

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(
  //       requests.events.album.getMediaLikes(eventUid, mediaUid, 1, 30)
  //     );
  //     setTmpLikeCnt(request.data.total);
  //   }
  //   fetchData();
  // }, []);

  const handleBtnClick = (e) => {
    e.preventDefault();

    async function dislike() {
      await axios
        .delete(requests.events.album.delLikes(eventUid, mediaUid))
        .then(() => {
          setTmpLikeCnt(tmpLikeCnt - 1);
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function like() {
      await axios
        .post(requests.events.album.postLikes(eventUid, mediaUid))
        .then(() => {
          setTmpLikeCnt(tmpLikeCnt + 1);
          setIsLiked(!isLiked);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    if (isLiked) {
      return dislike();
    }
    return like();
  };

  return (
    <div
      className="likeContainer"
      onClick={handleBtnClick}
      style={likeContainerStyle}
    >
      <Icon img="like" isActive={isLiked} style={{ position: "relative", left: "-5px" }}/>
      {tmpLikeCnt}
    </div>
  );
}
