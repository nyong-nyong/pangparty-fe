/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useUserAction from "../hooks/useUserAction";
import { authState } from "../recoils/user/Atoms";
import logo from "../assets/pangpartyIcon.svg";
import Button from "../components/common/Button";
import "../styles/LoginPage.scss";
import naver from "../assets/loginNaver.svg";
import google from "../assets/loginGoogle.svg";

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
    }
  }, []);

  const emailIsValid = (email) => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(email)) return true;
    return false;
    // return true;
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

  // 홈으로 보내기(추가할 것)
  const login = (e) => {
    e.preventDefault();
    userAction.logIn(userInfo);
    navigate("/");
  };

  return (
    <div className="loginWrapper">
      <div className="mainLogo">
        <img src={logo} alt="logo" />
      </div>
      <form onSubmit={(e) => login(e)}>
        <div className="loginInputContainer">
          <input
            id="email"
            type="email"
            onChange={loginHandler}
            placeholder="이메일"
          />
          {!isValid ? (
            <p className="errorMsg">유효하지 않은 email 값입니다.</p>
          ) : null}
          <input
            id="password"
            type="password"
            onChange={loginHandler}
            placeholder="비밀번호"
          />
          {isValid && userInfo.email.length > 1 ? (
            <Button color="orange-1" type="submit">
              로그인하기
            </Button>
          ) : (
            <Button color="orange-1" type="button">
              로그인하기
            </Button>
          )}
        </div>
      </form>
      {/* <div className="loginFindingForm">
        <button type="button">아이디 찾기</button>
        <button type="button">비밀번호 찾기</button>
      </div>
      <div className="loginSnSLogo">
        <img src={naver} alt="naver" />
        <img src={google} alt="naver" />
      </div> */}
      <div className="loginPageSignup">
        <Link to="/signup/email">
          <Button color="blue-1" type="button">
            회원가입
          </Button>
        </Link>
      </div>
    </div>
  );
}
