import React from 'react'
import axios from 'axios';

export default function PhotoComment({comment, commentList, setCommentList, albumId}) {
  const myId = 100003;

  const deleteBtnClick = (e) => {
    e.preventDefault();
    async function deleteComment() {
      await axios.post('', {
      })
      .then(response => {
        const newCommentList = commentList.filter(c => c.uid !== comment.uid);
        setCommentList(newCommentList)
        console.log(e.target)
      })
      .catch(error => {
        console.log(e.target)
        console.log(error);
      })
    }
    deleteComment();
  }

  return (
    <div>
      {comment.content}
      {comment.createTime}
      <span onClick={deleteBtnClick}>{comment.writerUid === myId ? 'X' : ''}</span>
    </div>
  )
}
