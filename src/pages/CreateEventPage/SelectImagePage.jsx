/* eslint-disable */
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { imgUrlState } from "../../recoils/createEvent/Atoms";
import Button from "../../components/common/Button";
import eventDefaultBanner1 from "../../assets/eventDefaultBanner1.png";
import eventDefaultBanner2 from "../../assets/eventDefaultBanner2.png";
import eventDefaultBanner3 from "../../assets/detailBanner.png";

function SelectImagePage() {
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
    }
  };

  return (
    <div>
      <div className="createContainer">
        <p className="createTitle">대표 사진을 지정하시겠어요?</p>

        <div className="defaultImgsContainer">
          <form className="imgUploadForm">
            <input
              type="file"
              accept={"image/*"}
              id="photoUpload"
              onChange={savePhotoFile}
              ref={photoRef}
              // style={{ display: "none" }}
            />
            <button>전송</button>
          </form>
          <img className="defaultImg" src={eventDefaultBanner1} alt="" />
          <img className="defaultImg" src={eventDefaultBanner2} alt="" />
          <img className="defaultImg" src={eventDefaultBanner3} alt="" />
        </div>
      </div>
      <Link to="/event/naming">
        <Button>다음</Button>
      </Link>
    </div>
  );
}

export default SelectImagePage;
