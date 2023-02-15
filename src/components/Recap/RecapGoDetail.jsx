// import recapDdayText from "../../assets/recapDdayText.png";
import { Link } from "react-router-dom";
import Button from "../common/Button";
import recap4 from "../../assets/recap4.png";
// import Button from "../common/Button";

export default function RecapGoDetail(props) {
  const { eventUid } = props;
  return (
    <div className="carouselDivGoDetail">
      <div className="carouselContentBlock">
        {/* <img className="ddayTextImg" src={recapDdayText} alt="" /> */}
        <img className="recapImg" src={recap4} alt="" />
        <p className="recapAboutTextNormal" style={{ marginTop: "2px" }}>
          그럼 이제 받은 선물을 <br /> 꼼꼼히 확인하려 가볼까요?
        </p>
      </div>
      <div className="goDetailContainer">
        <Link to={`/gift/${eventUid}/detail`}>
          <Button color="orange-1">자세히 보기</Button>
        </Link>
      </div>
    </div>
  );
}
