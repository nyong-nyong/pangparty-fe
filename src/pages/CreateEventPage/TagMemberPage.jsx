/* eslint-disable */
import { Link } from "react-router-dom";

export default function TagMemberPage() {
  return (
    <div>
      <h1>축하해줄 친구를 태그해볼까요?</h1>
      <input />

      {/* common으로 나중에 button component 뺄 것!!!!!!!!!!!! */}
      <Link to="/event/calendar">
        <button>다음</button>
      </Link>
      <button>친구 계정이 없어요</button>
    </div>
  );
}
