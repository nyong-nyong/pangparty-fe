import { useEffect, useRef, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./StickerListModal.css";
import MoveablePiece from "./MoveablePiece";

export default function StickerListModal({ setModalOpen }) {
  const [stickerList, setStickerList] = useState([]);
  const [clickSticker, setClickSticker] = useState(undefined);

  // 모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalRef = useRef();

  // 랜더링
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

  const stickerHandler = (e, sticker) => {
    // console.log(sticker);
    setClickSticker(sticker);
    setModalOpen(false);
    // console.log(clickSticker);
  };

  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      <div ref={modalRef} className="modalContainer">
        <button type="button" className="close" onClick={closeModal}>
          x
        </button>
        <div className="stickerImg">
          {stickerList.map((sticker) => {
            if (sticker) {
              return (
                <div key={sticker.uid} aria-hidden="true">
                  <img
                    src={sticker.url}
                    alt="스티커"
                    aria-hidden="true"
                    width="100px"
                    height="100px"
                    onClick={(e) => stickerHandler(e, sticker)}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      {clickSticker && <MoveablePiece sticker={clickSticker} />}
    </div>
  );
}
