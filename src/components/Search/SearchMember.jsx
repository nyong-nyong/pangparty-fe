/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import "./SearchMember.scss";

export default function SearchMemberResult({ member }) {
  const [isFollowed, setIsFollowed] = useState();

  useEffect(() => {
    setIsFollowed(member.isFollowed);
    // console.log(member.isFollowed)
  }, [member]);

  const onClickProfile = () => {
    const navigate = useNavigate();
    navigate("/");
    // 해당 멤버의 프로필로 이동
  };

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const onClickFollow = (e) => {
    e.preventDefault();

    async function unfollow() {
      await axios
        .delete(requests.following.delFollowing(), { id: member.id })
        .then((res) => {
          setIsFollowed(!isFollowed);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    async function follow() {
      await axios
        .post(requests.following.postFollowing(), { id: member.id })
        .then((res) => {
          setIsFollowed(!isFollowed);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (isFollowed) return unfollow();
    return follow();
  };

  return (
    <li>
      {canRender ? (
        <div className="SearchMember">
          <div onClick={onClickProfile}>
            <img
              className="MemberThumbnail"
              src={member.imgUrl}
              width="100px"
              height="100px"
            />
          </div>
          <div onClick={onClickProfile} className="ProfileContent">
            <div>{member.id}</div>
            <div>{member.name}</div>
          </div>
          {/* <div>
            {isFollowed ? (
              <button onClick={(e) => onClickFollow(e)}>팔로우 취소</button>
            ) : (
              <button onClick={(e) => onClickFollow(e)}>팔로우</button>
            )}
          </div> */}
        </div>
      ) : (
        <div />
      )}
    </li>
  );
}
