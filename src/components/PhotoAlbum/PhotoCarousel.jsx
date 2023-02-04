/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "../../api/axios";
import requests from "../../api/requests";

import PhotoDetail from "./PhotoDetail";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PhotoCarousel({ mediaUid, setModalOpen, eventUid }) {
  const [photo, setPhoto] = useState({});
  const [photoList, setPhotoList] = useState([]);
  const [isFirst, setIsFirst] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const nowDetail = await axios.get(
        requests.events.album.getMediaDetail(eventUid, mediaUid)
      );
      setPhoto(nowDetail.data);
      console.log(nowDetail.data);
      if (nowDetail.data.prev) {
        const prevDetail = await axios.get(
          requests.events.album.getMediaDetail(eventUid, nowDetail.data.prev)
        );
        if (nowDetail.data.next) {
          const nextDetail = await axios.get(
            requests.events.album.getMediaDetail(eventUid, nowDetail.data.next)
          );
          setPhotoList([prevDetail.data, nowDetail.data, nextDetail.data]);
          return;
        }
        setPhotoList([prevDetail.data, nowDetail.data]);
        return;
      }
      setIsFirst(true);
      if (nowDetail.data.next) {
        const nextDetail = await axios.get(
          requests.events.album.getMediaDetail(eventUid, nowDetail.data.next)
        );
        setPhotoList([nowDetail.data, nextDetail.data]);
        return;
      }
      setPhotoList([nowDetail.data]);
    }
    fetchData();
  }, [mediaUid]);

  const style = {
    width: "350px",
    height: "400px",
  };

  const sliderSettingsDefault = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 1,
  };

  const sliderSettingsFirst = {
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 0,
  };

  return (
    <div style={style}>
      {photo.uid && !isFirst && (
        <Slider {...sliderSettingsDefault}>
          {photoList.map((item) => {
            if (item) {
              return (
                <PhotoDetail
                  key={item.uid}
                  photo={item}
                  setModalOpen={setModalOpen}
                  eventUid={eventUid}
                />
              );
            }
            return null;
          })}
        </Slider>
      )}
      {photo.uid && isFirst && (
        <Slider {...sliderSettingsFirst}>
          {photoList.map((item) => {
            if (item) {
              return (
                <PhotoDetail
                  key={item.uid}
                  photo={item}
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
