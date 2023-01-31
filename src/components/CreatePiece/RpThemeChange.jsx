import "./RPThemeChange.css";

function RpThemeChange({
  pieceContent,
  setPieceContent,
  themeChange,
  setThemeChange,
}) {
  const colorChange = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(e.target.id);
    // const newPieceInfo = {
    //   rollingPaperPieceUid: pieceContent.rollingPaperPieceUid,
    //   writerUid: pieceContent.writerUid,
    //   createTime: Date.now(),
    //   modifyTime: Date.now(),
    //   content: pieceContent.content,
    //   bgColor: "CFCFCF",
    //   fontFamily: pieceContent.fontFamily,
    //   textColor: pieceContent.textColor,
    //   textAlign: pieceContent.textAlign,
    // };
    const newPieceInfo = { ...pieceContent };
    newPieceInfo.bgColor = e.target.id;
    setPieceContent(newPieceInfo);
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
        <div className="buttonHeader">
          <button type="button">글자색</button>
          <button type="button">배경색</button>
        </div>
        <div className="colorsContainer">
          <div
            className="colorBox"
            onClick={colorChange}
            id="FF7A5C"
            aria-hidden="true"
            style={{ backgroundColor: "#FF7A5C" }}
          />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
        </div>
        <div className="colorsContainer">
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
        </div>
        <div className="colorsContainer">
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
          <div className="colorBox" style={{ backgroundColor: "#FF7A5C" }} />
        </div>
      </div>
    );
  }
  return <div>암것도없지롱</div>;
}

export default RpThemeChange;
