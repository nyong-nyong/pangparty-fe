import { useRecoilState, useRecoilValue } from "recoil";
import {
  writerNameState,
  contentState,
  bgColorState,
  textColorState,
  fontFamilyState,
  textAlignState,
} from "../../recoils/createPiece/Atoms";

export default function PieceContent() {
  // 작성되는 내용
  const [contentInfo, setContentInfo] = useRecoilState(contentState);
  const [writerInfo, setWriterInfo] = useRecoilState(writerNameState);

  // value값만 사용하는 애들
  const bgColor = useRecoilValue(bgColorState);
  const textColor = useRecoilValue(textColorState);
  const fontFamily = useRecoilValue(fontFamilyState);
  const textAlign = useRecoilValue(textAlignState);

  // 타이핑 중인 내용 확인 함수
  const pieceHandler = (e) => {
    if (e.target.className === "writerName") {
      const newPieceInfo = e.target.value;
      setWriterInfo(newPieceInfo);
    }
    if (e.target.className === "pieceContent") {
      const newPieceInfo = e.target.value;
      setContentInfo(newPieceInfo);
    }
  };

  const testt = () => {
    console.log(contentInfo);
    console.log(writerInfo);
  };

  return (
    <div
      className="pieceContainer"
      onChange={pieceHandler}
      style={{
        backgroundColor: `#${bgColor}`,
      }}
    >
      <textarea
        className="pieceContent"
        placeholder="내용을 입력해주세요"
        defaultValue={contentInfo}
        style={{
          fontFamily: `${fontFamily}`,
          color: `#${textColor}`,
          textAlign: `${textAlign}`,
        }}
      />
      <div
        className="from"
        style={{
          width: "100px",
          color: `#${textColor}`,
          fontFamily: `${fontFamily}`,
        }}
      >
        <p className="fromTag">From.</p>
        <input
          type="text"
          className="writerName"
          placeholder=""
          defaultValue={writerInfo}
          style={{
            display: "inline-block",
            fontFamily: `${fontFamily}`,
            color: `#${textColor}`,
          }}
        />
        <button type="button" onClick={testt}>
          test
        </button>
      </div>
    </div>
  );
}
