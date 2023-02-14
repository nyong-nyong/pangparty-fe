/* eslint-disable */

import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import PhotoCommentList from "./PhotoCommentList";
import PhotoLikes from "./PhotoLikes";
import useAuth from "../../hooks/useAuth";
import "./PhotoModal.scss";

export default function PhotoDetail({ item, setModalOpen, eventUid }) {
  const [photo, setPhoto] = useState({});
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [commentLength, setCommentLength] = useState(0);

  useEffect(() => {
    setUser(auth.user);
  }, [user]);


  const handleDeleteBtn = () => {
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
      if (!item.uid) return;
      await axios
        .get(requests.events.album.getMediaDetail(eventUid, item.uid))
        .then((res) => {
          setPhoto(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [item]);

  return (
    <div className="detailPhotoContainer">
      {photo.memberId === user && user ? (
        <button
          onClick={handleDeleteBtn}
          className="trashBtn"
        />
      ) : null}
      <img src={photo.mediaUrl} width="290px" height="290px" />
      <PhotoLikes
        mediaUid={photo.uid}
        eventUid={eventUid}
        isLikedProps={photo.liked}
        likeCnt={photo.likeCount}
        commentLength={commentLength}
      />
      <PhotoCommentList
        mediaUid={photo.uid}
        eventUid={eventUid}
        commentLength={commentLength}
        setCommentLength={setCommentLength}
      />
    </div>
  );
}
