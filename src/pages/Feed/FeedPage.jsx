import { Link } from "react-router-dom";
import Button from "../../components/common/Button";
import FeedList from "../../components/Feed/FeedList";

export default function FeedPage() {
  return (
    <div>
      <FeedList />
      <Link to="/feed/create">
        <Button color="blue-1">글쓰기</Button>
      </Link>
    </div>
  );
}
