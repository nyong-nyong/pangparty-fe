/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../../components/common/Button";
import { signUpEmailState } from "../../recoils/signUp/Atoms";
import "./SignUpEmailPage.scss";

export default function SignUpEmail() {
  const navigate = useNavigate();
  const setSignUpEmail = useSetRecoilState(signUpEmailState);

  const [userEmail, setUserEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailDup, setIsEmailDup] = useState(false);
  const [dupChecked, setDupChecked] = useState(false);
  const [canSubmit, setCanSubmit] = useState(false);
  const [authEmailPosted, setAuthEmailPosted] = useState(false);
  const [authCode, setAuthCode] = useState("");

  useEffect(() => {
    if (isEmailDup && isEmailValid && userEmail && userEmail.length > 0) {
        return setCanSubmit(true);
      }
      return setCanSubmit(false);
    }, [isEmailDup, isEmailValid]);

  const emailIsValid = (email) => {
    if(email.length === 0) return true;
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(email)) return true;
    return false;
  };

  const postAuthEmail = async () => {
    await axios
      .post(requests.postAuth, { email : userEmail }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        setAuthEmailPosted(true);        
      })
      .catch((err) => {
        console.error(err);
      });
  }

  const submitEmail = () => {
      const checkEmailDup = async () => {
        await axios
          .post(requests.checkEmail, { email : userEmail }, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            console.log(res.data)
            setDupChecked(true);
            // 중복 검사 
            if(res.data.isExisting === true) {
              setIsEmailDup(false);
              return;
            }
            setIsEmailDup(true);
            postAuthEmail();
          })
          .catch((err) => {
            console.error(err);
          });
      };
      checkEmailDup();
  };

  const emailHandler = (e) => {
    const targetValue = e.target.value;
    setUserEmail(targetValue);
    setIsEmailDup(false);
    setDupChecked(false);
    setIsEmailValid(emailIsValid(targetValue));
    // console.log(targetValue);
  };

  const authHandler = (e) => {
    const targetValue = e.target.value;
    setAuthCode(targetValue);
  };

  const confirmEmail = async (e) => {
    e.preventDefault();
    await axios
      .post(requests.confirmAuth, { email: userEmail, authCode }, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setSignUpEmail(userEmail);
      })
      .then(() => {
        navigate("/signup/email/detail");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="siginUpWrapper">
      <div className="signUpTitle">
        <p>웰컴 투 팡파레!</p>
        <span>회원가입을 위해 아래 정보를 입력해주세요.</span>
      </div>
      <div className="inputContainer">
        <p>이메일</p>
        <input
          id="email"
          type="email"
          value={userEmail}
          onChange={emailHandler}
          label="이메일"
          placeholder="example@gmail.com"
          maxLength="320"
        />
      </div>
      { isEmailValid && isEmailDup ? (
        <span className="guideMsg">
          이메일은 example@gmail.com 형식으로 입력해주세요.
        </span>
      ) : isEmailValid && dupChecked && userEmail && userEmail.length > 0 ? (
        <span className="errorMsg">이미 가입된 email 입니다.</span>
      ) : !isEmailValid && userEmail && userEmail.length > 0 ? (
        <span className="errorMsg">유효하지 않은 email 형식입니다.</span>
      ) : <span className="guideMsg">이메일은 example@gmail.com 형식으로 입력해주세요.</span>
      }

      { authEmailPosted && dupChecked ? (
        <div className="inputContainer">
          <p>인증 번호</p>
          <input
            id="authCode"
            type="text"
            value={authCode}
            onChange={authHandler}
            label="인증 번호"
            maxLength="6"
          />
        </div>
      ) : 
        <div className="inputContainer" style={{ visibility: "hidden" }} /> 
      }

      { canSubmit ? (<Button color="blue-1" type="button" onClick={confirmEmail}>
        다음
      </Button>) : 
        isEmailValid && !dupChecked && userEmail && userEmail.length > 0 ? 
        (<Button color="orange-1" type="button" onClick={submitEmail}>인증번호 요청</Button>) : 
        (<Button color="gray-1" type="button">인증번호 요청</Button>) }
      
    </div>
  );
}
