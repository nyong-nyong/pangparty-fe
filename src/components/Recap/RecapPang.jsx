// import { motion } from "framer-motion";
// import recapDdayText from "../../assets/recapDdayText.png";
import recap1 from "../../assets/recap1.png";

export default function RecapPang(props) {
  const { pangNum } = props;
  return (
    <div className="carouselDiv">
      <div className="carouselContentBlock">
        {/* <img className="ddayTextImg" src={recapDdayText} alt="" /> */}
        <img className="recapImg" src={recap1} alt="" />
        <p className="recapAboutText">
          {pangNum || 0}명
          <span className="recapAboutTextNormal">
            이 오늘을 축하하며
            <br />
            팡파레를 울렸어요!
          </span>
        </p>
      </div>
    </div>
  );
}
