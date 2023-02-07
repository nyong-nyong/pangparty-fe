import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useUserAction from "../hooks/useUserAction";
import { authState } from "../recoils/user/Atoms";

// export default function LoginPage({ history }) {
export default function LoginPage() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(true);
  const auth = useRecoilValue(authState);
  const userAction = useUserAction();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/");
      // history.push("/");
    }
  }, []);

  const emailIsValid = (email) => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(email)) return true;
    return false;
  };

  const checkIsValid = (targetId, targetValue) => {
    if (targetId === "email") {
      const isValidReturn = emailIsValid(targetValue);
      setIsValid(isValidReturn);
    }
  };

  const loginHandler = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    checkIsValid(targetId, targetValue);
    const newInfo = { ...userInfo };
    newInfo[targetId] = targetValue;
    setUserInfo(newInfo);
  };

  const login = (e) => {
    e.preventDefault();
    return userAction.logIn(userInfo);
  };

  return (
    <div>
      <h1>로그인</h1>
      <form onSubmit={(e) => login(e)}>
        {isValid ? (
          <div>
            <input
              id="email"
              type="email"
              onChange={loginHandler}
              placeholder="이메일"
            />
          </div>
        ) : (
          <div>
            <input
              id="email"
              type="email"
              onChange={loginHandler}
              placeholder="이메일"
            />
            <p>유효하지 않은 email 값입니다.</p>
          </div>
        )}
        <input
          id="password"
          type="password"
          onChange={loginHandler}
          placeholder="비밀번호"
        />
        <button type="submit">로그인하기</button>
      </form>
      <button type="button">아이디 찾기</button>
      <button type="button">비밀번호 찾기</button>

      <button type="button">네이버</button>
      <button type="button">구글</button>
      <Link to="/signup/intro">
        <button type="button">회원가입</button>
      </Link>
    </div>
  );
}
