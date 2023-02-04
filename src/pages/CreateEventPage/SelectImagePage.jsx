/* eslint-disable */
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { imgUrlState } from "../../recoils/createEvent/Atoms";

function SelectImagePage() {
  const [imgUrlInfo, setImgUrlInfo] = useRecoilState(imgUrlState);

  const eventImgHandler = (e) => {
    const newImgUrl = e.target.value;
    setImgUrlInfo(newImgUrl);
  };
  return (
    <div>
      <h1>대표 사진을 지정하시겠어요?</h1>
      <p>이미지 업로드 컴포넌트 넣을 것</p>
      <input type="file" accept="image/*" />
      <input type="text" onChange={eventImgHandler} placeholder="img url을 입력해주세요"/>
      <Link to="/event/naming">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default SelectImagePage;
