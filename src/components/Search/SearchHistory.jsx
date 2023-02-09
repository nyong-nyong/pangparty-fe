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
    if (item.type === "event") navigate(`/events/${item.uid}`);
    if (item.type === "member") navigate(`/`);
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
                className={classNames("Type", item.type)}
                onClick={() => clickSearchHistory(item)}
              />
              <div
                className={classNames("HistoryContext")}
                onClick={() => clickSearchHistory(item)}
              >
                {item.eventName}
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
