/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import Feed from "../../components/Feed/Feed";
import PostCommentList from "../../components/Feed/PostCommentList";
import DeleteFeed from "../../components/Feed/DeleteFeed";

export default function FeedDetailPage() {
  // const feedInfo = useRecoilValue(detailFeedState);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  return (
    <div className="feedWrapper">
      <DeleteFeed feed={detailFeed} />
      <Feed feed={detailFeed} />
      <Link to={`/feed/${detailFeed.uid}/modify`}>
        <p>피드 수정</p>
      </Link>
      <PostCommentList postUid={detailFeed.uid} />
    </div>
  );
}
