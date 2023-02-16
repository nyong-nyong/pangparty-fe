/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function PhotoComment({
  comment,
  commentList,
  setCommentList,
  eventUid,
  mediaUid,
  moreOpen,
}) {
  const navigate = useNavigate();
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [timeConvert, setTimeConvert] = useState("");

  useEffect(() => {
    const createTime = new Date(comment.createTime);
    const today = new Date();
    if (Math.floor((today - createTime) / (1000 * 60 * 60 * 24)) >= 1) {
      return setTimeConvert(
        `${Math.floor((today - createTime) / (1000 * 60 * 60 * 24))}일 전`
      );
    }
    if (Math.floor((today - createTime) / (1000 * 60 * 60)) >= 1) {
      return setTimeConvert(
        `${Math.floor((today - createTime) / (1000 * 60 * 60))}시간 전`
      );
    }
    if (Math.floor((today - createTime) / (1000 * 60)) >= 1) {
      return setTimeConvert(
        `${Math.floor((today - createTime) / (1000 * 60))}분 전`
      );
    }
    return setTimeConvert("방금 전");
  }, [comment]);

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  // useEffect(() => {
  //   console.log(commentList)
  // }, [commentList])

  const deleteBtnClick = (e) => {
    e.preventDefault();
    async function deleteComment() {
      await axios
        .delete(
          requests.events.album.delComment(eventUid, mediaUid, comment.uid)
        )
        .then((response) => {
          const newCommentList = commentList.filter(
            (c) => c.uid !== comment.uid
          );
          // console.log(response);
          setCommentList(newCommentList);
        })
        .catch((error) => {
          console.log(e.target);
          console.log(error);
        });
    }
    deleteComment();
  };

  const navToprofile = () => {
    navigate(`/friend/${comment.memberId}`);
  };

  return (
    <div className="commentContainer">
      <div className="commentHeader">
        <div className="commentMember" onClick={navToprofile}>
          {comment.memberId}
        </div>
        <div className="commentTime">{timeConvert || null}</div>
      </div>
      <div className="commentBody">
        <div className="commentContent">{comment.content}</div>
        {moreOpen === true ? (
          <div className="commentDel" onClick={deleteBtnClick}>
            {user && comment.memberId === user ? "X" : ""}
          </div>
        ) : null}
      </div>
    </div>
  );
}
