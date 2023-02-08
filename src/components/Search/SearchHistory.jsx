/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import { useRecoilState, useRecoilValue } from "recoil";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";
// import { searchHistoryState } from "../../recoils/search/Atoms";

export default function SearchHistory() {
  // const searchHistory = useRecoilValue(searchHistoryState);
  const navigate = useNavigate();

  const searchHistory = [
    {
      type: "event",
      content: "이벤트 내용입니다.",
      eventUid: "",
    },
    {
      type: "member",
      content: "멤버입니다.",
      eventUid: "",
    },
    {
      type: "hashtag",
      content: "해쉬태그~ 해쉬브라운~ 해쉬스완~",
      eventUid: "",
    },
  ];

  const clickSearchHistory = (item) => {
    if (item.type === "event") navigate(`/events/${item.eventUid}`);
    if (item.type === "member") navigate(`/`);
    if (item.type === "hashtag") navigate(`/`);
  };

  const deleteHistory = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {searchHistory &&
        searchHistory.map((item) => {
          return (
            <div className={classNames("SearchHistoryList")}>
              <div
                className={classNames("Type", item.type)}
                onClick={() => clickSearchHistory(item)}
              />
              <div onClick={() => clickSearchHistory(item)}>{item.content}</div>
              <div
                className={classNames("DeleteHistory")}
                onClick={deleteHistory}
              />
            </div>
          );
        })}
    </div>
  );
}
