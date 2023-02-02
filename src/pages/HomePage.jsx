// import SearchBar from "components/Search/SearchBar";
// import SearchResults from "components/Search/SearchResults";
// import SearchType from "components/Search/SearchType";
import { Link } from "react-router-dom";

// 우리 메인 홈화면

export default function HomePage() {
  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <Link to="/event/intro">이벤트 소개페이지 바로가기</Link>
      <Link to="/event/create">
        <button type="button">🎉이벤트 만들기🎉</button>
      </Link>
    </div>
  );
}
