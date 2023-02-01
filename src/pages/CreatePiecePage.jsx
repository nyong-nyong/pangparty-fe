import { useState } from "react";
import { Link } from "react-router-dom";
import RpThemeChange from "../components/RpTheme/RpThemeChange";
import "../components/CreatePiece/CreatePiece.css";

// 롤링페이퍼 작성하는 페이지

export default function CreatePiecePage() {
  // 작성되는 내용
  const [pieceContent, setPieceContent] = useState({
    rollingPaperPieceUid: "",
    writerUid: "",
    createTime: "",
    modifyTime: "",
    content: "",
    bgColor: "CFCFCF",
    fontFamily: "Pretendard",
    textColor: "000000",
    textAlign: "center",
  });

  // 테마 변경 활성화 여부
  const [themeChange, setThemeChange] = useState({
    font: false,
    align: true,
    color: false,
  });

  // 타이핑 중인 내용 확인 함수
  const pieceHandler = (e) => {
    if (e.target.className === "writerUid") {
      setPieceContent({
        rollingPaperPieceUid: "",
        writerUid: e.target.value,
        createTime: Date.now(),
        modifyTime: Date.now(),
        content: pieceContent.content,
        bgColor: "CFCFCF",
        fontFamily: "Pretendard",
        textColor: "000000",
        textAlign: "center",
      });
    } else if (e.target.className === "content") {
      setPieceContent({
        rollingPaperPieceUid: "",
        writerUid: pieceContent.writerUid,
        createTime: Date.now(),
        modifyTime: Date.now(),
        content: e.target.value,
        bgColor: "CFCFCF",
        fontFamily: "Pretendard",
        textColor: "000000",
        textAlign: "center",
      });
    }
  };

  // 작성 완료시 api post 이벤트 발생으로 수정 예정
  const postPiece = (e) => {
    console.log(e);
  };

  // 테마 변경을 위한 버튼
  const themeChangeHandler = (e) => {
    const newThemeChange = {
      font: false,
      align: false,
      color: false,
    };
    newThemeChange[e.target.value] = true;
    setThemeChange(newThemeChange);
  };

  return (
    <div className="createPieceContainer">
      {/* 상단 좌우 이동 버튼 임시 제작 */}
      <div className="createPiecePageHeader">
        <button type="button">이전</button>
        <h4>롤링페이퍼 작성페이지</h4>
        <button type="button" onClick={postPiece}>
          다음
        </button>
      </div>

      {/* 롤링페이퍼 작성 */}
      <div
        className="pieceContainer"
        onChange={pieceHandler}
        style={{
          backgroundColor: `#${pieceContent.bgColor}`,
          textAlign: `${pieceContent.textAlign}`,
          color: `#${pieceContent.textColor}`,
        }}
      >
        <textarea
          className="pieceContent"
          placeholder="내용을 입력해주세요"
          value={pieceContent.content}
          style={{ fontFamily: `${pieceContent.fontFamily}` }}
        />
        <div
          className="from"
          style={{ fontFamily: `${pieceContent.fontFamily}` }}
        >
          <p>From.</p>
          <input
            type="text"
            className="writerUid"
            placeholder=""
            value={pieceContent.writerUid}
          />
        </div>
      </div>

      {/* 버튼 눌렀을 때 그 버튼 기능에 맞는 compnent만 렌더링 합니다. */}
      <div className="buttonContainer">
        <button
          type="button"
          className="changeButton"
          id="fontChangeButton"
          value="font"
          onClick={themeChangeHandler}
        >
          T
        </button>
        <button
          type="button"
          className="changeButton"
          id="alignChangeButton"
          value="align"
          onClick={themeChangeHandler}
        >
          정렬
        </button>
        <button
          type="button"
          className="changeButton"
          id="colorChangeButton"
          value="color"
          onClick={themeChangeHandler}
        >
          컬러
        </button>
      </div>

      <RpThemeChange
        pieceContent={pieceContent}
        setPieceContent={setPieceContent}
        themeChange={themeChange}
      />

      <Link to="/rollingpaper">
        <button type="button" style={{ marginTop: "20px" }}>
          피스리스트로 가는 임시 이동 버튼
        </button>
      </Link>
    </div>
  );
}
