import axios from '../../api/axios';
import requests from '../../api/requests';
import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import PhotoDetail from './PhotoDetail';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({mediaUid, setModalOpen, eventUid}) {
  const [photo, setPhoto] = useState({});
  const [prevPhotoUid, setPrevPhotoUid] = useState({});
  const [nextPhotoUid, setNextPhotoUid] = useState({});
  const [photoList, setPhotoList] = useState([]);

  useEffect(() => {
    function getPhotoList(prevDetail, nowDetail, nextDetail) {
      const newPhotoList = [prevDetail, nowDetail, nextDetail];
      setPhotoList(newPhotoList);
      console.log(photoList)
      return setPhoto(nowDetail);
    }

    async function fetchData() {
      const nowDetail = await axios.get(requests.events.album.getDetail(eventUid, mediaUid));
      const prevMediaUid = await nowDetail.data.prev;
      const nextMediaUid = await nowDetail.data.next;
      const prevDetail = await axios.get(requests.events.album.getDetail(eventUid, prevMediaUid));
      const nextDetail = await axios.get(requests.events.album.getDetail(eventUid, nextMediaUid));
    }
    fetchData();
  }, []);
// useEffect 덩어리로 다 fetch 해오기
  useEffect(() => {
    async function fetchData
  }, [])

  const style = {
    width: "350px",
    height: "400px",
  };

  const sliderSettings = {
    dots: false,
    lazyLoad: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div style={style}>
      {photoList[0] ? <span>{photoList[0].uid}</span> : "ㅎㅎ"}
      {/* <Slider {...sliderSettings}>
        {photoList.map((item) => {
          if(item) {
            return (
              <span key={item.uid}>{item.uid}</span>
              // <PhotoDetail 
              //   key={item.uid}
              //   photo={item} 
              //   setModalOpen={setModalOpen}
              //   eventUid={eventUid}
              // />
            )
          }
          return null;
        })}
      </Slider> */}

    </div>
  )
}

export default PhotoCarousel;
