import axios from "../../api/axios";
import requests from "../../api/requests";

export default function PhotoComment({
  comment,
  commentList,
  setCommentList,
  eventUid,
  mediaUid,
}) {
  const myId = "gyugyu";

  const deleteBtnClick = (e) => {
    e.preventDefault();
    async function deleteComment() {
      await axios
        .delete(
          requests.events.album.delComment(eventUid, mediaUid, comment.uid)
        )
        .then((response) => {
          const newCommentList = commentList.filter(
            (c) => c.uid !== comment.uid
          );
          console.log(response);
          setCommentList(newCommentList);
        })
        .catch((error) => {
          console.log(e.target);
          console.log(error);
        });
    }
    deleteComment();
  };

  return (
    <div>
      {comment.memberId} : {comment.content}
      {comment.createTime}
      <span onClick={deleteBtnClick}>
        {comment.memberId === myId ? "X" : ""}
      </span>
      <br />
    </div>
  );
}
