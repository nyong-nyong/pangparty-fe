/* eslint-disable */
import { Link } from "react-router-dom";

function EventDiscription() {
  return (
    <div>
      <h1>축하일을 간략히 설명해주세요!</h1>
      <textarea
        placeholder="설명을 입력해주세용~?"
        style={{ width: "350px", height: "300px" }}
      />
      <Link to="/event/tagkwd">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default EventDiscription;
