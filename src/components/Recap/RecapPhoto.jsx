import recapDdayText from "../../assets/recapDdayText.png";
import recap3 from "../../assets/recap3.png";

export default function RecapPhoto(props) {
  const { albumNum } = props;
  return (
    <div className="carouselDiv">
      <div className="carouselContentBlock">
        <img className="ddayTextImg" src={recapDdayText} alt="" />
        <img className="recapImg" src={recap3} alt="" />
        <p>
          {albumNum || 0}장의 오늘을 위한 사진으로 <br /> 추억을 돌아보세요!
        </p>
      </div>
    </div>
  );
}
