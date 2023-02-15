/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Icon from "../common/Icon";

const likeContainerStyle = {
  display: "flex",
  height: "30px",
  margin: "5px 0px 5px 0px",
  justifyContnet: "flex-start",
  alignItems: "center",
};

export default function PhotoLikes({
  mediaUid,
  eventUid,
  isLikedProps,
  likeCnt,
  commentLength,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  const [tmpLikeCnt, setTmpLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    setIsLiked(isLikedProps);
    setTmpLikeCnt(likeCnt);
  }, [mediaUid]);

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
    <div onClick={handleBtnClick} style={likeContainerStyle}>
      <Icon
        img="like"
        isActive={isLiked}
        style={{ position: "relative", left: "-15px" }}
      />
      {tmpLikeCnt !== undefined && (
        <span style={{ position: "relative", left: "-20px" }}>
          {tmpLikeCnt}
        </span>
      )}
      <Icon img="comment" style={{ position: "relative", left: "-10px" }}/>
      {commentLength !== undefined && (
        <span style={{ position: "relative", left: "-15px" }}>
          {commentLength}
        </span>
      )}
    </div>
  );
}
