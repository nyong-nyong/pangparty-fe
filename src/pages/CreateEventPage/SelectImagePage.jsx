/* eslint-disable */
import { useRef } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { imgFileState, readerState } from "../../recoils/createEvent/Atoms";
// import axios from "../../api/axios";
// import requests from "../../api/requests";
import Button from "../../components/common/Button";

export default function SelectImagePage() {
  const [imgFileInfo, setImgFileInfo] = useRecoilState(imgFileState);
  const [readerInfo, setReaderInfo] = useRecoilState(readerState);
  // const [photoFile, setPhotoFile] = useState("");
  const photoRef = useRef();

  const MySwal = withReactContent(Swal);

  const savePhotoFile = (e) => {
    // console.log(photoRef.current.files[0]);
    const file = photoRef.current.files;
    if (file.length === 0) {
      return;
    } else {
      const photo = photoRef.current.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      // console.log(reader.result);
      reader.onloadend = () => {
        setImgFileInfo(photo);
        setReaderInfo(reader.result);
      };
    }
  };

  const submitPhotoFile = async (e) => {
    e.preventDefault();
    // const photo = photoRef.current.files[0];

    // if (photo) {
    //   const formData = new FormData();
    //   formData.append("requests", photo);

    //   for (const data of formData) console.log(data);

    //   await axios
    //     // 대표 사진 api 생기면 그쪽으로 수정하여 post 요청
    //     .post(requests.events.postHeaderImg(eventUid), formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    savePhotoFile();
    if (imgFileInfo) {
      MySwal.fire(<p>등록되었습니다!</p>);
    }
  };

  // const test = (e) => {
  //   console.log(e);
  // };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">대표 사진을 지정하시겠어요?</p>

        <div className="defaultImgsContainer">
          <div
            className="previewImgContainer"
            style={{ backgroundImage: `url(${readerInfo})` }}
          >
            {/* <img
                className="previewImg"
                src={readerInfo}
                alt="업로드된 사진"
              /> */}
          </div>
          <form className="imgUploadForm">
            <label htmlFor="photoUpload" className="input-file-button">
              사진 업로드
            </label>
            <input
              type="file"
              accept={"image/*"}
              id="photoUpload"
              onChange={savePhotoFile}
              ref={photoRef}
              style={{ display: "none" }}
            />
            {readerInfo && (
              <button className="submitImgBtn" onClick={submitPhotoFile}>
                이 이미지로 할래요 ✔
              </button>
            )}
          </form>
        </div>
      </div>
      <Link to="/event/naming" className="eventNextBtn">
        <Button color="orange-1">다음</Button>
      </Link>
    </div>
  );
}
