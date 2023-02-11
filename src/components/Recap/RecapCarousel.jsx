import Slider from "react-slick";
import RecapPang from "./RecapPang";
import RecapRp from "./RecapRp";
import RecapPhoto from "./RecapPhoto";

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
      <h2> Single Item</h2>
      <div className="carouselContainer">
        <Slider {...settings}>
          <div className="carouselDiv">
            <RecapPang />
          </div>
          <div className="carouselDiv">
            <RecapRp />
          </div>
          <div className="carouselDiv">
            <RecapPhoto />
          </div>
          <p>다음으로..</p>
        </Slider>
      </div>
    </div>
  );
}
