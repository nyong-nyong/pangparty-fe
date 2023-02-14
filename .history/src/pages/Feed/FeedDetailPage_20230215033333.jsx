/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import Feed from "../../components/Feed/Feed";
import FeedCommentList from "../../components/Feed/FeedCommentList";

export default function FeedDetailPage() {
  // const feedInfo = useRecoilValue(detailFeedState);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  return (
    <div className="feedWrapper">
      <Feed feed={detailFeed} />
      <FeedCommentList />
    </div>
  );
}
