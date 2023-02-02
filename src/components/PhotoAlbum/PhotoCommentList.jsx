import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import PhotoComment from "./PhotoComment";
import PhotoCommentUpload from "./PhotoCommentUpload";

export default function PhotoCommentList({ mediaUid, eventUid }) {
  const [commentList, setCommentList] = useState([]);
  const [commentLength, setCommentLength] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.events.album.getMediaComment(eventUid, mediaUid, 1, 30)
      );
      console.log(requests.events.album.getMediaComment(eventUid, mediaUid, 1, 30))
      console.log(request)
      setCommentList(request.data.comments);
      setCommentLength(request.data.total);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* <CommentFrame> */}
      {commentLength !== undefined && <span>총 {commentLength}개의 댓글이 있습니다.\n</span>}
      {commentList &&
        commentList.map((comment) => {
          if (comment) {
            return (
              <PhotoComment
                key={comment.uid}
                comment={comment}
                commentList={commentList}
                setCommentList={setCommentList}
                eventUid={eventUid}
                mediaUid={mediaUid}
              />
            );
          }
          return null;
        })}
      {/* </CommentFrame> */}
      <PhotoCommentUpload mediaUid={mediaUid} commentList={commentList} setCommentList={setCommentList} eventUid={eventUid}/>
    </div>
  );
}
