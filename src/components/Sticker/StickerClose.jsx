/* eslint-disable */
import { useRecoilState } from "recoil";
import { stickerState } from "./Atom";
import exit from "../../assets/exit.svg";
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
      <img alt="exit" src={exit} style={{ width: "10px", position: "relative" }} />
    </button>
  );
}
