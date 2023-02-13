import { useState, useEffect } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";
import SearchEventResult from "./SearchEvent";

export default function HashtagResult({ hashtagUid }) {
  const [results, setResults] = useState(undefined);

  const fetchData = async (uid) => {
    await axios
      .get(requests.hashtags.getResults(uid))
      .then((response) => {
        setResults(response.data.events);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData(hashtagUid);
  }, []);

  return (
    <ul>
      {results ? (
        results.map((result) => (
          <SearchEventResult key={result.uid} event={result} />
        ))
      ) : (
        <div />
      )}
    </ul>
  );
}
