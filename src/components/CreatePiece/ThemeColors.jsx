import { useState } from "react";
import TextColorChange from "./TextColorChange";
import BgColorChange from "./BgColorChange";

export default function ThemeColors() {
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
      {colorTarget.textColor && <TextColorChange />}
      {colorTarget.bgColor && <BgColorChange />}
    </div>
  );
}
