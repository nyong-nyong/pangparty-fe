import classNames from "classnames";
import "./pieceListContianer.scss";

function PieceContainer({ piece }) {
  const styledRandom = (idx) => {
    const hashKey = (13 / (idx + 1) + 0.2) % 1;
    const x = Math.floor(hashKey * 40);
    const y = Math.floor(hashKey * 40);
    const rotate = Math.floor(hashKey * (idx % 2 === 0 ? 30 : -30));
    return {
      transform: `rotate(${rotate}deg) translateX(${x}px) translateY(${y}px)`,
    };
  };
  return (
    <div className={classNames("pieceListContianer")} style={{ styledRandom }}>
      {piece.content}
    </div>
  );
}

export default PieceContainer;
