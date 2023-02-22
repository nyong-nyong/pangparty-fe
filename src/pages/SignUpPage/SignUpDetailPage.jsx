/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable prefer-regex-literals */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import requests from "../../api/requests";
import Button from "../../components/common/Button";
import "./SignUpEmailPage.scss";
// import ok from "../../assets/myActive.svg";
// import profile from "../../assets/profile.svg";
// import SignUpImage from "../../components/SignUp/SignUpImage";

export default function SignUpDetail() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    imgUrl: `${process.env.PUBLIC_URL}/profileDefaults/defaultProfile.svg`,
    introduction: "",
  });

  const [isValid, setIsValid] = useState({
    id: true,
    idDup: true,
    email: true,
    emailDup: true,
    password: true,
    passwordCheck: true,
    name: true,
    introduction: true,
  });

  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    if (
      userInfo.id !== "" &&
      userInfo.email !== "" &&
      userInfo.password !== "" &&
      userInfo.passwordCheck !== "" &&
      userInfo.name !== "" &&
      isValid.id &&
      isValid.idDup &&
      isValid.email &&
      isValid.emailDup &&
      isValid.password &&
      isValid.passwordCheck &&
      isValid.name &&
      isValid.introduction) {
        return setCanSubmit(true);
      }
      return setCanSubmit(false);
    }, [isValid]);

  // const [profileImgFile, setProfileImgFile] = useState("");
  // const profileImgRef = useRef();

  // const saveProfileImgFile = () => {
  //   const profileImg = profileImgRef.current.files[0];
  //   const reader = new FileReader();
  //   reader.readAsDataURL(profileImg);
  //   reader.onloadend = () => {
  //     setProfileImgFile(reader.result);
  //   };
  // };

  const emailIsValid = (email) => {
    if(email.length === 0) return true;
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(email)) return true;
    return false;
  };

  const pwIsValid = (password) => {
    if(password.length === 0) return true;
    if (password.length < 8 || password.length > 20) {
      return false;
    }
    const numberPattern = new RegExp(/[0-9]/);
    const alphabetPattern = new RegExp(/[a-zA-Z]/);
    const specialPattern = new RegExp(/[!@#$?]/);
    if (
      !numberPattern.test(password) ||
      !alphabetPattern.test(password) ||
      !specialPattern.test(password)
    ) {
      return false;
    }
    return true;
  };

  const pwCheckIsValid = (password) => {
    if (password.length === 0) return true;
    if (password !== userInfo.password) return false;
    return true;
  };

  const idIsValid = (id) => {
    if(id.length === 0) return true;
    if (id.length < 2 || id.length > 15) return false;
    const idRegExp = /[0-9a-zA-Z]/;
    if (idRegExp.test(id)) {
      return true;
    }
    return false;
  };

  const nameIsValid = (name) => {
    if(name.length === 0) return true;
    if (name.length < 2 || name.length > 15) return false;
    return true;
  };

  const checkIsValid = (targetId, targetValue) => {
    if (targetId === "email") {
      const isValidReturn = emailIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.email = isValidReturn;
      // if (isValidReturn) {
      //   const checkEmailDup = async () => {
      //     await axios
      //       .get()
      //       .then((res) => {
      //         const newIsValidWithDup = { ...isValid };
      //         newIsValidWithDup.emailDup = res.data;
      //         setIsValid(newIsValidWithDup);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   };
      //   checkEmailDup();
      // }
      setIsValid(newIsValid);
      return;
    }
    if (targetId === "password") {
      const isValidReturn = pwIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.password = isValidReturn;
      setIsValid(newIsValid);
      return;
    }
    if (targetId === "passwordCheck") {
      const isValidReturn = pwCheckIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.passwordCheck = isValidReturn;
      setIsValid(newIsValid);
      return;
    }
    if (targetId === "id") {
      const isValidReturn = idIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.id = isValidReturn;
      // if (isValidReturn) {
      //   const checkIdDup = async () => {
      //     await axios
      //       .get()
      //       .then((res) => {
      //         const newIsValidWithDup = { ...isValid };
      //         newIsValidWithDup.idDup = res.data;
      //         setIsValid(newIsValidWithDup);
      //       })
      //       .catch((err) => {
      //         console.log(err);
      //       });
      //   };
      //   checkIdDup();
      // }
      setIsValid(newIsValid);
      return;
    }
    if (targetId === "name") {
      const isValidReturn = nameIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.name = isValidReturn;
      setIsValid(newIsValid);
    }
  };

  const signupHandler = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    checkIsValid(targetId, targetValue);
    const newInfo = { ...userInfo };
    newInfo[targetId] = targetValue;
    setUserInfo(newInfo);
    // console.log(targetValue);
  };

  const signUpPost = async (e) => {
    e.preventDefault();
    await axios
      .post(requests.register, userInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="siginUpWrapper">
      <div className="signUpTitle">
        {/* <p style={{ color: "#678cff" }}>Welcome to</p>
        <p style={{ color: "#FF7A5C" }}>PangParty</p> */}
        <p>웰컴 투 팡파레!</p>
        <span>회원가입을 위해 아래 정보를 입력해주세요.</span>
      </div>
      <div className="inputContainer">
        <p>이메일</p>
        <input
          id="email"
          type="email"
          value={userInfo.email}
          onChange={signupHandler}
          label="이메일"
          placeholder="example@gmail.com"
          maxLength="320"
        />
      </div>
      {isValid.email && isValid.emailDup ? (
        <span className="guideMsg">
          이메일은 example@gmail.com 형식으로 입력해주세요.
        </span>
      ) : isValid.email ? (
        <span className="errorMsg">이미 존재하는 email 입니다.</span>
      ) : (
        <span className="errorMsg">유효하지 않은 email 형식입니다.</span>
      )}

      <div className="inputContainer">
        <p>비밀번호</p>
        <input
          id="password"
          type="password"
          value={userInfo.password}
          onChange={signupHandler}
          maxLength="20"
        />
      </div>
      {isValid.password ? (
        <span className="guideMsg">
          비밀번호는 영문, 숫자, 특수문자(!,@,#,$,?)를 포함한
          8-20자로 구성되어야 합니다.
        </span>
      ) : (
        <span className="errorMsg">유효하지 않은 비밀번호 형식입니다.</span>
      )}

      <div className="inputContainer">
        <p>비밀번호 확인</p>
        <input
          id="passwordCheck"
          type="password"
          value={userInfo.passwordCheck}
          onChange={signupHandler}
          maxLength="20"
        />
      </div>
      {isValid.passwordCheck ? null : (
        <span className="errorMsg">비밀번호가 일치하지 않습니다</span>
      )}

      <div className="inputContainer">
        <p>ID</p>
        <input
          id="id"
          type="text"
          value={userInfo.id}
          placeholder=""
          onChange={signupHandler}
          maxLength="15"
        />
      </div>
      {isValid.id && isValid.idDup ? (
        <span className="guideMsg">
          아이디는 영어 대소문자와 숫자를 포함한 2-15자로 구성되어야 합니다.
        </span>
      ) : isValid.id ? (
        <span className="errorMsg">이미 존재하는 ID입니다</span>
      ) : (
        <span className="errorMsg">유효하지 않은 ID 형식입니다</span>
      )}

      <div className="inputContainer">
        <p>이름</p>
        <input
          id="name"
          type="text"
          value={userInfo.name}
          placeholder=""
          onChange={signupHandler}
          maxLength="15"
        />
      </div>
      {isValid.name ? (
        <span className="guideMsg">
          이름은 한글, 영어 대소문자와 숫자를 포함한 2-15자로 구성되어야 합니다.
        </span>
      ) : <span className="errorMsg">이름 형식 오류</span>}

      {/* <div className="loginProfileContainer">
        <div className="profileImg">
          <p>프로필 사진</p>
          <input
            type="file"
            accept={"image/*"}
            onChange={saveProfileImgFile}
            ref={profileImgRef}
          />
          {profileImgFile ? (
            <img src={profileImgFile} alt="프로필 사진 업로드" />
          ) : (
            <img src={profile} alt="기본 프로필 이미지" />
          )}
        </div>
      </div> */}
      <div className="profileIntro">
        <p>소개</p>
        <textarea
          id="introduction"
          type="text"
          value={userInfo.introduction}
          onChange={signupHandler}
          placeholder="프로필에 표시될 소개 문구를 작성해주세요."
        />
      </div>
      {canSubmit ? (<Button color="blue-1" type="button" onClick={signUpPost}>
        가입하기
      </Button>) : (<Button color="gray-1" type="button">
        가입하기
      </Button>)}
      
    </div>
  );
}
