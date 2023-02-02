import { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./StickerListModal.css";
import MoveablePiece from "./MoveablePiece";

export default function StickerListModal({ setModalOpen, modalOpen }) {
  const [stickerList, setStickerList] = useState([]);
  const [clickSticker, setClickSticker] = useState(undefined);

  // 모달창 닫기
  const closeModal = () => {
    setModalOpen(false);
  };

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
  }, []);

  const stickerHandler = (e, sticker) => {
    setClickSticker(sticker);
    // setModalOpen(false);
  };

  // 로딩중..
  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      {modalOpen && (
        <div className="modalContainer">
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
      )}
      {/* <div>{clickSticker && <MoveablePiece sticker={clickSticker} />}</div> */}
      <div>{clickSticker && <MoveablePiece sticker={clickSticker} />}</div>
    </div>
  );
}
