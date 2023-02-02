/* eslint-disable */
import { Link } from "react-router-dom";

function TagKeywordPage() {
  return (
    <div>
      <h1>관련 키워드를 태그해주세요</h1>
      <input />
      <Link to="/event/selecting">
        <button>다음</button>
      </Link>
    </div>
  );
}

export default TagKeywordPage;
