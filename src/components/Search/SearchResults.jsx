/* eslint-disable no-unused-vars */
import { useRecoilValue } from "recoil";
import { useEffect } from "react";
import {
  searchResultsState,
  searchTypeState,
} from "../../recoils/search/Atoms";
import SearchMemberResult from "./SearchMember";
import SearchEventResult from "./SearchEvent";
import SearchHashtagResult from "./SearchHashtag";

export default function SearchResults() {
  const type = useRecoilValue(searchTypeState);
  const searchResults = useRecoilValue(searchResultsState);

  if (searchResults === undefined || searchResults.length < 1) {
    return (
      <div style={{ margin: "20px 12px 10px 12px" }}>
        검색 결과가 존재하지 않습니다
      </div>
    );
  }

  switch (type) {
    case "member":
      return (
        <ul>
          {searchResults &&
            searchResults.map((member) => (
              <SearchMemberResult key={member.id} member={member} />
            ))}
        </ul>
      );

    case "event":
      return (
        <ul>
          {searchResults &&
            searchResults.map((event) => (
              <SearchEventResult key={event.uid} event={event} />
            ))}
        </ul>
      );
    case "hashtag":
      return (
        <ul>
          {searchResults &&
            searchResults.map((hashtag) => (
              <SearchHashtagResult key={hashtag.hashtagUid} hashtag={hashtag} />
            ))}
        </ul>
      );

    default:
      return (
        <div style={{ margin: "20px 12px 10px 12px" }}>
          검색 결과가 존재하지 않습니다
        </div>
      );
  }
}
