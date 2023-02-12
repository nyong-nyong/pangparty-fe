/** eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import PhotoComment from "./PhotoComment";
import PhotoCommentUpload from "./PhotoCommentUpload";

export default function PhotoCommentList({ mediaUid, eventUid }) {
  const [commentList, setCommentList] = useState([]);
  const [commentLength, setCommentLength] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(requests.events.album.getMediaComment(eventUid, mediaUid, 0, 30))
        .then((res) => {
          console.log(
            requests.events.album.getMediaComment(eventUid, mediaUid, 0, 30)
          );
          setCommentList(res.data.media);
          setCommentLength(res.data.itemCnt);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [mediaUid]);

  return (
    <div>
      {/* <CommentFrame> */}
      {commentLength !== undefined && (
        <span>총 {commentLength}개의 댓글이 있습니다.</span>
      )}
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
      <PhotoCommentUpload
        mediaUid={mediaUid}
        commentList={commentList}
        setCommentList={setCommentList}
        eventUid={eventUid}
      />
    </div>
  );
}
