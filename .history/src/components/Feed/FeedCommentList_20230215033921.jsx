import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function FeedCommentList({ postUid }) {
  const [feedCommentList, setFeedCommentList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(requests.posts.getPostComment(postUid, "all", 0, 5))
        .then((response) => {
          setFeedCommentList(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, [postUid]);

  return <div>FeedCommentList</div>;
}
