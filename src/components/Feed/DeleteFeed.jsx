import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function DeleteFeed({ feed }) {
  const navigate = useNavigate();

  const postDeleteHandler = (e) => {
    e.preventDefault();

    async function postDelete() {
      await axios
        .delete(requests.posts.deletePost(feed.uid))
        .then((res) => {
          console.log(res);
          navigate(-1);
        })
        .catch((err) => console.log(err));
    }
    postDelete();
  };

  return (
    <div>
      <button type="button" onClick={postDeleteHandler}>
        삭제하기
      </button>
    </div>
  );
}
