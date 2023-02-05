/* eslint-disable */
import { useRecoilState } from "recoil";
import { stickerState } from "./Atom";
import exit from "../../assets/exit.png";
import "./MoveablePiece.css";

export default function StickerClose() {
  const [sticker, setSticker] = useRecoilState(stickerState);

  const onClickClose = (e) => {
    e.preventDefault();
    setSticker(undefined);
    // console.log("close");
  };

  return (
    <button
      className="stickerClose"
      onClick={(e) => {
        onClickClose(e);
      }}
    >
      <img
        alt="exit"
        src={`${process.env.PUBLIC_URL}/image/exit.png`}
        style={{ width: "10px" }}
      />
    </button>
  );
}
