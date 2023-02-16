/* eslint-disable */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PostCommentUpload({
  postUid,
  postCommentList,
  setPostCommentList,
}) {
  const [commentContent, setCommentContent] = useState("");
  const navigate = useNavigate();

  const auth = useAuth();
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(auth.user);
    console.log(auth);
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
          setCommentContent("");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    createComment();
    location.reload();
  };

  const onChangeComment = (e) => {
    setCommentContent(e.target.value);
  };

  return (
    <div className="commentUploadWrapper">
      {/* <img src={comment.profileImgUrl} alt="프로필사진" /> */}
      <form onSubmit={createBtnClick} className="postCommentUploadContainer">
        <input
          onChange={onChangeComment}
          value={commentContent}
          placeholder={`${user}(으)로 댓글 달기...`}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              createBtnClick;
            }
          }}
        />
        <button type="submit">작성</button>
      </form>
    </div>
  );
}
