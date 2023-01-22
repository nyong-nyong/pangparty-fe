import React from 'react'
import styled from 'styled-components'

export default function PhotoAlbum() {

  const dummyPhotos = [
    {
      uid: 1,
      event_uid: 1,
      photo_url: 'https://cdn.pixabay.com/photo/2023/01/12/18/08/beach-7714610_960_720.jpg',
      created_time: '',
      taken_time: '',
      taken_lat: '',
      taken_lng: '',
    },
    {
      uid: 2,
      event_uid: 2,
      photo_url: 'https://cdn.pixabay.com/photo/2022/07/04/04/37/musician-7300353_960_720.jpg',
      created_time: '',
      taken_time: '',
      taken_lat: '',
      taken_lng: '',
    },
    {
      uid: 3,
      event_uid: 3,
      photo_url: 'https://cdn.pixabay.com/photo/2022/01/13/14/02/mother-6935336_960_720.jpg',
      created_time: '',
      taken_time: '',
      taken_lat: '',
      taken_lng: '',
    },
    {
      uid: 4,
      event_uid: 4,
      photo_url: 'https://cdn.pixabay.com/photo/2021/11/12/11/09/kangaroo-6788674_960_720.jpg',
      created_time: '',
      taken_time: '',
      taken_lat: '',
      taken_lng: '',
    },
  ];

  return (
    <div>
      <h1>PhotoAlbum</h1>
      <AlbumFrame>
        {dummyPhotos.map((photo) => {
          if(photo) {
            return (
              <div key={photo.uid}>
                <PhotoFrame src={photo.photo_url}/>
              </div>
            )
          }
        })}
      </AlbumFrame>
    </div>
  )
}

const AlbumFrame = styled.div`
  display: flex;
  width: 320px;
  height: fit-contents;
  flex-flow: row wrap;
  gap: 10px
`

const PhotoFrame = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`