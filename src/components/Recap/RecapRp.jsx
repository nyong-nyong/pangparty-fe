// import { motion } from "framer-motion";
// import recapDdayText from "../../assets/recapDdayText.png";
import recap2 from "../../assets/recap2.png";

export default function RecapRp(props) {
  // const { rpWritersNum, rpNum } = props;

  const { writerNum, rpNum } = props;

  return (
    <div className="carouselDivRp">
      <div className="carouselContentBlock">
        {/* <img className="ddayTextImg" src={recapDdayText} alt="" /> */}
        <img className="recapImg" src={recap2} alt="" />
        <p className="recapAboutText">
          {writerNum || 0}명<span className="recapAboutTextNormal">이</span>{" "}
          {rpNum || 0}조각
          <span className="recapAboutTextNormal">
            의 <br />
            롤링페이퍼를 작성했어요!
          </span>
        </p>
      </div>
    </div>
  );
}
