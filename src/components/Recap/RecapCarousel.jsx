import Slider from "react-slick";
import RecapPang from "./RecapPang";
import RecapRp from "./RecapRp";
import RecapPhoto from "./RecapPhoto";
import "../../styles/Recap.scss";

export default function RecapCarousel() {
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
          <RecapPang />
          <RecapRp />
          <RecapPhoto />
          <p>다음으로..</p>
        </Slider>
      </div>
    </div>
  );
}
