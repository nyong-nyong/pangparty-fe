import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PhotoUpload from './PhotoUpload';

export default function PhotoAlbum() {

  const [dummyPhotos, setDummyPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('http://localhost:4000/requests');
      setDummyPhotos(request.data);
    }
    fetchData();
  }, [])

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
          } else {
            return null
          }
        })}
      </AlbumFrame>
      <PhotoUpload/>
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