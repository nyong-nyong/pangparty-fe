/* eslint-disable */

import { useState, useRef } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./SignUpImage.scss";

export default function SignUpImage() {
  const [profileImgFile, setProfileImgFile] = useState("");
  const photoRef = useRef();

  const saveProfileImgFile = () => {
    const profileImg = profileImgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(profileImg);
    reader.onloadend = () => {
      setProfileImgFile(reader.result);
    };
  };

  const savePhotoFile = () => {
    const photo = photoRef.current.files[0];
    setUploadPhoto(photo);
    setUploadModalOpen(true);

    const reader = new FileReader();
    reader.readAsDataURL(photo);
    reader.onloadend = () => {
      setPhotoFile(reader.result);
    };
  };

  return (
    <form className="uploadForm">
      <label htmlFor="photoUpload" className="input-file-button">
        <p>추가하기</p>
      </label>
      <input
        type="file"
        accept={"image/*"}
        id="photoUpload"
        onChange={savePhotoFile}
        ref={photoRef}
        style={{ display: "none" }}
      />
    </form>
  );
}
