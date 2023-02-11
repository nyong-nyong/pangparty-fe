import { Link } from "react-router-dom";
import FeedList from "../../components/Feed/FeedList";

export default function FeedPage() {
  return (
    <div>
      <Link to="/feed/create">글쓰기</Link>
      <FeedList />
    </div>
  );
}
