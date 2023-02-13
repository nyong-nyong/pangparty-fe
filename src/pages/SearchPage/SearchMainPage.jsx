import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import SearchBar from "../../components/Search/SearchBar";
import SearchHistory from "../../components/Search/SearchHistory";
import SearchResults from "../../components/Search/SearchResults";
import { searchTypeState, searchTextState } from "../../recoils/search/Atoms";
// import SearchType from "../../components/Search/SearchType";

export default function SearchMainPage() {
  const setType = useSetRecoilState(searchTypeState);
  const searchText = useRecoilValue(searchTextState);

  useEffect(() => {
    setType("event");
  }, []);

  return (
    <div>
      <SearchBar />
      {searchText ? (
        <div>
          <SearchResults />
        </div>
      ) : (
        <div>
          <h4>최근 검색어</h4>
          <SearchHistory />
        </div>
      )}
    </div>
  );
}
