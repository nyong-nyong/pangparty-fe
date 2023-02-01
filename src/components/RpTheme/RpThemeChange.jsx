import { useState } from "react";
import "./RPThemeChange.css";
import TextColorChange from "./TextColorChange";
import BgColorChange from "./BgColorChange";

function RpThemeChange({ pieceContent, setPieceContent, themeChange }) {
  // const colorChange = (e) => {
  //   e.preventDefault();
  //   const newPieceInfo = { ...pieceContent };
  //   newPieceInfo.bgColor = e.target.id;
  //   setPieceContent(newPieceInfo);
  // };

  // 컬러 변경 대상 지정 버튼
  const [colorTarget, setColorTarget] = useState({
    textColor: true,
    bgColor: false,
  });

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
      <div>
        <h2>폰트변경</h2>
      </div>
    );
  }
  if (themeChange.align) {
    return (
      <div>
        <h2>정렬 변경</h2>
      </div>
    );
  }
  if (themeChange.color) {
    return (
      <div>
        <h2>배경색 변경</h2>
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
