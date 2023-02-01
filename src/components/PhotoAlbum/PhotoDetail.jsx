import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PhotoCommentList from './PhotoCommentList'
import PhotoLikes from './PhotoLikes'

export default function PhotoDetail({photo, setModalOpen, albumId}) {
  const clickHandle = () => {
    setModalOpen(false);
  }

  return (
    <div>
      <span onClick={clickHandle}>X</span>
      <img src={photo.mediaUrl} width="300px" height="200px"></img>
      <PhotoLikes photo={photo} albumId={albumId}/>
      <PhotoCommentList photo={photo} albumId={albumId}/>
    </div>
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