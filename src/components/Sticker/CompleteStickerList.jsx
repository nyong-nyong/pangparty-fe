/* eslint-disable */

import { useRecoilState } from "recoil";
import { stickerListState } from "./Atom";

function CompleteStickerList() {
  const [stickerListData, setStickerListData] =
    useRecoilState(stickerListState);

  const stickerPageStyle = {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    position: "absolute",
    top: "0",
    left: "0",
  };

  return (
    <div className="stickerPageContainer" style={stickerPageStyle}>
      {stickerListData &&
        stickerListData.map((sticker) => {
          if (sticker) {
            return (
              <div key={sticker.uid}>
                {/* , transform:rotate(sticker.angle) */}
                <img
                  src={sticker.stickerUrl}
                  style={{
                    width: `${sticker.scale}px`,
                    height: `${sticker.scale}px`,
                    transform: `rotate(${sticker.angle}deg)`,
                    position: "relative",
                    top: `${sticker.topLoc}px`,
                    left: `${sticker.leftLoc}px`,
                    zIndex: sticker.zIndex,
                  }}
                  alt="sticker"
                  onClick={() => console.log(sticker)}
                />
              </div>
            );
          }
        })}
    </div>
  );
}

export default CompleteStickerList;
