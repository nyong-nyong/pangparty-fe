/* eslint-disable no-unused-vars */
import { useRecoilState } from "recoil";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import Feed from "./Feed";
// import "./FeedList.scss";
// import FeedComment from "./FeedComment";

export default function FeedDetail() {
  // const feedInfo = useRecoilValue(detailFeedState);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  return (
    <div className="feedWrapper">
      <Feed feed={detailFeed} />
      {/* <FeedComment /> */}
    </div>
  );
}
