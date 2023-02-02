/* eslint-disable */
import React from 'react'
import axios from 'axios'

export default function PhotoCommentUpload({photoId, commentList, setCommentList, albumId}) {

  const createBtnClick = (e) => {
    e.preventDefault();
    const newComment = e.target.value;
    async function createComment() {
      await axios.post('', {
      })
      .then(response => {
        setCommentList([...commentList, newComment]);
        console.log(e.target)
      })
      .catch(error => {
        console.log(e.target)
        console.log(error);
      })
    }
    createComment();
  }

  return (
    <form onSubmit={createBtnClick}> 
      <textarea></textarea>
      <button>작성</button>
    </form>
  )
}
