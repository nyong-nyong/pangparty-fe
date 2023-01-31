import React from 'react'
import PhotoCommentList from './PhotoCommentList'
import PhotoLikes from './PhotoLikes'
import styled from 'styled-components';

export default function PhotoDetail({photoSelected, setPhotoSelected, setModalOpen}) {
  const clickHandle = () => {
    setModalOpen(false);
  }

  return (
    <Modal>
      <span onClick={clickHandle}>X</span>
      <img src={photoSelected.mediaUrl} width="300px" height="200px"></img>
      <PhotoLikes />
      <PhotoCommentList />
    </Modal>
  )
}

const Modal = styled.div`
  position: absolute;
  top: 0px;
  width: 300px;
  height: 500px;
  border: 1px solid black;
  background-color: grey;
  z-index: 100;
`