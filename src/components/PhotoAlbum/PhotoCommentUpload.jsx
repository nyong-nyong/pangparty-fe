import React, { useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PhotoCommentUpload({
  mediaUid,
  commentList,
  setCommentList,
  eventUid,
}) {

  const myId = "example";
  const [commentContent, setCommentContent] = useState("")

  const createBtnClick = (e) => {
    e.preventDefault();
    const newComment = {
      uid: null,
      eventUid: eventUid,
      memberId: myId,
      mediaUid: mediaUid,
      content: commentContent,
    };
    async function createComment() {
      await axios
        .post(requests.events.album.postComment(eventUid, mediaUid), {
          body: {
            "eventUid" : eventUid,
            "mediaUid" : mediaUid,
            "content" : commentContent,
          }
        })
        .then((response) => {
          // newComment.uid = response.에서 넣기
          newComment.uid = 123456;
          setCommentList([...commentList, newComment]);
          console.log(response)
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
  }

  return (
    <form onSubmit={createBtnClick}>
      <textarea onChange={onChangeComment} value={commentContent}/>
      <button>작성</button>
    </form>
  );
}
