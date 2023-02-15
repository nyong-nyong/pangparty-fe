/* eslint-disable */

import { useState, useRef } from "react";
import styled from "styled-components";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PhotoUpload({ setUploadModalOpen, setUploadPhoto, setPhotoFile }) {
  const photoRef = useRef();

  const savePhotoFile = () => {
    const photo = photoRef.current.files[0];
    setUploadPhoto(photo);
    setUploadModalOpen(true)

    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      setPhotoFile(reader.result);
    };
  };

  return (
    <UploadForm>
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

const UploadForm = styled.div`
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