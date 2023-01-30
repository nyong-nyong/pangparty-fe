import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PhotoLikes() {
  const [likeCnt, setLikeCnt] = useState(0);
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/events/300001/album/500001/likes');
      // 좋아요 개수 불러오기
      // setLikeCnt(request.data);
      // setIsLiked(request.data);
    }
    fetchData();
  }, [])

  const handleBtnClick = (e) => {
    e.preventDefault();
    async function like() {
      await axios.post('', {
        liked: !isLiked,
      })
      .then(response => {
        setIsLiked(!isLiked);
      })
      .catch(error => {
        console.log(error);
      })
    }
    like();
  }

  return (
    <div>
      <span onClick={handleBtnClick}>{isLiked ? '♥' : '♡'}</span>
      <span>{likeCnt ? likeCnt : 0}</span>
    </div>
  )
}
