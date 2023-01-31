import { useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);

  const onClick = () => {
    async function getSticker() {
      await axios
        .get(requests.fetchStickers)
        .then((response) => {
          setStickerList(response.data.stickers);
          console.log(response.data);
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
      <h1>스티커리스트</h1>
      <button type="button" onClick={onClick}>
        불러오기
      </button>
      {stickerList.map((sticker) => {
        return (
          <img key={sticker.uid} src={sticker.url} alt="h" width="100px" />
        );
      })}
    </div>
  );
}
