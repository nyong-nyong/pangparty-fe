/* eslint-disable */
import { Link } from "react-router-dom";

function EventDiscription() {
  return (
    <div>
      <h1>축하일을 간략히 설명해주세요!</h1>
      <input placeholder="설명을 입력해주세용~?" />
      <Link to="/event/tagkwd">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default EventDiscription;
