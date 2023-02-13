/* eslint-disable react/button-has-type */
// import SearchBar from "../components/Search/SearchBar";
// import SearchResults from "../components/Search/SearchResults";
// import SearchType from "../components/Search/SearchType";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useUserAction from "../hooks/useUserAction";
import { authState } from "../recoils/user/Atoms";
import useUserAction from "../hooks/useUserAction";
import HomeCarousel from "../components/HomePage/HomeCarousel";
// 우리 메인 홈화면

export default function HomePage() {
  const auth = useRecoilValue(authState);
  const userAction = useUserAction();
  const logOut = (e) => {
    e.preventDefault();
    userAction.logOut();
  };

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "600",
          color: "#FF7A5C",
        }}
      >
        Welcome To Pang!Party!
      </p>
      <HomeCarousel />
      <div className="tempContainer">
        {auth ? (
          <button type="button" onClick={logOut}>
            로그아웃
          </button>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </div>
    </div>
  );
}
