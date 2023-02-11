import { useState } from "react";
import TextColorChange from "./TextColorChange";
import BgColorChange from "./BgColorChange";

export default function ThemeColors() {
  // 컬러 변경 대상 지정 버튼
  const [colorTarget, setColorTarget] = useState({
    bgColor: true,
    textColor: false,
  });
  // 컬러 변경 대상 변경 함수
  const colorTargetHandler = (e) => {
    const newColorTarget = {
      bgColor: false,
      textColor: false,
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
          className={colorTarget.bgColor ? "fontBtn-active" : "fontBtn"}
          value="bgColor"
          onClick={colorTargetHandler}
        >
          배경색
        </button>
        <button
          type="button"
          className={colorTarget.textColor ? "fontBtn-active" : "fontBtn"}
          value="textColor"
          onClick={colorTargetHandler}
        >
          글자색
        </button>
      </div>
      {colorTarget.textColor && <TextColorChange />}
      {colorTarget.bgColor && <BgColorChange />}
    </div>
  );
}
