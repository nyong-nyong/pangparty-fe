/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { useRecoilState } from "recoil";
import _ from "lodash";
import {
  searchHistoryState,
  searchHistoryIdState,
} from "../../recoils/search/Atoms";

export default function SearchHashtagResult({ hashtag }) {
  const navigate = useNavigate();
  const [searchHistory, setSearchHistory] = useRecoilState(searchHistoryState);
  const [searchHistoryId, setSearchHistoryId] =
    useRecoilState(searchHistoryIdState);

  const onClickHashtag = () => {
    navigate(`/hashtag/${hashtag.hashtagUid}`);
    // 해당 이벤트 페이지로 이동
    const newSearchHistory = _.cloneDeep(searchHistory);
    // console.log(newSearchHistory);
    if (searchHistory.length === 10) {
      newSearchHistory.pop();
    }
    newSearchHistory.unshift();
    setSearchHistoryId(searchHistoryId + 1);
    newSearchHistory.push({
      type: "hashtag",
      id: searchHistoryId + 1,
      ...hashtag,
    });
    setSearchHistory(newSearchHistory);
  };

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCanRender(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <li>
      {canRender ? (
        <div
          style={{ border: "none", cursor: "pointer" }}
          onClick={onClickHashtag}
          className={classNames("SearchHistoryList")}
        >
          <div className={classNames("Type", "hashtagIcon")} />
          <div className={classNames("HistoryContext")}>{hashtag.name}</div>
        </div>
      ) : (
        <> </>
      )}
    </li>
  );
}
