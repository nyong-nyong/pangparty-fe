import { Link } from "react-router-dom";

export default function FeedPage() {
  return (
    <div>
      <Link to="/feed/create">글쓰기</Link>
      <Feed />
    </div>
  );
}
