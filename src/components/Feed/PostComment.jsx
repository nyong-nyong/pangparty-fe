/* eslint-disable */
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import profile from "../../assets/profile.svg";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./FeedList.scss";

export default function PostComment({
  comment,
  postUid,
  postCommentList,
  setPostCommentList,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, [user]);

  function timeForToday(value) {
    const today = new Date();
    const timeValue = new Date(value);
    const betweenTime = Math.floor(
      (today.getTime() - timeValue.getTime()) / 1000 / 60
    );
    if (betweenTime < 1) return "방금전";
    if (betweenTime < 60) {
      return `${betweenTime}분전`;
    }
    const betweenTimeHour = Math.floor(betweenTime / 60);
    if (betweenTimeHour < 24) {
      return `${betweenTimeHour}시간전`;
    }
    const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    if (betweenTimeDay < 365) {
      return `${betweenTimeDay}일전`;
    }
    return `${Math.floor(betweenTimeDay / 365)}년전`;
  }

  const deleteCommentClick = (e) => {
    e.preventDefault();

    async function deleteComment() {
      await axios
        .delete(requests.posts.deletePostComment(postUid, comment.uid))
        .then((res) => {
          const newCommentList = postCommentList.filter(
            (c) => c.uid !== comment.uid
          );
          console.log(res);
          setPostCommentList(newCommentList);
          // console.log("delete");
        })
        .catch((err) => {
          console.log(err);
        });
    }
    deleteComment();
  };

  return (
    <>
      <hr />
      <div className="oneCommentContainer">
        <div>
          <div className="postMemberProfile">
            {comment.profileImgUrl ? (
              <img src={comment.profileImgUrl} />
            ) : (
              <img
                src={profile}
                alt="프로필기본사진"
                style={{ width: "24px" }}
              />
            )}
            <p>@{comment.memberId}</p>
          </div>
          <div>{comment.content}</div>
        </div>
        <div className="commentTimeDeleteContainer">
          <p>{timeForToday(comment?.createTime)}</p>
          {user && comment.memberId === user ? (
            <button onClick={deleteCommentClick} type="button">
              삭제하기
            </button>
          ) : (
            <button>""</button>
          )}
        </div>
      </div>
    </>
  );
}
