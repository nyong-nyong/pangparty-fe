/* eslint-disable */

import { useRecoilState } from "recoil";
import { stickerListState } from "./Atom";

function CompleteStickerList() {
  const [stickerListData, setStickerListData] =
    useRecoilState(stickerListState);

  const stickerPageStyle = {
    width: "100%",
    height: "100%",
    // backgroundColor: "aqua",
    position: "absolute",
    top: "0px",
    left: "0px",
    overflow: "hidden",
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
                      top: `${sticker.topLoc + 90}px`,
                      left: `${sticker.leftLoc - 100}px`,
                      // 화면 크기에 따라 붙여지는 위치가 달라짐 조정 필요!!!!!****
                      // zIndex: sticker.zIndex,
                      position: "absolute",
                    }}
                    alt="sticker"
                    // onClick={() => console.log(sticker)}
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
