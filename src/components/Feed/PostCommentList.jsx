/* eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import PostComment from "./PostComment";
import PostCommentUpload from "./PostCommentUpload";

export default function PostCommentList({ postUid }) {
  const [postCommentList, setPostCommentList] = useState([]);

  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(requests.posts.getPostComment(postUid, "all", 0, 5))
        .then((response) => {
          console.log(response.data.comments);
          setPostCommentList(response.data.comments);
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
                comment={comment}
                postCommentList={postCommentList}
                setPostCommentList={setPostCommentList}
                postUid={postUid}
              />
            );
          }
          return null;
        })}
      <hr style={{ width: "100%", border: "1px solid black" }} />
      <p>총 {postCommentList.length}개의 댓글</p>
      <PostCommentUpload
        postUid={postUid}
        postCommentList={postCommentList}
        setPostCommentList={setPostCommentList}
      />
    </div>
  );
}
