/*eslint-disable*/

import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { stickerClickState, stickerState } from "./Atom";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);
  const [stickerInfo, setStickerInfo] = useRecoilState(stickerState);
  const [stickerClick, setStickerClick] = useRecoilState(stickerClickState);

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

  const saveStickerInfo = (e) => {
    console.log(e.target);

    setStickerInfo(e.target);
    setStickerClick(true);

    // 1. atom을 활용해 sticker정보, click여부 저장(클릭 여부를 통해 피스리스트에서 확인)

    // 2. 페이지 이동
  };

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
                onClick={saveStickerInfo}
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
