/* eslint-disable */

import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PhotoUpload({ eventUid }) {
  const [photoFile, setPhotoFile] = useState("");
  const photoRef = useRef();

  const savePhotoFile = () => {
    const photo = photoRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      setPhotoFile(reader.result);
    };
  };

  const submitPhotoFile = async (e) => {
    e.preventDefault();
    const photo = photoRef.current.files[0];

    if (photo) {
      const formData = new FormData();
      formData.append("file", photo);

      for (const data of formData) console.log(data);
      console.log(requests.events.album.postMedia(eventUid));
      await axios
        .post(requests.events.album.postMedia(eventUid),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <UploadForm onSubmit={submitPhotoFile}>
      <PhotoUploadLabel htmlFor="photoUpload">
          <PlusSign>+</PlusSign>
          <p>추가하기</p>
      </PhotoUploadLabel>
      <input
        type="file"
        accept={"image/*"}
        id="photoUpload"
        onChange={savePhotoFile}
        ref={photoRef}
        style={{ display: "none" }}
      />
    </UploadForm>
  );
}
{/* <img src={photoFile} alt="업로드된 사진" /> */}

const UploadForm = styled.form`
  display: flex;
  justify-contents: center;
  align-items: center;
`

const PhotoUploadLabel = styled.label`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: auto;
  font-weight: bold;
  font-size: 13px;
  color: #6B6B6B;
  cursor: pointer;
`;

const PlusSign = styled.p`
  margin: 0px;
  font-size: 30px;
`