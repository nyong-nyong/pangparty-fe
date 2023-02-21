/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState, useEffect, CSSProperties } from "react";
import FadeLoader from "react-spinners/ClipLoader";
import styled from "styled-components";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import "./PhotoModal.scss";
import "../common/Button.scss";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export default function PhotoPreview({
  eventUid,
  uploadPhoto,
  photoFile,
  setUploadModalOpen,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#FF7A5C");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    if (!photoFile) return;
    setPreview(photoFile);
  }, [photoFile]);

  const uploadLoading = () => {
    location.reload();
  };

  const submitPhotoFile = async (e) => {
    if (uploadPhoto) {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      formData.append("file", uploadPhoto);

      await axios
        .post(requests.events.album.postMedia(eventUid), formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          uploadLoading();
          console.log(response);
        })
        .catch((error) => {
          uploadLoading();
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
            {loading && (
              <LoadingDiv>
                <FadeLoader
                  color={color}
                  // loading={loading}
                  // cssOverride={override}
                  size={40}
                  width={10}
                  // aria-label="Loading Spinner"
                  // data-testid="loader"
                />
              </LoadingDiv>
            )}
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

const LoadingDiv = styled.div`
  display: flex;
  position: absolute;
  width: 290px;
  height: 290px;
  justify-content: center;
  align-items: center;
  background-color: rgba(217, 217, 217, 0.7);
`;
