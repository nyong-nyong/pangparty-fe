import React from 'react'
import PhotoCommentList from './PhotoCommentList'
import PhotoLikes from './PhotoLikes'

export default function PhotoDetail({photoSelected, setPhotoSelected, setModalOpen}) {
  return (
    <div>
      {photoSelected.uid}
      <PhotoLikes />
      <PhotoCommentList />
    </div>
  )
}
