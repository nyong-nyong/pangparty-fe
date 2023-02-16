/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import "./PhotoModal.scss";
import "../common/Button.scss";

export default function PhotoPreview({
  eventUid,
  uploadPhoto,
  photoFile,
  setUploadModalOpen,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    if (!photoFile) return;
    setPreview(photoFile);
  }, [photoFile]);

  const submitPhotoFile = async (e) => {
    if (uploadPhoto) {
      const formData = new FormData();
      formData.append("file", uploadPhoto);

      await axios
        .post(requests.events.album.postMedia(eventUid), formData, {
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
    <form onSubmit={submitPhotoFile}>
      <div className="detailPhotoContainer columnCenter">
        <button
          type="button"
          onClick={() => setUploadModalOpen(false)}
          className="closeBtn"
        />
        {uploadPhoto ? (
          <>
            <img
              src={preview}
              alt="업로드된 사진"
              style={{ width: "290px", height: "290px" }}
              className="albumImg"
            />
            <NoticeSpan>권장 이미지 크기: 290x * 290px, 5MB이하</NoticeSpan>
            <button type="submit" className="commonButton small orange-1">
              제출하기
            </button>
          </>
        ) : null}
      </div>
    </form>
  );
}

const NoticeSpan = styled.span`
  font-size: 13px;
`;
