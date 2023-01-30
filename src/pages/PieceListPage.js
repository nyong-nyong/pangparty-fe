import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/common/Modal";
import StickerLists from "../components/Sticker/StickerLists";
import requests from "../api/requests";
import axios from "axios";

// 완성된 롤링페이퍼 페이지

export default function PieceListPage() {
  const [pieceList, setPieceList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/rollingpaper/1"
      );
      setPieceList(request.data.rollingPaperPiece);
    }
    fetchData();
  }, []);

  const [modalOpen, setModalOpen] = useState(false); // 모달 노출여부
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div>{pieceList[0] ? pieceList[0].content : ""}</div>
      <button onClick={showModal}>스티커 붙이기</button>
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} InnerComponent={StickerLists} />
      )}
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}
