import { Link } from "react-router-dom";
import { useState } from "react";
import Icon from "./Icon";

function Footbar() {
  const [isActive, setIsActive] = useState({
    Home: true,
    Feed: false,
    Event: false,
    Search: false,
    MyPage: false,
  });

  // 페이지 이동시 비활성 시키기
  const clickHandler = (e, id) => {
    console.log(e.target.id);
    const newActivation = {
      Home: false,
      Feed: false,
      Event: false,
      Search: false,
      MyPage: false,
    };
    newActivation[id] = true;
    // console.log(newTarget);
    // console.log(newActivation);
    setIsActive(newActivation);
  };

  return (
    <footer className="footer">
      <Link to="/" onClick={(e) => clickHandler(e, "Home")}>
        <Icon img="home" isActive={isActive.Home}>
          홈
        </Icon>
      </Link>
      <Link to="/" id="Feed" onClick={(e) => clickHandler(e, "Feed")}>
        <Icon img="feed" isActive={isActive.Feed}>
          피드
        </Icon>
      </Link>
      <Link
        to="/event/tagmember"
        id="Event"
        onClick={(e) => clickHandler(e, "Event")}
      >
        <Icon img="event" isActive={isActive.Event}>
          이벤트 생성
        </Icon>
      </Link>
      <Link
        to="/event/tagmember"
        id="Search"
        onClick={(e) => clickHandler(e, "Search")}
      >
        <Icon img="search" isActive={isActive.Search}>
          검색
        </Icon>
      </Link>
      <Link to="/mypage" id="MyPage" onClick={(e) => clickHandler(e, "MyPage")}>
        <Icon img="my" isActive={isActive.MyPage}>
          내정보
        </Icon>
      </Link>
    </footer>
  );
}

export default Footbar;
