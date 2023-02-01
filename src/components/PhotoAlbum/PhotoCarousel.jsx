import axios from '../../api/axios';
import requests from '../../api/requests';
import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import PhotoDetail from './PhotoDetail';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({mediaUid, setModalOpen, eventUid}) {
  const [photo, setPhoto] = useState({});
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const nowDetail = await axios.get(requests.events.album.getMediaDetail(eventUid, mediaUid));
      setPhoto(nowDetail.data);
      console.log(nowDetail.data)
      if(nowDetail.data.prev) {
        const prevDetail = await axios.get(requests.events.album.getMediaDetail(eventUid, nowDetail.data.prev));
        if(nowDetail.data.next) {
          const nextDetail = await axios.get(requests.events.album.getMediaDetail(eventUid, nowDetail.data.next)); 
          setPhotoList([prevDetail.data, nowDetail.data, nextDetail.data])
          // sliderSettings.initialSlide = 1;
          // console.log(sliderSettings)
          // setSliderSettings({...sliderSettings, initialSlide:2})
          return;
        }
        setPhotoList([prevDetail.data, nowDetail.data, {}]);
        // sliderSettings.initialSlide = 1;
        // console.log(sliderSettings)
        // setSliderSettings({...sliderSettings, initialSlide:1})
        return;
      }
      if(nowDetail.data.next) {
        console.log(nowDetail.data.next)
        console.log(requests.events.album.getMediaDetail(eventUid, nowDetail.data.next))
        const nextDetail = await axios.get(requests.events.album.getMediaDetail(eventUid, nowDetail.data.next)); 
        setPhotoList([{}, nowDetail.data, nextDetail.data])
        // console.log([nowDetail.data, nextDetail.data])
        // sliderSettings.initialSlide = 0;
        // console.log(sliderSettings)
        // setSliderSettings({...sliderSettings, initialSlide:0})
        return;
      }
      setPhotoList([{}, nowDetail.data, {}]);
      // sliderSettings.initialSlide = 0;
      // console.log(sliderSettings)
      // setSliderSettings({...sliderSettings, initialSlide:0})
    }
    fetchData();
  }, [mediaUid]);

  const style = {
    width: "350px",
    height: "400px",
  };

  // const [sliderSettings, setSliderSettings] = useState({
  //   lazyLoad: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   initialSlide: 0,
  // })

  const sliderSettings = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    infinite: false
  }
  

  const check = () => {
    console.log({...sliderSettings});
    console.log(photoList);
  }

  return (
    <div style={style}>
      {photo.uid && <Slider {...sliderSettings}>
        {photoList.map((item) => {
          if(item) {
            if(!item.uid) {
              return <></>
            }
            return (
              <PhotoDetail 
                key={item.uid}
                photo={item}
                setModalOpen={setModalOpen}
                eventUid={eventUid}
              />
            )
          }
          return null;
        })}
      </Slider>
      }
      <button onClick={check}></button>
    </div>
  )
}

export default PhotoCarousel;
