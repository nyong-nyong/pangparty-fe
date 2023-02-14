/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "../../api/axios";
// import requests from "../../api/requests";
import "./SearchMember.scss";
import { useRecoilState } from "recoil";
import _ from "lodash";
import {
  searchHistoryState,
  searchHistoryIdState,
} from "../../recoils/search/Atoms";

export default function SearchMemberResult({ member }) {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);
  const [searchHistoryId, setSearchHistoryId] =
    useRecoilState(searchHistoryIdState);
  const navigate = useNavigate();
  // const [isFollowed, setIsFollowed] = useState();

  // useEffect(() => {
  //   setIsFollowed(member.isFollowed);
  //   console.log(member.isFollowed)
  // }, [member]);

  const onClickProfile = () => {
    navigate(`/friend/${member.id}`);
    const newSearchHistory = _.cloneDeep(searchHistory);
    // console.log(newSearchHistory);
    if (searchHistory.length === 10) {
      newSearchHistory.pop();
    }
    newSearchHistory.unshift();
    setSearchHistoryId(searchHistoryId + 1);
    newSearchHistory.push({
      type: "member",
      id: searchHistoryId + 1,
      ...member,
    });
    setSearchHistory(newSearchHistory);

    // 해당 멤버의 프로필로 이동
  };

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // const onClickFollow = (e) => {
  //   e.preventDefault();

  //   async function unfollow() {
  //     await axios
  //       .delete(requests.following.delFollowing(), { id: member.id })
  //       .then((res) => {
  //         setIsFollowed(!isFollowed);
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   async function follow() {
  //     await axios
  //       .post(requests.following.postFollowing(), { id: member.id })
  //       .then((res) => {
  //         setIsFollowed(!isFollowed);
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }

  //   if (isFollowed) return unfollow();
  //   return follow();
  // };

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
            <div className="ProfileID">{member.id}</div>
            <div className="ProfileName">{member.name}</div>
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
