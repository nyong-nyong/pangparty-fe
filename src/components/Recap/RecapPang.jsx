import recapDdayText from "../../assets/recapDdayText.png";
import recap1 from "../../assets/recap1.png";

export default function RecapPang() {
  return (
    <div className="carouselDiv">
      <div className="carouselContentBlock">
        <img className="ddayTextImg" src={recapDdayText} alt="" />
        <img className="recapImg" src={recap1} alt="" />
        <p className="recapAboutText">
          nn명이 오늘을 축하하며
          <br />
          팡파레를 울렸어요
        </p>
      </div>
    </div>
  );
}
