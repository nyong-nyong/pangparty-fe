// import SearchBar from "components/Search/SearchBar";
// import SearchResults from "components/Search/SearchResults";
// import SearchType from "components/Search/SearchType";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

// 우리 메인 홈화면

export default function HomePage() {
  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <Link to="/event/intro">
        <Button>이벤트 소개페이지 바로가기</Button>
      </Link>
      <Link to="/event/tagmember">
        <div className="buttons">
          <Button>🎉이벤트 만들기🎉</Button>
          <Button>작은 버튼</Button>
        </div>
      </Link>
    </div>
  );
}
