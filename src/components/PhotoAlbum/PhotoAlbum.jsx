/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import styled from "styled-components";
import PhotoUpload from "./PhotoUpload";
import PhotoCarousel from "./PhotoCarousel";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import "./PhotoModal.scss";
import PhotoPreview from "./PhotoPreview";

export default function PhotoAlbum({ isPart, eventUid }) {
  const page = 0;
  const limit = 30;

  const [photoList, setPhotoList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [photoSelected, setPhotoSelected] = useState({});
  const [uploadPhoto, setUploadPhoto] = useState({});
  const [photoFile, setPhotoFile] = useState("");

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.events.album.mediaAll(eventUid, page, limit)
      );
      setPhotoList(request.data.media);
      // console.log(request.data.media);
    }
    fetchData();
  }, []);

  const handleModalClick = (photo) => {
    setModalOpen(true);
    setPhotoSelected(photo);
  };

  return (
    <div>
      <AlbumFrame>
        {isPart && (
          <AddContainer>
            <PhotoUpload
              setUploadModalOpen={setUploadModalOpen}
              setUploadPhoto={setUploadPhoto}
              setPhotoFile={setPhotoFile}
            />
          </AddContainer>
        )}
        <div
          className={uploadModalOpen ? "openModal photoModal" : "photoModal"}
        >
          <PhotoPreview
            eventUid={eventUid}
            uploadPhoto={uploadPhoto}
            photoFile={photoFile}
            setUploadModalOpen={setUploadModalOpen}
          />
        </div>
        {photoList.map((photo) => {
          if (photo) {
            return (
              <button
                type="button"
                key={photo.uid}
                onClick={() => handleModalClick(photo)}
                onKeyDown={() => handleModalClick(photo)}
                style={{
                  padding: "0px",
                  backgroundColor: "transparent",
                  border: "none",
                }}
              >
                <PhotoFrame src={photo.thumbnailUrl} />
              </button>
            );
          }
          return null;
        })}
      </AlbumFrame>
      <div className={modalOpen ? "openModal photoModal" : "photoModal"}>
        {modalOpen && photoSelected ? (
          <PhotoCarousel
            idx={photoList.indexOf(photoSelected)}
            // mediaUid={photoSelected.uid}
            setModalOpen={setModalOpen}
            eventUid={eventUid}
            photoList={photoList}
          />
        ) : null}
      </div>
    </div>
  );
}

const AlbumFrame = styled.div`
  display: flex;
  width: 100%;
  height: fit-contents;
  flex-flow: row wrap;
  gap: 15px;
  padding: 0px;
`;

const PhotoFrame = styled.img`
  display: flex;
  width: 102px;
  height: 102px;
  object-fit: contain;
  border-radius: 3px;
  box-shadow: 0px 0px 13px 4px rgba(209, 209, 209, 0.25);
`;

const AddContainer = styled.div`
  display: flex;
  border: 1px dashed #6b6b6b;
  width: 102px;
  height: 102px;
  justify-content: center;
`;
