import React from 'react'
import { Link } from 'react-router-dom'

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
  return (
    <div>
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div style={{ width:'100%', height:'500px' }}>
      </div>
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  )
}

// Home으로 돌아가는 버튼 추가하기
