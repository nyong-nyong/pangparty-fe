import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { stickerState } from "./Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./StickerListModal.css";
import 

export default function StickerListModal({ setModalOpen }) {
  const [stickerList, setStickerList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [stickerInfo, setStickerInfo] = useRecoilState(stickerState);

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

  // sticker 클릭하면 recoil에 클릭한 sticekr 저장
  // modal은 closw
  const stickerHandler = (e, sticker) => {
    e.preventDefault();
    setStickerInfo(sticker);
    setModalOpen(false);
    // console.log(e);
  };

  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      <div ref={modalRef} className="modalContainer">
        <button type="button" className="close" onClick={closeModal}>
          <img alt="exit" src={`${process.env.PUBLIC_URL}/image/exit.png`} />
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
    </div>
  );
}
