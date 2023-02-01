import React, { useState, useEffect } from 'react'
import axios from '../../api/axios';
import requests from '../../api/requests';
import PhotoComment from './PhotoComment';
import PhotoCommentUpload from './PhotoCommentUpload';

export default function PhotoCommentList({photo, eventUid}) {
  const [commentList, setCommentList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.events.album.getMediaComment(eventUid, photo.uid, 1, 30));
      console.log(requests.events.album.getMediaComment(eventUid, photo.uid, 1, 30))
      console.log(request.data)
      setCommentList(request.data.comments);
    }
    fetchData();
  }, [photo])

  return (
    <div>
      {/* <CommentFrame> */}
        {commentList.map((comment) => {
          if(comment) {
            return (
              <PhotoComment key={comment.uid} comment={comment} commentList={commentList} setCommentList={setCommentList} eventUid={eventUid}/>
            )
          } else {
            return null
          }
        })}
      {/* </CommentFrame> */}
      {/* <PhotoCommentUpload photoId={photo.uid} commentList={commentList} setCommentList={setCommentList} eventUid={eventUid}/> */}
    </div>
  )
}
