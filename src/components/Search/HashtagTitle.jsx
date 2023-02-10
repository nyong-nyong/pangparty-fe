/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames";
import { useEffect, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function HashtagTitle({ hashtag }) {
  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    setIsLiked(hashtag.isLiked);
  }, [hashtag]);

  const onClickLike = (e) => {
    e.preventDefault();

    async function dislike() {
      await axios
        .delete(requests.hashtags.delLikes(hashtag.hashtagUid))
        .then((res) => {
          setIsLiked(!isLiked);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function like() {
      await axios
        .post(requests.hashtags.postLikes(hashtag.hashtagUid))
        .then((res) => {
          setIsLiked(!isLiked);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (isLiked) return dislike();
    return like();
  };

  return (
    <div>
      {hashtag ? (
        <div className={classNames("SearchHistoryList")}>
          <div className={classNames("Type", "hashtag")} />
          <div className={classNames("HistoryContext", "HashtagTitle")}>
            {hashtag.name}
          </div>
          <div onClick={onClickLike}>{isLiked ? "♥︎" : "♡"}</div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
