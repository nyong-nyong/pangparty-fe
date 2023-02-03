/* eslint-disable */
import { Link } from "react-router-dom";

function ConfirmEventPage() {
  return (
    <div>
      <h1>입력된 내용을 확인해주세요</h1>
      <p>확안확인</p>
      <Link to="/event/done">
        <button>이벤트 확인페이지로 넘어가기</button>
      </Link>
    </div>
  );
}

export default ConfirmEventPage;
