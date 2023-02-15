/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from "react-router-dom";
import Slider from "react-slick";
import RecapPang from "./RecapPang";
import RecapRp from "./RecapRp";
import RecapPhoto from "./RecapPhoto";
import RecapGoDetail from "./RecapGoDetail";
import "../../styles/Recap.scss";
import Button from "../common/Button";

export default function RecapCarousel(props) {
  const { eventInfo, eventUid } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="carouselContainer">
        <Slider {...settings}>
          <RecapPang pangNum={eventInfo.eventExports[0].eventLikeCnt} />
          <RecapRp
            writerNum={eventInfo.eventExports[0].rollingPaperParticipantCnt}
            rpNum={eventInfo.eventExports[0].rollingPaperCnt}
          />
          <RecapPhoto albumNum={eventInfo.eventExports[0].albumMediaCnt} />
          <RecapGoDetail />
        </Slider>
        <div className="btnContainer">
          <Link to={`/events/${eventUid}`}>
            <Button color="orange-1">선물 확인하러 가기</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
