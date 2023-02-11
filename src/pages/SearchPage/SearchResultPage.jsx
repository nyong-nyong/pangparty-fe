import { useSetRecoilState, useRecoilValue } from "recoil";
import { useEffect } from "react";
import SearchBar from "../../components/Search/SearchBar";
import SearchType from "../../components/Search/SearchType";
import SearchResults from "../../components/Search/SearchResults";
import { searchTypeState, searchTextState } from "../../recoils/search/Atoms";

export default function SearchResultPage() {
  const setType = useSetRecoilState(searchTypeState);
  const searchText = useRecoilValue(searchTextState);

  useEffect(() => {
    setType("event");
  }, []);

  return (
    <div>
      <h4>검색</h4>
      <SearchBar />
      <SearchType />
      {searchText ? (
        <div>
          <SearchResults />
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
