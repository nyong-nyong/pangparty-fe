// import SearchBar from "../components/Search/SearchBar";
// import SearchResults from "../components/Search/SearchResults";
// import SearchType from "../components/Search/SearchType";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../recoils/user/Atoms";
import useUserAction from "../hooks/useUserAction";
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
      <h1>여기가 Home 입니다.</h1>
      <br />
      {auth ? (
        <button type="button" onClick={logOut}>
          로그아웃
        </button>
      ) : (
        <Link to="/login">로그인</Link>
      )}
    </div>
  );
}
