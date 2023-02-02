// 모달창으로 분리한 것
// 완성된 롤링페이퍼 페이지

import { useState } from "react";
import { Link } from "react-router-dom";
import StickerListModal from "../components/Sticker/StickerListModal";

export default function PieceListPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
    console.log("click");
  };

  return (
    <div id="RP-page">
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div style={{ width: "100%", height: "500px" }} />
      <button type="button" onClick={showModal}>
        🧸스티커 붙이기🧸
      </button>
      {modalOpen && <StickerListModal setModalOpen={setModalOpen} />}
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}
