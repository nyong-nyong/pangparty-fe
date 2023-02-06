// import SearchBar from "components/Search/SearchBar";
// import SearchResults from "components/Search/SearchResults";
// import SearchType from "components/Search/SearchType";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";

// 우리 메인 홈화면

export default function HomePage() {
  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <div>
        <Button>
          <Link to="/event/intro">이벤트 소개페이지 바로가기</Link>
        </Button>
        <Button>
          <Link to="/event/tagmember">🎉이벤트 만들기🎉</Link>
        </Button>
        <Button size="small">작은 버튼</Button>

        <span>아이콘 모음 ...</span>
        <Icon img="alarm">알람</Icon>
        <Icon img="like">좋아요</Icon>
        <Icon img="pang">팡파레</Icon>
        <Icon img="setting">설정</Icon>
      </div>
    </div>
  );
}
