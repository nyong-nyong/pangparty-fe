import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "../../api/axios";
import requests from "../../api/requests";
import MoveablePiece from "./MoveablePiece";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);

  // 최초 랜더링시 실행
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
  });

  // const saveStickerInfo = (e) => {
  //   console.log(e.target);
  // 1. atom을 활용해 sticker정보, click여부 저장(클릭 여부를 통해 피스리스트에서 확인)

  // 2. 페이지 이동
  // };

  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      <h1>⭐스티커 붙이기⭐</h1>
      {stickerList.map((sticker) => {
        if (sticker) {
          return (
            <div key={sticker.uid}>
              <img
                src={sticker.url}
                alt=""
                onClick={() => {
                  console.log(sticker);
                  const root = ReactDOM.createRoot(
                    document.getElementById("root")
                  );
                  console.log(root);
                  root.render(<MoveablePiece sticker={sticker} />);
                }}
                aria-hidden="true"
                width="100px"
                height="100px"
              />
            </div>
          );
        }
        return null;
      })}
      {/* <MoveablePiece /> */}
    </div>
  );
}
