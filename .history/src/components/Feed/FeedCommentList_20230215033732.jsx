import { useState, useEffect } from "react";

export default function FeedCommentList({postUid}) {
  const [feedCommentList, setFeedCommentList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(requests.posts.getPostComment(postUid, all, 0, 30))
        .then((res) => {
          setCommentList(res.data.media);
          setCommentLength(res.data.itemCnt);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [mediaUid]);

  return <div>FeedCommentList</div>;
}
