import { useRecoilValue, useSetRecoilState } from "recoil";
import { fontFamilyState } from "../../recoils/createPiece/Atoms";

export default function ThemeFont() {
  const setFontInfo = useSetRecoilState(fontFamilyState);
  const activeFont = useRecoilValue(fontFamilyState);

  // 글씨체 변경 함수
  const fontChangeHandler = (e) => {
    e.preventDefault();
    const newPieceInfo = e.target.value;
    setFontInfo(newPieceInfo);
  };

  return (
    <div className="buttonContainer">
      <button
        type="button"
        className={activeFont === "Pretendard" ? "fontBtn-active" : "fontBtn"}
        value="Pretendard"
        onClick={fontChangeHandler}
      >
        프리텐다드
      </button>
      <button
        type="button"
        className={
          activeFont === "KyoboHandwriting2020A" ? "fontBtn-active" : "fontBtn"
        }
        value="KyoboHandwriting2020A"
        onClick={fontChangeHandler}
        style={{ fontFamily: "KyoboHandwriting2020A" }}
      >
        교보손글씨
      </button>
      <button
        type="button"
        className={activeFont === "KOTRAHOPE" ? "fontBtn-active" : "fontBtn"}
        value="KOTRAHOPE"
        onClick={fontChangeHandler}
        style={{ fontFamily: "KOTRAHOPE" }}
      >
        코트라 희망체
      </button>
    </div>
  );
}
