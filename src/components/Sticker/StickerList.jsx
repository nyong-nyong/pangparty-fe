import { useState, useEffect } from "react";
// import Draggable from "react-draggable";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);

  useEffect(() => {
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
  });

  if (!stickerList) return <div>...loading</div>;

  return (
    <div>
      <h1>⭐스티커 붙이기⭐</h1>
      {/* <Draggable> */}
      {stickerList.map((sticker) => {
        return <img key={sticker.uid} src={sticker.url} alt="" width="100px" />;
      })}
      {/* </Draggable> */}
    </div>
  );
}
