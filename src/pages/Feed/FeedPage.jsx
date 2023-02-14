import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import FeedList from "../../components/Feed/FeedList";

export default function FeedPage() {
  return (
    <div>
      {/* FeedList가 없으면 글쓰러 가볼까요? 추가하기 */}
      <FeedList />
      <Link to="/feed/create">
        <Button color="blue-1">글쓰기</Button>
      </Link>
    </div>
  );
}
