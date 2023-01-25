import React from "react";
import stickers from "./sticker.json";

export default function StickerLists() {
  const stickerData = stickers.stickerList.map((sticker) => {
    return (
      <div key={sticker.uid}>
        <img src={sticker.url} alt="스티커" />
      </div>
    );
  });

  return <div>{stickerData}</div>;
}
