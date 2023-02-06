import { Link } from "react-router-dom";
import Icon from "./Icon";

function Footbar() {
  
  return (
    <footer className="footer">
      <Link to="/">
        <Icon img="home">홈</Icon>
      </Link>
      <Link to="/">
        <Icon img="feed">피드</Icon>
      </Link>
      <Link to="/event/tagmember">
        <Icon img="event">이벤트 생성</Icon>
      </Link>
      <Link to="/event/tagmember">
        <Icon img="search">검색</Icon>
      </Link>
      <Link to="/event/tagmember">
        <Icon img="my">내정보</Icon>
      </Link>
    </footer>
  );
}

export default Footbar;
