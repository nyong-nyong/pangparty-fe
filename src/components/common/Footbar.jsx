/* eslint-disable no-unused-vars */
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { userState } from "../../recoils/user/Atoms";
import Icon from "./Icon";

export default function Footbar() {
  const userID = useRecoilValue(userState);
  const [isActive, setIsActive] = useState({
    Home: true,
    Feed: false,
    Event: false,
    Search: false,
    MyPage: false,
  });

  // 페이지 이동시 비활성 시키기
  const clickHandler = (e, id) => {
    const newActivation = {
      Home: false,
      Feed: false,
      Event: false,
      Search: false,
      MyPage: false,
    };
    newActivation[id] = true;
    setIsActive(newActivation);
  };

  const location = useLocation();
  useEffect(() => {
    if (!location) return;
    const nowURL = location.pathname;
    const newActivation = {
      Home: false,
      Feed: false,
      Event: false,
      Search: false,
      MyPage: false,
    };
    if (nowURL.startsWith("/events")) {
      return;
    }
    if (nowURL.startsWith("/event")) {
      newActivation.Event = true;
      setIsActive(newActivation);
      return;
    }
    if (nowURL.startsWith("/feed")) {
      newActivation.Feed = true;
      setIsActive(newActivation);
      return;
    }
    if (nowURL.startsWith("/search")) {
      newActivation.Search = true;
      setIsActive(newActivation);
      return;
    }
    if (
      nowURL.startsWith("/login") ||
      nowURL.startsWith("/signup") ||
      nowURL.startsWith("/mypage") ||
      nowURL.startsWith("/follows") ||
      nowURL.startsWith("/myevents") ||
      nowURL.startsWith("/friend") ||
      nowURL.startsWith("/gift")
    ) {
      newActivation.MyPage = true;
      setIsActive(newActivation);
      return;
    }
    if (nowURL === "/") {
      newActivation.Home = true;
      setIsActive(newActivation);
      return;
    }
    setIsActive(newActivation);
  }, [location]);

  return (
    <FootbarContainer>
      <footer className="footer">
        <Link to="/" onClick={(e) => clickHandler(e, "Home")}>
          <Icon img="home" isActive={isActive.Home}>
            홈
          </Icon>
        </Link>
        <Link to="/feed" id="Feed" onClick={(e) => clickHandler(e, "Feed")}>
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
          to="/search"
          id="Search"
          onClick={(e) => clickHandler(e, "Search")}
        >
          <Icon img="search" isActive={isActive.Search}>
            검색
          </Icon>
        </Link>
        {/* {userID ? <p>하이</p> : <p>djqt</p>} */}
        <Link
          to={userID ? `/mypage/${userID}` : "mypage/pang3333"}
          id="MyPage"
          onClick={(e) => clickHandler(e, "MyPage")}
        >
          {userID ? (
            <Icon img="my" isActive={isActive.MyPage}>
              내정보
            </Icon>
          ) : (
            <Icon img="setting" isActive={isActive.MyPage}>
              로그인
            </Icon>
          )}
          {/* <Icon img="my" isActive={isActive.MyPage}>
          내정보
        </Icon> */}
        </Link>
      </footer>
    </FootbarContainer>
  );
}

const FootbarContainer = styled.div`
  display: flex;
  justify-content: center;
`;
