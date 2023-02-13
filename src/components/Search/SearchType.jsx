/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useRecoilState } from "recoil";
import classNames from "classnames";
import { searchTypeState } from "../../recoils/search/Atoms";
import "./SearchBar.scss";

export default function SearchType() {
  const [searchType, setSearchType] = useRecoilState(searchTypeState);
  const [selectedType, setSelectedType] = useState({
    event: true,
    member: false,
    hashtag: false,
  });

  const handleClick = (e, type) => {
    e.preventDefault();
    setSearchType(type);
    const newSelectedType = { event: false, member: false, hashtag: false };
    newSelectedType[type] = true;
    setSelectedType(newSelectedType);
  };

  return (
    <div className={classNames("ButtonContainer")}>
      <div
        className={classNames("TypeButton", selectedType.event && "Clicked")}
        onClick={(e) => handleClick(e, "event")}
      >
        <div className={classNames("TypeIcon", "event")} />
        <span>이벤트</span>
      </div>
      <div
        className={classNames("TypeButton", selectedType.member && "Clicked")}
        onClick={(e) => handleClick(e, "member")}
      >
        <div className={classNames("TypeIcon", "member")} />
        <span>계정</span>
      </div>
      <div
        className={classNames("TypeButton", selectedType.hashtag && "Clicked")}
        onClick={(e) => handleClick(e, "hashtag")}
      >
        <div className={classNames("TypeIcon", "hashtagIcon")} />
        <span>해시태그</span>
      </div>
    </div>
  );
}
