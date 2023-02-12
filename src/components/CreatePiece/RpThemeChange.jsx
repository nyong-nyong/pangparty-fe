import { useState } from "react";
import "./RPThemeChange.css";
import ThemeColors from "./ThemeColors";
import ThemeFont from "./ThemeFont";
import ThemeAlign from "./ThemeAlign";

function RpThemeChange() {
  // 테마 변경 활성화 여부
  const [themeChange, setThemeChange] = useState({
    font: false,
    align: false,
    color: false,
  });

  // 테마 변경을 위한 버튼
  const themeChangeHandler = (e) => {
    const newThemeChange = {
      font: false,
      align: false,
      color: false,
    };
    newThemeChange[e.target.value] = true;
    console.log(e.target.className);
    setThemeChange(newThemeChange);
  };

  return (
    <div>
      <div className="buttonContainer">
        <button
          type="button"
          className={themeChange.font ? "changeButton-active" : "changeButton"}
          id="fontChangeButton"
          value="font"
          onClick={themeChangeHandler}
        >
          T
        </button>
        <button
          type="button"
          className={themeChange.align ? "changeButton-active" : "changeButton"}
          id="alignChangeButton"
          value="align"
          onClick={themeChangeHandler}
        >
          정렬
        </button>
        <button
          type="button"
          className={themeChange.color ? "changeButton-active" : "changeButton"}
          id="colorChangeButton"
          value="color"
          onClick={themeChangeHandler}
        >
          컬러
        </button>
      </div>
      {themeChange.font && <ThemeFont />}
      {themeChange.align && <ThemeAlign />}
      {themeChange.color && <ThemeColors />}
    </div>
  );
}
export default RpThemeChange;
