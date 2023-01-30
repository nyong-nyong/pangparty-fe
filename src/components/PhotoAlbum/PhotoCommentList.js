import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function PhotoCommentList() {
  const [commentList, setCommentList] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/events/300001/album/500001/comments?limit=30');
      console.log(request.data.comments)
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
              <span key={comment.uid}>
                {comment.content}
              </span>
            )
          } else {
            return null
          }
        })}
      {/* </CommentFrame> */}
    </div>
  )
}
