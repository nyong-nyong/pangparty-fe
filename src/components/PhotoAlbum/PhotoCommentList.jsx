/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/** eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import PhotoComment from "./PhotoComment";
import PhotoCommentUpload from "./PhotoCommentUpload";

export default function PhotoCommentList({
  mediaUid,
  eventUid,
  commentLength,
  setCommentLength,
}) {
  const [commentList, setCommentList] = useState([]);
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!mediaUid) return;
      await axios
        .get(requests.events.album.getMediaComment(eventUid, mediaUid, 0, 30))
        .then((res) => {
          // console.log(
          //   requests.events.album.getMediaComment(eventUid, mediaUid, 0, 30)
          // );
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
    <div className="commentListContainer">
      {!moreOpen && !commentLength && (
        <PhotoCommentUpload
          mediaUid={mediaUid}
          commentList={commentList}
          setCommentList={setCommentList}
          eventUid={eventUid}
        />
      )}
      {moreOpen &&
        commentList &&
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
      {moreOpen && commentList && (
        <PhotoCommentUpload
          mediaUid={mediaUid}
          commentList={commentList}
          setCommentList={setCommentList}
          eventUid={eventUid}
        />
      )}
      {!moreOpen && commentList && commentLength > 0 && (
        <PhotoComment comment={commentList[0]} moreOpen={moreOpen} />
      )}
      {!moreOpen && commentLength > 0 && (
        <button className="moreOpen" onClick={() => setMoreOpen(true)}>
          더보기
        </button>
      )}
    </div>
  );
}
