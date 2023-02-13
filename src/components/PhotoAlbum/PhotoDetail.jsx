/* eslint-disable */

import axios from "../../api/axios";
import requests from "../../api/requests";
import styled from "styled-components";
import PhotoCommentList from "./PhotoCommentList";
import PhotoLikes from "./PhotoLikes";
import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";

export default function PhotoDetail({ item, setModalOpen, eventUid }) {
  const [photo, setPhoto] = useState({});
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  // useEffect(() => {
  //   console.log("확인", photo);
  // }, [photo]);

  const clickHandle = () => {
    setModalOpen(false);
  };

  const handleDeleteBtn = (e) => {
    location.reload();
    
    async function photoDelete(mediaUid) {
      await axios
        .delete(requests.events.album.delMedia(eventUid, mediaUid))
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
    photoDelete(photo.uid);
    setModalOpen(false);
  }

  useEffect(() => {
    // console.log("사진 정보 : ", photo);
    async function fetchData() {
      if(!item.uid) return;
      await axios.get(
        requests.events.album.getMediaDetail(eventUid, item.uid)
      )
      .then((res) => {
        setPhoto(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
    }
    fetchData();
  }, [item])

  return (
    <div>
      <span onClick={clickHandle}>X</span>
      <span>{photo.uid}</span>
      {(photo.memberId === user && user) ? <button onClick={handleDeleteBtn}>삭제</button> : null}
      {user ? <span>{user}</span> : null}
      <img src={photo.mediaUrl} width="300px" height="300px" />
      <PhotoLikes
        mediaUid={photo.uid}
        eventUid={eventUid}
        isLikedProps={photo.liked}
        likeCnt={photo.likeCount}
      />
      <PhotoCommentList mediaUid={photo.uid} eventUid={eventUid} />
    </div>
  );
}

const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  background-color: grey;
  z-index: 100;
`;
