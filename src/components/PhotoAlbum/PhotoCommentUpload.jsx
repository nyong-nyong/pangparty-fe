/* eslint-disable */

import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function PhotoCommentUpload({
  mediaUid,
  commentList,
  setCommentList,
  eventUid,
}) {
  const [commentContent, setCommentContent] = useState("");
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);


  const createBtnClick = (e) => {
    e.preventDefault();
    const newComment = {
      uid: null,
      eventUid,
      memberId: user,
      mediaUid,
      content: commentContent,
    };
    async function createComment() {
      await axios
        .post(requests.events.album.postComment(eventUid, mediaUid), 
        {
          "content": commentContent,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          newComment.uid = res.data.uid;
          setCommentList([...commentList, newComment]);
          console.log(res);
        })
        .catch((error) => {
          console.log(e.target);
          console.log(error);
        });
    }
    createComment();
  };

  const onChangeComment = (e) => {
    setCommentContent(e.target.value);
    // console.log(e.target.value)
  };

  return (
    <form onSubmit={createBtnClick}>
      <textarea onChange={onChangeComment} value={commentContent} />
      <button>작성</button>
    </form>
  );
}
