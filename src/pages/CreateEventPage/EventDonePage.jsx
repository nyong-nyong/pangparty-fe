/* eslint-disable */
import { Link } from "react-router-dom";
import Button from "../../components/common/Button";

function EventDonePage() {

  return (
    <div>
      <h1>이벤트 완료 페이지</h1>
      <p>이벤트명 들어갈 자리</p>
      <h3>이벤트가 생성되었습니다 😉</h3>
      <span>이벤트 이미지 들어갈 자리</span>
      <span>
        <p>이벤트 공개하기</p>
        <p>전체 공개 토글 자리</p>
      </span>

      {/* 리다이렉트시키기!!! 나중에 수정할거임 */}
      <Link to="/event/intro">
        <Button>이벤트 페이지 꾸미기</Button>
      </Link>
    </div>
  );
}

export default EventDonePage;
