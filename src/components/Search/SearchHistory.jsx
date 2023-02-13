/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRecoilState } from "recoil";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
import "./SearchBar.scss";
import { searchHistoryState } from "../../recoils/search/Atoms";

export default function SearchHistory() {
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);
  const navigate = useNavigate();

  const clickSearchHistory = (item) => {
    if (item.type === "event") navigate(`/events/${item.eventUid}`);
    if (item.type === "member") navigate(`/friend/${item.id}`);
    if (item.type === "hashtag") navigate(`/`);
  };

  const deleteHistory = (e, id) => {
    e.preventDefault();
    const newSearchHistory = searchHistory.filter((item) => item.id !== id);
    setSearchHistory(newSearchHistory);
  };

  return (
    <div>
      {searchHistory &&
        searchHistory.map((item) => {
          return (
            <div className={classNames("SearchHistoryList")} key={item.id}>
              <div
                className={
                  item.type === "hashtag"
                    ? classNames("Type", "hashtagIcon")
                    : classNames("Type", item.type)
                }
                onClick={() => clickSearchHistory(item)}
              />
              <div
                className={classNames("HistoryContext")}
                onClick={() => clickSearchHistory(item)}
              >
                {item.type === "event" && item.eventName}
                {item.type === "member" && item.id}
                {item.type === "hashtag" && item.name}
              </div>
              <div
                className={classNames("DeleteHistory")}
                onClick={(e) => {
                  deleteHistory(e, item.id);
                }}
              />
            </div>
          );
        })}
    </div>
  );
}
