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

  return <div>{comment.content}</div>;
}
