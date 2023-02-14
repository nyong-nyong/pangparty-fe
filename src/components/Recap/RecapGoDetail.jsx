import recapDdayText from "../../assets/recapDdayText.png";
import recap4 from "../../assets/recap4.png";
// import Button from "../common/Button";

export default function RecapGoDetail() {
  return (
    <div className="carouselDiv">
      <div className="carouselContentBlock">
        <img className="ddayTextImg" src={recapDdayText} alt="" />
        <img className="recapImg" src={recap4} alt="" />
        <p className="recapAboutText">
          그럼 이제 받은 선물을 꼼꼼히 확인하려 가볼까요?
        </p>
      </div>
    </div>
  );
}
