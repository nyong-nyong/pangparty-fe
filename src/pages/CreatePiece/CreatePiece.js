import React from 'react'
import { Link } from 'react-router-dom';

// 롤링페이퍼 작성하는 페이지

export default function CreateRollingPaper() {
  return (
    <div>
      <h1>롤링페이퍼 작성페이지</h1>

      <Link to="/rollingpaper">
        <button>작성완료</button>
      </Link>
    </div>
  );
}
