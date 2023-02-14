import { motion } from "framer-motion";
import recapDdayText from "../../assets/recapDdayText.png";
import recap1 from "../../assets/recap1.png";

export default function RecapPang(props) {
  const { pangNum } = props;
  return (
    <motion.div
      className="carouselDiv"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
    >
      <div className="carouselContentBlock">
        <img className="ddayTextImg" src={recapDdayText} alt="" />
        <img className="recapImg" src={recap1} alt="" />
        <p className="recapAboutText">
          {pangNum || 0}명이 오늘을 축하하며
          <br />
          팡파레를 울렸어요
        </p>
      </div>
    </motion.div>
  );
}
