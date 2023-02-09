/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

export default function SearchHashtagResult({ hashtag }) {
  const navigate = useNavigate();
  const onClickHashtag = () => {
    navigate(`hashtag/${hashtag.name}`);
    // 해당 이벤트 페이지로 이동
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
          <div className={classNames("Type", "hashtag")} />
          <div className={classNames("HistoryContext")}>{hashtag.name}</div>
        </div>
      ) : (
        <> </>
      )}
    </li>
  );
}
