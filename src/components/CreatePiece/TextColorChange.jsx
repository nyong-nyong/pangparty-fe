import { useRecoilState } from "recoil";
import { textColorState } from "../../recoils/createPiece/Atoms";

function TextColorChange() {
  const setTextColorInfo = useRecoilState(textColorState);

  const colorChange = (e) => {
    e.preventDefault();
    const newColor = e.target.id;
    setTextColorInfo(newColor);
  };

  return (
    <div>
      <div className="colorsContainer" id="line-1">
        <div
          className="colorBox"
          onClick={colorChange}
          id="FF7A5C"
          aria-hidden="true"
          style={{ backgroundColor: "#FF7A5C" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="FFA48F"
          aria-hidden="true"
          style={{ backgroundColor: "#FFA48F" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="FFD5CC"
          aria-hidden="true"
          style={{ backgroundColor: "#FFD5CC" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="CFCFCF"
          aria-hidden="true"
          style={{ backgroundColor: "#CFCFCF" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="6B6B6B"
          aria-hidden="true"
          style={{ backgroundColor: "#6B6B6B" }}
        />
      </div>
      <div className="colorsContainer" id="line-2">
        <div
          className="colorBox"
          onClick={colorChange}
          id="678CFF"
          aria-hidden="true"
          style={{ backgroundColor: "#678CFF" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="AABFFF"
          aria-hidden="true"
          style={{ backgroundColor: "#AABFFF" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="D9E2FF"
          aria-hidden="true"
          style={{ backgroundColor: "#D9E2FF" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="B8B8B8"
          aria-hidden="true"
          style={{ backgroundColor: "#B8B8B8" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="444444"
          aria-hidden="true"
          style={{ backgroundColor: "#444444" }}
        />
      </div>
      <div className="colorsContainer" id="line-3">
        <div
          className="colorBox"
          onClick={colorChange}
          id="FFF493"
          aria-hidden="true"
          style={{ backgroundColor: "#FFF493" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="A6E9A8"
          aria-hidden="true"
          style={{ backgroundColor: "#A6E9A8" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="BEABF3"
          aria-hidden="true"
          style={{ backgroundColor: "#BEABF3" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="FBC5DC"
          aria-hidden="true"
          style={{ backgroundColor: "#FBC5DC" }}
        />
        <div
          className="colorBox"
          onClick={colorChange}
          id="000000"
          aria-hidden="true"
          style={{ backgroundColor: "#000000" }}
        />
      </div>
    </div>
  );
}

export default TextColorChange;
