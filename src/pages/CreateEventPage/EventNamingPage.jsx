/* eslint-disable */
import { Link } from "react-router-dom";

function EventNamingPage() {
  return (
    <div>
      <h1>마지막으로, 이벤트명을 정해주세요</h1>
      <input />
      <Link to="/event/confirm">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default EventNamingPage;
