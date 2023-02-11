// import SearchBar from "components/Search/SearchBar";
// import SearchResults from "components/Search/SearchResults";
// import SearchType from "components/Search/SearchType";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Icon from "../components/common/Icon";
import HashTag from "../components/common/HashTag";

// 우리 메인 홈화면

export default function HomePage() {
  return (
    <div>
      <h1>여기가 Home 입니다.</h1>
      {/* <SearchBar/>
      <SearchType/>
      <SearchResults/> */}
      <div>
        <Link to="/event/intro">
          <Button>이벤트 소개페이지 바로가기</Button>
        </Link>
        <Link to="/event/tagmember">
          <Button>🎉이벤트 만들기🎉</Button>
        </Link>
        <Button size="small" color="orange">
          작은 버튼
        </Button>
        <div style={{ display: "flex", flexFlow: "row" }}>
          <Icon color="gray">#해시태그</Icon>
          <HashTag color="orange">#해시태그</HashTag>
          <HashTag color="blue">#해시태그</HashTag>
        </div>

        <p>아이콘 모음 ...</p>
        <Icon img="alarm">알람</Icon>
        <Icon img="like">좋아요</Icon>
        <Icon img="pang">팡파레</Icon>
        <Icon img="setting">설정</Icon>
      </div>
    </div>
  );
}
