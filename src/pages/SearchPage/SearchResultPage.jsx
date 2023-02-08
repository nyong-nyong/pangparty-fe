import SearchBar from "../../components/Search/SearchBar";
import SearchType from "../../components/Search/SearchType";

export default function SearchMainPage() {
  return (
    <div>
      <h4>검색</h4>
      <SearchBar />
      <h4>최근 검색어</h4>
      <SearchType />
    </div>
  );
}
