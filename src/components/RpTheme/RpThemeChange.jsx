import { useState } from "react";
import "./RPThemeChange.css";
import TextColorChange from "./TextColorChange";
import BgColorChange from "./BgColorChange";

function RpThemeChange({ pieceContent, setPieceContent, themeChange }) {
  // 컬러 변경 대상 지정 버튼
  const [colorTarget, setColorTarget] = useState({
    textColor: true,
    bgColor: false,
  });

  // 글씨체 변경 함수
  const fontChangeHandler = (e) => {
    e.preventDefault();
    const newPieceInfo = { ...pieceContent };
    newPieceInfo.fontFamily = e.target.value;
    setPieceContent(newPieceInfo);
  };

  // 정렬 변경 함수
  const alignChangeHandler = (e) => {
    e.preventDefault();
    const newPieceInfo = { ...pieceContent };
    newPieceInfo.textAlign = e.target.value;
    setPieceContent(newPieceInfo);
  };

  // 컬러 변경 대상 변경 함수
  const colorTargetHandler = (e) => {
    const newColorTarget = {
      textColor: false,
      bgColor: false,
    };
    newColorTarget[e.target.value] = true;
    setColorTarget(newColorTarget);
  };

  if (themeChange.font) {
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
  if (themeChange.align) {
    return (
      <div className="buttonContainer">
        <button
          type="button"
          className="changeButton"
          value="left"
          onClick={alignChangeHandler}
        >
          좌측
        </button>
        <button
          type="button"
          className="changeButton"
          value="center"
          onClick={alignChangeHandler}
        >
          중간
        </button>
        <button
          type="button"
          className="changeButton"
          value="right"
          onClick={alignChangeHandler}
        >
          우측
        </button>
      </div>
    );
  }
  if (themeChange.color) {
    return (
      <div>
        {/* 버튼 눌렀을 때 그 버튼 기능에 맞는 compnent만 렌더링 합니다. */}
        <div className="buttonContainer">
          <button
            type="button"
            className="changeButton"
            value="textColor"
            onClick={colorTargetHandler}
          >
            글자색
          </button>
          <button
            type="button"
            className="changeButton"
            value="bgColor"
            onClick={colorTargetHandler}
          >
            배경색
          </button>
        </div>
        {colorTarget.textColor && (
          <TextColorChange
            pieceContent={pieceContent}
            setPieceContent={setPieceContent}
          />
        )}
        {colorTarget.bgColor && (
          <BgColorChange
            pieceContent={pieceContent}
            setPieceContent={setPieceContent}
          />
        )}
      </div>
    );
  }
  return <div>암것도없지롱</div>;
}

export default RpThemeChange;
