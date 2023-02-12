/* eslint-disable */
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { imgUrlState } from "../../recoils/createEvent/Atoms";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../../components/common/Button";

export default function SelectImagePage() {
  const [imgUrlInfo, setImgUrlInfo] = useRecoilState(imgUrlState);
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
      formData.append("requests", photo);

      for (const data of formData) console.log(data);

      await axios
      // 대표 사진 api 생기면 그쪽으로 수정하여 post 요청
      .post(requests.events.album.postMedia(eventUid), {
        data: formData,
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

  const test = (e) => {
    console.log(e)
  }

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">대표 사진을 지정하시겠어요?</p>

        <div className="defaultImgsContainer">
          <form className="imgUploadForm">
            <label htmlFor="photoUpload">+추가하기</label>
            <input
              type="file"
              accept={"image/*"}
              id="photoUpload"
              onChange={savePhotoFile}
              ref={photoRef}
              // style={{ display: "none" }}
            />
            <button onClick={submitPhotoFile}>전송</button>
          </form>
        </div>
      </div>
      <Link to="/event/naming">
        <Button>다음</Button>
      </Link>
    </div>
  );
};