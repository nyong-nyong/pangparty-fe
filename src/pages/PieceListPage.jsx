import { Link } from "react-router-dom";

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
  // 1. atomvalue 받아오기

  // 2. 쏜 click여부 true인지 확인하기

  // 3. true이면 sticker 정보 활용해서 띄우고 무버블 씌우기!

  return (
    <div id="RP-page">
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div style={{ width: "100%", height: "500px" }} />
      <Link to="/rollingpaper/sticker">
        <button type="button">🧸스티커 붙이기🧸</button>
      </Link>
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}
