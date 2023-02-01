import { useState } from "react";
import Moveable from "react-moveable";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);

  // // 최초 랜더링시 실행
  // useEffect(() => {
  //   async function getSticker() {
  //     await axios
  //       .get(requests.fetchStickers)
  //       .then((response) => {
  //         setStickerList(response.data.stickers);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   }
  //   getSticker();
  // });

  // 최초 랜더링시 실행
  const onClick = () => {
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
  };

  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      <h1>⭐스티커 붙이기⭐</h1>
      <button type="button" onClick={onClick}>
        스티커 불러오기
      </button>
      <Moveable></Moveable>
      {stickerList.map((sticker) => {
        return <img key={sticker.uid} src={sticker.url} alt="" width="100px" />;
      })}
    </div>
  );
}
