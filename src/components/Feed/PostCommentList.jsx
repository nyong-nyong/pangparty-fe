/* eslint-disable */

import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";
import PostComment from "./PostComment";
import PostCommentUpload from "./PostCommentUpload";
import "./FeedList.scss";

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
    <div className="postCommentUploadContainer">
      <div className="postCommentContainer">
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
      </div>
      <hr />
      <p className="commentLength">
        총<p>&nbsp;{postCommentList.length}</p>개의 댓글
      </p>
      <PostCommentUpload
        postUid={postUid}
        postCommentList={postCommentList}
        setPostCommentList={setPostCommentList}
      />
    </div>
  );
}
