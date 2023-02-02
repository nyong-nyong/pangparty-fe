/* eslint-disable */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhotoComment from './PhotoComment';
import PhotoCommentUpload from './PhotoCommentUpload';

export default function PhotoCommentList({photo, albumId}) {
  const [commentList, setCommentList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/events/${albumId}/album/${photo.uid}/comments?limit=30`);
      // console.log(request.data.comments)
      setCommentList(request.data.comments);
    }
    fetchData();
  }, [])

  return (
    <div>
      {/* <CommentFrame> */}
        {commentList.map((comment) => {
          if(comment) {
            return (
              <PhotoComment key={comment.uid} comment={comment} commentList={commentList} setCommentList={setCommentList} albumId={albumId}/>
            )
          } else {
            return null
          }
        })}
      {/* </CommentFrame> */}
      <PhotoCommentUpload photoId={photo.uid} commentList={commentList} setCommentList={setCommentList} albumId={albumId}/>
    </div>
  )
}
