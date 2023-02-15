/* eslint-disable */

import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PostCommentUpload({
  postUid,
  postCommentList,
  setPostCommentList,
}) {
  const [commentContent, setCommentContent] = useState("");
  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  const createBtnClick = (e) => {
    e.preventDefault();
    const newComment = {
      uid: null,
      postUid,
      content: commentContent,
    };
    async function createComment() {
      await axios
        .post(requests.posts.postPostComment(postUid), {
          content: commentContent,
        })
        .then((res) => {
          newComment.uid = res.data.uid;
          setPostCommentList([...postCommentList, newComment]);
          console.log(res);
        })
        .catch((error) => {
          console.log(e.target);
          console.log(error);
        });
    }
    createComment();
  };

  const onChangeComment = (e) => {
    setCommentContent(e.target.value);
    // console.log(e.target.value)
  };

  return (
    <form onSubmit={createBtnClick}>
      <textarea onChange={onChangeComment} value={commentContent} />
      <button>작성</button>
    </form>
  );
}
