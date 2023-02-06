/* eslint-disable */

import styled from "styled-components";
import PhotoCommentList from "./PhotoCommentList";
import PhotoLikes from "./PhotoLikes";

export default function PhotoDetail({ photo, setModalOpen, eventUid }) {
  const clickHandle = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <span onClick={clickHandle}>X</span>
      <span>{photo.uid}</span>
      <img src={photo.mediaUrl} width="300px" height="200px" />
      <PhotoLikes
        mediaUid={photo.uid}
        eventUid={eventUid}
        isLikedProps={photo.isLiked}
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
