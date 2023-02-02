/* eslint-disable */
import { Link } from "react-router-dom";

function SelectImagePage() {
  return (
    <div>
      <h1>대표 사진을 지정하시겠어요?</h1>
      <p>이미지 업로드 컴포넌트 넣을 것</p>
      <Link to="/event/naming">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default SelectImagePage;
