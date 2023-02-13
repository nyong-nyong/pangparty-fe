/* eslint-disable */
import axios from "../../api/axios";
import requests from "../../api/requests";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function PhotoComment({
  comment,
  commentList,
  setCommentList,
  eventUid,
  mediaUid,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [timeConvert, setTimeConvert] = useState("");

  useEffect(() => {
    const createTime = new Date(comment.createTime);
    const today = new Date();
    if(Math.floor((today - createTime)/(1000 * 60 * 60 * 24)) >= 1) {
      return setTimeConvert(createTime);
    }
    if(Math.floor((today - createTime)/(1000 * 60 * 60)) >= 1 ) {
      return setTimeConvert(`${Math.floor((today - createTime)/(1000 * 60 * 60))}시간 전`);
    }
    if(Math.floor((today - createTime)/(1000 * 60)) >= 1) {
      return setTimeConvert(`${Math.floor((today - createTime)/(1000 * 60))}분 전`);
    }
    return setTimeConvert("방금 전")
  }, [comment])

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

  return (
    <div>
      {comment.memberId} : {comment.content}
      {timeConvert ? timeConvert : null}
      <span onClick={deleteBtnClick}>
        {user && comment.memberId === user ? "X" : ""}
      </span>
      <br />
    </div>
  );
}
