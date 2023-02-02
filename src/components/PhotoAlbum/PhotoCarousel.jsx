/* eslint-disable */
import React from 'react'
import Slider from 'react-slick'
import PhotoDetail from './PhotoDetail';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({photoList, photoSelected, setModalOpen, albumId}) {

  const style = {
    width: "350px",
    height: "400px",
    // background: "grey"
  }

  const sliderSettings = {
    dots: true,
    lazyLoad: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: photoList.findIndex(photo => photo.uid === photoSelected.uid),
  }
  
  return (
    <div style={style}>
      <Slider {...sliderSettings}>
        {photoList.map((photo) => {
          if(photo) {
            return (
              <PhotoDetail 
                key={photo.uid}
                photo={photo} 
                setModalOpen={setModalOpen}
                albumId={albumId}
              />
            )
          }
          return null;
        })}
      </Slider>

    </div>
  )
}

export default PhotoCarousel