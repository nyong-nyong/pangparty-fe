import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { stickerState } from "../components/Sticker/Atom";
import MoveablePiece from "../components/Sticker/MoveablePiece";
import StickerListModal from "../components/Sticker/StickerListModal";

export default function PieceListPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const stickerInfo = useRecoilValue(stickerState);

  // 모달 오픈
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div id="RP-page">
      <h1>완성된 롤링페이퍼 페이지</h1>
      <div style={{ width: "100%", height: "500px" }} />
      <button type="button" onClick={showModal}>
        🧸스티커 붙이기🧸
      </button>
      {modalOpen && <StickerListModal setModalOpen={setModalOpen} />}
      {stickerInfo && <MoveablePiece sticker={stickerInfo} />}
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}
