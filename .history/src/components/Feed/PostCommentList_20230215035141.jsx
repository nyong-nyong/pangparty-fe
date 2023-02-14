/* eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import PostComment from "./PostComment";

export default function PostCommentList({ postUid }) {
  const [postCommentList, setPostCommentList] = useState([]);

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
          setPostCommentList(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
    fetchData();
  }, []);

  return (
    <div>
      {postCommentList &&
        postCommentList.map((comment) => {
          if (comment) {
            return (
              <PostComment
                key={comment.uid}
                postUid={postUid}
                postCommentList={postCommentList}
                setPostCommentList={setPostCommentList}
              />
            );
          }
          return null;
        })}
    </div>
  );
}
