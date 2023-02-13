/* eslint-disable */

import { useRecoilState } from "recoil";
import { stickerListState } from "./Atom";

function CompleteStickerList() {
  const [stickerListData, setStickerListData] =
    useRecoilState(stickerListState);

  const stickerPageStyle = {
    width: "100%",
    height: "500px",
    // backgroundColor: "aqua",
    position: "absolute",
    top: "0px",
    left: "0px",
    // overflow: "scroll",
  };

  return (
    <>
      <div className="stickerPageContainer" style={stickerPageStyle}>
        {stickerListData &&
          stickerListData.map((sticker, idx) => {
            if (sticker) {
              return (
                <>
                  {/* , transform:rotate(sticker.angle) */}
                  <img
                    key={idx}
                    src={sticker.stickerUrl}
                    style={{
                      width: `${sticker.scale * 50}px`,
                      height: `${sticker.scale * 50}px`,
                      transform: `rotate(${sticker.angle}deg)`,
                      position: "relative",
                      top: `${sticker.topLoc - 50}px`,
                      left: `${sticker.leftLoc}px`
                      // zIndex: sticker.zIndex,
                    }}
                    alt="sticker"
                    onClick={() => console.log(sticker)}
                  />
                </>
              );
            }
          })}
      </div>
    </>
  );
}

export default CompleteStickerList;
