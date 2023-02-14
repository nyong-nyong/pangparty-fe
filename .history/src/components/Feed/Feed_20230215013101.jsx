/* eslint-disable no-unused-vars */
/* eslint-disable */
import { useEffect, useState } from "react";
import profile from "../../assets/profile.svg";
import Icon from "../common/Icon";
import "./FeedList.scss";
import axios from "../../api/axios";
import requests from "../../api/requests";
import useAuth from "../../hooks/useAuth";

// FeedList에서 feed 객체를 recoil로부터 받아옴(한 개의 게시물)
// 피드(게시물) 상세페이지
// axios로 현재 피드(게시물) id를 받아서 넘겨주면 like랑 comment 받아오기
// like ->  getPostDetail
// comment -> getPostComment

// 있어야 할 것 -> like(T/F, cnt), comment(T/F, cnt)

export default function Feed({ feed }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCnt, setLikeCnt] = useState(0);
  const [profileImgUrl, setProfileImgUrl] = useState("");

  // 로그인 정보
  const auth = useAuth();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(auth.user);
  }, []);

  useEffect(() => {
    // 좋아요 갯수 T/F 받아오기
    async function fetchData() {
      if (!feed) return;
      const request = await axios
        .get(requests.posts.getPostDetail(`${feed.uid}`))
        .then((response) => {
          setIsLiked(response.data.isLiked);
          setLikeCnt(response.data.likeCount);
          // console.log(isLiked);
          // console.log(likeCnt);
          console.log(response.data);
          setProfileImgUrl(response.data.profileImgUrl);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, [feed]);

  const likeClickHandler = (e) => {
    e.preventDefault();

    async function deleteLike() {
      await axios
        .delete(requests.posts.deletePostLike(`${feed.uid}`))
        .then(setLikeCnt(likeCnt - 1), setIsLiked(!isLiked))
        .catch((err) => console.log(err));
    }
    async function postLike() {
      await axios
        .post(requests.posts.getPostLike(`${feed.uid}`))
        .then(setLikeCnt(likeCnt + 1), setIsLiked(!isLiked))
        .catch((err) => console.log(err));
    }
    if (isLiked) {
      return deleteLike();
    }
    return postLike();
  };

  // 시간 계산 함수
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
    <div className="feedContainer">
      <div className="feedMember">
        {profileImgUrl ? (
          <img src={profileImgUrl} alt="프로필사진" />
        ) : (
          <img src={profile} alt="프로필기본사진" />
        )}
        <div className="titleAndMember">
          <p className="feedTitle">{feed?.title}</p>
          <p className="feedId">@{feed?.memberId}</p>
        </div>
      </div>
      <div className="feedContent">
        <p>{feed?.content}</p>
        <p className="feedTime">{timeForToday(feed?.createTime)}</p>
      </div>
      <div>
        <div>
          <div onClick={likeClickHandler}>
            <Icon img="like" isActive={isLiked} />
          </div>
          <div style={isLiked ? { color: "#FF7A5C" } : { color: "#6B6B6B" }}>
            {likeCnt}
          </div>
        </div>
        {/* CSS 추후 수정 및 추가 예정 */}
        <Icon img="comment" />
      </div>
    </div>
  );
}
