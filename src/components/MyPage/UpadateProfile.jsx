/* eslint-disable react/button-has-type */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import iconImg from "../../assets/updateProfile.svg";
// import photoImg from "../../assets/recap4.png";
import Button from "../common/Button";
import "./UpdateProfile.scss";
// import useUserAction from "../../hooks/useUserAction";

export default function UpadateProfile(props) {
  const { originProfileInfo } = props;

  const [profileInfo, setProfileInfo] = useState(undefined);

  const auth = useAuth();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setUser(auth.user);
    async function fetchData() {
      if (!user) return;
      setProfileInfo(originProfileInfo);
    }
    fetchData();
  }, [user]);

  const profileChangeHandler = (e) => {
    console.log(e.target.value);
    const newInfo = { ...profileInfo };
    if (e.target.id === "editName") {
      newInfo.name = e.target.value;
      setProfileInfo(newInfo);
    }
    if (e.target.id === "editIntroduction") {
      newInfo.introduction = e.target.value;
      setProfileInfo(newInfo);
    }
  };

  const submitEditProfile = () => {
    const submit = async () => {
      await axios
        .put(requests.profile.putProfileInfo(), profileInfo, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          navigate(-1);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    submit();
  };

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

      await axios
        .post(requests.profile.postProfilePicture(), formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);
          const newInfo = { ...profileInfo };
          newInfo.imgUrl = response.data.thumbnailUrl;
          setProfileInfo(newInfo);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <div className="updateHeader">
        <img src={iconImg} alt="" style={{ width: "150px" }} />
        <h3>프로필 변경하기 </h3>
      </div>
      <div className="updatedContainer">
        <div className="profilePreviewContainer">
          <div className="profileimgBox">
            <img
              className="profileImg"
              src={`${photoFile || (profileInfo && profileInfo.imgUrl)}`}
              alt="profileimg"
            />
          </div>
          <div className="profileBox">
            <p className="userId">{profileInfo && profileInfo.id}</p>
            <input
              className="userInputName"
              id="editName"
              type="text"
              onChange={profileChangeHandler}
              value={profileInfo && profileInfo.name}
            />
            <textarea
              className="userInputintro"
              id="editIntroduction"
              type="text"
              maxLength="30"
              onChange={profileChangeHandler}
              value={profileInfo && profileInfo.introduction}
            />
          </div>
        </div>
        <form onSubmit={submitPhotoFile}>
          <PhotoUploadLabel htmlFor="profileImgUpload">업로드</PhotoUploadLabel>
          <input
            type="file"
            accept={"image/*"}
            id="profileImgUpload"
            onChange={savePhotoFile}
            ref={photoRef}
            style={{ display: "none" }}
          />
          <button type="submit">사진 변경하기</button>
          <br />
          {/* <img src={photoFile} alt="업로드된 사진" /> */}
        </form>
      </div>
      <div style={{ margin: "20px auto" }}>
        <Button onClick={submitEditProfile} color="orange-1">
          수정 완료
        </Button>
      </div>
    </div>
  );
}

const PhotoUploadLabel = styled.label`
  margin: 10px 15px;
  padding: 10px 5px 5px 5px;
  width: 50px;
  height: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 13px;
  color: black;
  display: inline-block;
  cursor: pointer;
  background-color: #aabfff;
  border-radius: 20px;
`;
