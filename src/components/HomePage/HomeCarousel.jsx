import Slider from "react-slick";
import banner1 from "../../assets/eventDefaultBanner1.png";
import banner2 from "../../assets/eventDefaultBanner2.png";

export default function HomeCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="carouselContainer">
        <Slider {...settings}>
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
        </Slider>
      </div>
    </div>
  );
}
