import React from 'react'

export default function PhotoDetail({photoSelected, setPhotoSelected, setModalOpen}) {
  return (
    <div>{photoSelected.uid}</div>
  )
}
