import recapDdayText from "../../assets/recapDdayText.png";
import recap2 from "../../assets/recap2.png";

export default function RecapRp(props) {
  // const { rpWritersNum, rpNum } = props;

  const { writerNum, rpNum } = props;

  return (
    <div className="carouselDiv">
      <div className="carouselContentBlock">
        <img className="ddayTextImg" src={recapDdayText} alt="" />
        <img className="recapImg" src={recap2} alt="" />
        <p className="recapAboutText">
          {writerNum || 0}명이 {rpNum || 0}조각의 <br />
          롤링페이퍼를 작성했어요.
        </p>
      </div>
    </div>
  );
}
