import { useState, useEffect } from "react";
// import * as ReactDOM from "react-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
// import MoveablePiece from "./MoveablePiece";

export default function StickerList() {
  const [stickerList, setStickerList] = useState([]);

  const [stickerInfo, setStickerInfo] = useState({
    width: "100px",
    height: "100px",
    left: "0px",
    top: "0px",
    transform: {
      rotate: "0deg",
      scaleX: 1,
      scaleY: 1,
      matrix3d: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    },
  });

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
                // onClick={() => {
                //   console.log(sticker);
                //   const root = ReactDOM.createRoot(
                //     document.getElementById("RP-page")
                //   );
                //   const newSticker = <MoveablePiece sticker={sticker} />;
                //   root.render(newSticker);
                // }}
                aria-hidden="true"
                width={stickerInfo.width}
                height={stickerInfo.height}
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
