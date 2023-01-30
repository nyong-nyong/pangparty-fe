import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components"
import "../components/CreatePiece/CreatePiece.css";

// 롤링페이퍼 작성하는 페이지

export default function CreatePiecePage() {
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1>롤링페이퍼 작성페이지 </h1>

      {/* 롤링페이퍼 작성 */}
      <div className="pieceContainer">
        <textarea
          id="inputTextArea"
          className="pieceWrite"
          placeholder="내용을 입력해주세요"
        ></textarea>
        <span>
          From.
          <input type="text" className="writerName" placeholder="" />
        </span>
      </div>

      <Link to="/rollingpaper">
        <button style={{ marginTop: "20px" }}>
          피스리스트로 가는 임시 이동 버튼
        </button>
      </Link>
    </div>
  );
}
