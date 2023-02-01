import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import PhotoUpload from './PhotoUpload';
import PhotoCarousel from './PhotoCarousel';

export default function PhotoAlbum() {

  const tmpAlbumId = 300001;

  const [dummyPhotos, setDummyPhotos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`https://ee36ec81-32f6-4dd1-8f67-4b330393e56e.mock.pstmn.io/events/${tmpAlbumId}/album?page=1&limit=30`
      );
      setDummyPhotos(request.data.media);
    }
    fetchData();
  }, [dummyPhotos])

  const handleModalClick = (photo) => {
    setModalOpen(true)
    setPhotoSelected(photo)
  }

  return (
    <div>
      <h1>PhotoAlbum</h1>
      <AlbumFrame>
        {dummyPhotos.map((photo) => {
          if(photo) {
            return (
              <div key={photo.uid} onClick={() => handleModalClick(photo)}>
                <PhotoFrame src={photo.mediaUrl}/>
              </div>
            )
          } else {
            return null
          }
        })}
      </AlbumFrame>
      <br/>
      {modalOpen && 
        <PhotoCarousel 
          photoList={dummyPhotos}
          photoSelected={photoSelected}
          setModalOpen={setModalOpen}
          albumId={tmpAlbumId}
        />
      }
      <br/>
      <PhotoUpload albumId={tmpAlbumId}/>
    </div>
  )
}

const AlbumFrame = styled.div`
  display: flex;
  width: 320px;
  height: fit-contents;
  flex-flow: row wrap;
  gap: 10px;
`;

const PhotoFrame = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;
