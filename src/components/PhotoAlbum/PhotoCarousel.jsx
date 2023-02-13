/* eslint-disable jsx-a11y/control-has-associated-label */
// import { useEffect } from "react";
import Slider from "react-slick";
// import axios from "../../api/axios";
// import requests from "../../api/requests";

import PhotoDetail from "./PhotoDetail";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({ idx, setModalOpen, eventUid, photoList }) {
  // useEffect(() => {
  //   console.log(idx);
  //   console.log(photoList);
  // }, [photoList]);

  const style = {
    width: "350px",
    height: "400px",
  };

  const settings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: idx,
  };

  return (
    <div style={style}>
      {photoList && (
        <Slider {...settings}>
          {photoList.map((item) => {
            if (item) {
              return (
                <PhotoDetail
                  key={item.uid}
                  item={item}
                  setModalOpen={setModalOpen}
                  eventUid={eventUid}
                />
              );
            }
            return null;
          })}
        </Slider>
      )}
    </div>
  );
}

export default PhotoCarousel;
