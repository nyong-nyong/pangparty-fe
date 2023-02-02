import { useEffect, useRef, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./StickerListModal.css";
import MoveablePiece from "./MoveablePiece";

export default function StickerListModal({ setModalOpen }) {
  const [stickerList, setStickerList] = useState([]);
  // 모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef();

  useEffect(() => {
    async function getSticker() {
      await axios
        .get(requests.fetchStickers)
        .then((response) => {
          setStickerList(response.data.stickers);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getSticker();

    const handler = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };
    // 이벤트 핸들러 등록
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler); // 모바일 대응

    return () => {
      // 이벤트 핸들러 해제
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler); // 모바일 대응
    };
  }, []);

  if (!stickerList) return <div>...loading</div>;

  return (
    <div ref={modalRef} className="container">
      <button type="button" className="close" onClick={closeModal}>
        x
      </button>
      {stickerList.map((sticker) => {
        if (sticker) {
          return (
            <div key={sticker.uid}>
              <img
                src={sticker.url}
                alt=""
                // onClick={}
                aria-hidden="true"
                width="100px"
                height="100px"
              />
            </div>
          );
        }
        return null;
      })}
      <MoveablePiece />
    </div>
  );
}
