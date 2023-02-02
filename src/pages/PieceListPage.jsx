// 모달창으로 분리한 것
// 완성된 롤링페이퍼 페이지

import { useState } from "react";
import { Link } from "react-router-dom";
// import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { stickerState } from "../components/Sticker/Atom";
import MoveablePiece from "../components/Sticker/MoveablePiece";
import StickerListModal from "../components/Sticker/StickerListModal";

export default function PieceListPage() {
  const [modalOpen, setModalOpen] = useState(false);
  // const stickerInfoValue = useRecoilValue(stickerState);
  const setStickerInfo = useSetRecoilState(stickerState);

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
      {/* {stickerInfoValue && <MoveablePiece sticker={stickerInfoValue} />} */}
      {setStickerInfo && <MoveablePiece sticker={setStickerInfo} />}
      <Link to="/">🏡 회귀 🏡</Link>
    </div>
  );
}

// StickerListModal에서 클릭한 sticker정보만
// recoil로 저장한 후 PieceListPage로 useRecoil 해서
// Movable 호출하기

// {/* {modalOpen && (
//   <StickerListModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
// )} */}
// {/* <StickerListModal modalOpen={modalOpen} setModalOpen={setModalOpen} /> */}
