import Slider from "react-slick";
// import banner1 from "../../assets/eventDefaultBanner1.png";
// import banner2 from "../../assets/eventDefaultBanner2.png";
import banner1 from "../../assets/Banner1.svg";
import banner2 from "../../assets/Banner2.svg";
import banner3 from "../../assets/Banner3.svg";

export default function HomeCarousel() {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div>
      <div className="homepageCarousel">
        <Slider {...settings}>
          <img src={banner1} alt="" />
          <img src={banner2} alt="" />
          <img src={banner3} alt="" />
        </Slider>
      </div>
    </div>
  );
}
