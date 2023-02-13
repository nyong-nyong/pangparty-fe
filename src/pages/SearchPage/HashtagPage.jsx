// import { useRecoilValue } from "recoil";
// import { useEffect } from "react";
import { useState, useEffect } from "react";
import HashtagTitle from "../../components/Search/HashtagTitle";
// import HashtagResult from "../../components/Search/HashtagResult";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "../../components/Search/SearchEvent";

export default function HashtagPage({ hashtag }) {
  const [hashtagResult, setHashtagResult] = useState([]);

  useEffect(() => {
    const fetchData = async (inputHashtag) => {
      if (!hashtag) return;
      await axios
        .get(
          `${requests.search.getSearch(
            "event",
            inputHashtag,
            0,
            30
          )}&hashtagUid=${hashtag.hashtagUid}`
        )
        .then((res) => {
          setHashtagResult(res.data.events);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData(hashtag);
  }, [hashtag]);

  return (
    <div>
      <h4>검색</h4>
      {hashtag ? <HashtagTitle hashtag={hashtag} /> : null}
      {hashtagResult ? (
        <div>
          {hashtagResult.map((result) => {
            if (!result) return null;
            return <SearchEventResult key={result.uid} event={result} />;
          })}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
