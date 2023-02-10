import { useRecoilState } from "recoil";
import { textColorState } from "../../recoils/createPiece/Atoms";

export default function ThemeFont() {
  const setTextColorInfo = useRecoilState(textColorState);

  // 글씨체 변경 함수
  const fontChangeHandler = (e) => {
    e.preventDefault();
    const newPieceInfo = e.target.value;
    setTextColorInfo(newPieceInfo);
  };

  return (
    <div className="buttonContainer">
      <button
        type="button"
        className="changeButton"
        value="Pretendard"
        onClick={fontChangeHandler}
      >
        프리텐다드
      </button>
      <button
        type="button"
        className="changeButton"
        value="KyoboHandwriting2020A"
        onClick={fontChangeHandler}
      >
        교보손글씨
      </button>
      <button
        type="button"
        className="changeButton"
        value="KOTRAHOPE"
        onClick={fontChangeHandler}
      >
        코트라 희망체
      </button>
    </div>
  );
}
