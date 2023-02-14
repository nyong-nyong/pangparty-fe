import classNames from "classnames";
import "./pieceListContianer.scss";

// 피스 리스트 내에 랜덤으로 뿌려줄 컨테이너
function PieceContainer({ piece, index }) {
  const styledRandom = () => {
    const hashKey = (13 / (index + 1) + 0.2) % 1;
    const x = Math.floor(hashKey);
    const y = Math.floor(hashKey);
    const rotate = Math.floor(hashKey * (index % 2 === 0 ? 20 : -10));
    return {
      transform: `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px)`,
      // background: "orange",
      // GET으로 받아와서 background랑 글씨체, 정렬 받아오기
      backgroundColor: `${piece.}`,
    };
  };
  return (
    <div className={classNames("pieceListContianer")} style={styledRandom()}>
      <div className="pieceContentContainer">{piece.content}</div>
      <div className="pieceWriterNameContainer">{piece.writerName}</div>
    </div>
  );
}

export default PieceContainer;
