// import { useRecoilValue } from "recoil";
// import { useEffect } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HashtagTitle from "../../components/Search/HashtagTitle";
// import HashtagResult from "../../components/Search/HashtagResult";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "../../components/Search/SearchEvent";

export default function HashtagPage() {
  const params = useParams();
  const [name, setName] = useState("");
  const [hashtagResult, setHashtagResult] = useState([]);

  useEffect(() => {
    setName(params.name);
  }, [params]);

  useEffect(() => {
    const fetchData = async (inputName) => {
      if (!inputName) return;
      console.log(inputName);
      await axios
        .get(
          `${requests.search.getSearch(
            "event",
            "",
            0,
            30
          )}&hashtagName=${inputName}`
        )
        .then((res) => {
          setHashtagResult(res.data.events);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchData(name);
  }, [name]);

  return (
    <div>
      {name ? <HashtagTitle hashtag={name} /> : null}
      {hashtagResult ? (
        <ul>
          {hashtagResult.map((result) => {
            if (!result) return null;
            return <SearchEventResult key={result.uid} event={result} />;
          })}
        </ul>
      ) : (
        <div />
      )}
    </div>
  );
}
