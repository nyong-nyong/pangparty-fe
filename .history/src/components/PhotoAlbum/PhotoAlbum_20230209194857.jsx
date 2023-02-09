import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoUpload from "./PhotoUpload";
import PhotoCarousel from "./PhotoCarousel";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PhotoAlbum() {
  const eventUid = 300001;
  const page = 1;
  const limit = 3000;

  const [photoList, setPhotoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.events.album.mediaAll(eventUid, page, limit)
      );
      setPhotoList(request.data.media);
    }
    fetchData();
  }, []);

  const handleModalClick = (photo) => {
    setModalOpen(true);
    setPhotoSelected(photo);
  };

  return (
    <div>
      <h1>PhotoAlbum</h1>
      <AlbumFrame>
        {photoList.map((photo) => {
          if (photo) {
            return (
              <button
                type="button"
                key={photo.uid}
                onClick={() => handleModalClick(photo)}
                onKeyDown={() => handleModalClick(photo)}
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                <PhotoFrame src={photo.mediaUrl} />
              </button>
            );
          }
          return null;
        })}
      </AlbumFrame>
      <br />
      {modalOpen && (
        <PhotoCarousel
          mediaUid={photoSelected.uid}
          setModalOpen={setModalOpen}
          eventUid={eventUid}
        />
      )}
      <br />
      <PhotoUpload eventUid={eventUid} />
    </div>
  );
}

const AlbumFrame = styled.div`
  display: flex;
  width: auto;
  height: fit-contents;
  flex-flow: row wrap;
  gap: 5
  px;
`;

const PhotoFrame = styled.img`
  display: flex;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`;
