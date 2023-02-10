// import { useRecoilValue } from "recoil";
// import { useEffect } from "react";
import HashtagTitle from "../../components/Search/HashtagTitle";
import HashtagResults from "../../components/Search/HashtagResults";

export default function HashtagPage() {
  const hashtag = {
    hashtagUid: 200031,
    name: "2월19일",
    createTime: "2023-01-31 14:58:32",
    likes: 7,
    isLiked: false,
  };

  return (
    <div>
      <h4>검색</h4>
      {hashtag ? (
        <div>
          <HashtagTitle hashtag={hashtag} />
          <HashtagResults hashtagUid={hashtag.hashtagUid} />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
