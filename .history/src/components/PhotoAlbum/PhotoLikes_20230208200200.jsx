/* eslint-disable */

import { resetClipboardStubOnView } from "@testing-library/user-event/dist/types/utils";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Icon from "../common/Icon";

const likeContainerStyle = {
  width: "60px",
  height: "30px",
  backgroundColor: "aqua",
  display: "flex",
  justifyContnet: "flex-start",
  alignItems: "center",
};

export default function PhotoLikes({ mediaUid, eventUid, isLikedProps }) {
  const [likeCnt, setLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(0);

  useEffect(() => {
    setIsLiked(isLikedProps);
  }, [isLikedProps]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.events.album.getMediaLikes(eventUid, mediaUid, 1, 30)
      );
      setLikeCnt(request.data.total);
    }
    fetchData();
  }, []);

  const handleBtnClick = (e) => {
    e.preventDefault();

    async function dislike() {
      await axios
        .delete(requests.events.album.delLikes(eventUid, mediaUid))
        .then(() => {
          setLikeCnt(likeCnt - 1);
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
          setLikeCnt(likeCnt + 1);
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
      <Icon img="like" isActive={isLiked} style={{ position: resetClipboardStubOnView, }}/>
      {likeCnt}
    </div>
  );
}
