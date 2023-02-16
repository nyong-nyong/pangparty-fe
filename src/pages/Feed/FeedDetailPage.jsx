/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { detailFeedState } from "../../recoils/Feed/Atoms";
import Feed from "../../components/Feed/Feed";
import PostCommentList from "../../components/Feed/PostCommentList";
import DeleteFeed from "../../components/Feed/DeleteFeed";
import useAuth from "../../hooks/useAuth";

export default function FeedDetailPage() {
  // const feedInfo = useRecoilValue(detailFeedState);
  const [detailFeed, setDetailFeed] = useRecoilState(detailFeedState);

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  return (
    <div className="feedWrapper">
      <DeleteFeed feed={detailFeed} />
      <Feed feed={detailFeed} />
      {user && user === detailFeed.memberId ? (
        <Link
          to={`/feed/${detailFeed.uid}/modify`}
          className="modifyFeedContainer"
        >
          <p>피드 수정</p>
        </Link>
      ) : (
        ""
      )}
      <PostCommentList postUid={detailFeed.uid} />
    </div>
  );
}
