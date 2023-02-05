/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../api/axios";
// import requests from "../../api/requests";

export default function SearchHashtagResult({ hashtag }) {
  const onClickHashtag = () => {
    const navigate = useNavigate();
    navigate("/");
    // 해당 이벤트 페이지로 이동
  };

  // const [isLike, setIsLike] = useState();

  // useEffect(() => {
  //   setIsLike(hashtag.isLike);
  //   // console.log(hashtag.isLike)
  // }, [hashtag]);

  // const onClickLike = (e) => {
  //   e.prhashtagDefault();

  //   async function unlike() {
  //     await axios
  //       .delete(requests.hashtags.postLikes(hashtag.uid))
  //       .then((res) => {
  //         setIsLike(!isLike)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   async function like() {
  //     await axios
  //       .post(requests.hashtags.postLikes(hashtag.uid))
  //       .then((res) => {
  //         setIsLike(!isLike)
  //         console.log(res)
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   if(isLike) return unLike();
  //   return like();
  // }

  return (
    <li>
      <div onClick={onClickHashtag}>
        <span>#</span>
        <span>{hashtag.name}</span>
      </div>
      {/* <div>
        { isLike ?
          <button onClick={(e) => onClickFollow(e)}>좋아요 취소</button>:
          <button onClick={(e) => onClickFollow(e)}>좋아요</button>
        }
      </div> */}
    </li>
  );
}
