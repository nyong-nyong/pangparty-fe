/* eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

export default function FeedCommentList({ postUid }) {
  const [feedCommentList, setFeedCommentList] = useState([]);

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, []);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(requests.posts.getPostComment(postUid, "all", 0, 5))
        .then((response) => {
          console.log(response.data.comments);
          setFeedCommentList(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, []);

  return <div>{feedCommentList}</div>;
}
