import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/PieceListPage.css";

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
  const [pieceList, setPieceList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/events/300001/rollingpaper"
      );
      setPieceList(request.data.rollingPaperPiece);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div className="pieceListContainer">
        {pieceList.map((piece) => {
          if (piece) {
            return (
              <div
                key={piece.rollingPaperPieceUid}
                className="piece"
                style={{
                  backgroundColor: `#${piece.bgColor}`,
                  textAlign: `${piece.textAlign}`,
                  fontFamily: `${piece.fontFamily}`,
                }}
              >
                <content>{piece.content}</content>
                <p>From. {piece.writerName}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <footer>
        <Link to="/piece">
          <button type="button">✨롤링페이퍼 작성하기✨</button>
        </Link>
        <Link to="/rollingpaper/sticker">
          <button type="button">🧸스티커 붙이기🧸</button>
        </Link>
        <Link to="/">🏡 회귀 🏡</Link>
      </footer>
    </div>
  );
}
