/* eslint-disable */
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function PostComment({
  comment,
  postCommentList,
  setPostCommentList,
}) {
  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, []);

  useEffect(() => {});

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

  return (
    <div>
      <div>
        <div>
          <img src={comment.profileImgUrl} style={{width: "24px"}}/>
          <div>{comment.memberId}</div>
        </div>
        <div>{comment.content}</div>
      </div>
      <div>
        <p>{timeForToday(comment.createTime)}</p>
        <button>삭제하기</button>
      </div>
    </div>
  );
}
