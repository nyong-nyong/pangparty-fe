import { useRecoilValue, useSetRecoilState } from "recoil";
import { textAlignState } from "../../recoils/createPiece/Atoms";

export default function ThemeAlign() {
  const setTextAlignInfo = useSetRecoilState(textAlignState);
  const activeAlign = useRecoilValue(textAlignState);

  // 정렬 변경 함수
  const alignChangeHandler = (e) => {
    e.preventDefault();
    const newPieceInfo = e.target.value;
    setTextAlignInfo(newPieceInfo);
  };
  return (
    <div className="buttonContainer">
      <button
        type="button"
        className={activeAlign === "left" ? "fontBtn-active" : "fontBtn"}
        value="left"
        onClick={alignChangeHandler}
      >
        좌측
      </button>
      <button
        type="button"
        className={activeAlign === "center" ? "fontBtn-active" : "fontBtn"}
        value="center"
        onClick={alignChangeHandler}
      >
        중간
      </button>
      <button
        type="button"
        className={activeAlign === "right" ? "fontBtn-active" : "fontBtn"}
        value="right"
        onClick={alignChangeHandler}
      >
        우측
      </button>
    </div>
  );
}
