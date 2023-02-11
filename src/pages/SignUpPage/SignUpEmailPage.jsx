/* eslint-disable prefer-regex-literals */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-case-declarations */
/* eslint-disable default-case */
import { useRef, useState } from "react";
import axios from "../../api/axios";
import requests from "../../api/requests";

export default function SignUpEmail() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
    imgUrl: "",
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
    imgUrl: true,
    introduction: true,
  });

  const [profileImgFile, setProfileImgFile] = useState("");
  const profileImgRef = useRef();

  const saveProfileImgFile = () => {
    const profileImg = profileImgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(profileImg);
    reader.onloadend = () => {
      setProfileImgFile(reader.result);
    };
  };

  const emailIsValid = (email) => {
    const emailRegExp =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (emailRegExp.test(email)) return true;
    return false;
  };

  const pwIsValid = (password) => {
    if (password.length < 8 || password.length > 20) {
      return false;
    }
    const numberPattern = new RegExp(/[0-9]/);
    const alphabetPattern = new RegExp(/[a-zA-Z]/);
    const specialPattern = new RegExp(/[~!@#$%^&*()_+|<>?:{}]/);
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
    if (password !== userInfo.password) return false;
    return true;
  };

  const idIsValid = (id) => {
    if (id.length < 2 || id.length > 15) return false;
    const idRegExp = /[0-9a-zA-Z]/;
    if (idRegExp.test(id)) {
      return true;
    }
    return false;
  };

  const nameIsValid = (name) => {
    if (name.length < 2 || name.length > 15) return false;
    return true;
  };

  const checkIsValid = (targetId, targetValue) => {
    if (targetId === "email") {
      const isValidReturn = emailIsValid(targetValue);
      const newIsValid = { ...isValid };
      newIsValid.email = isValidReturn;
      if (isValidReturn) {
        const checkEmailDup = async () => {
          await axios
            .get()
            .then((res) => {
              const newIsValidWithDup = { ...isValid };
              newIsValidWithDup.emailDup = res.data;
              setIsValid(newIsValidWithDup);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        checkEmailDup();
      }
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
      if (isValidReturn) {
        const checkIdDup = async () => {
          await axios
            .get()
            .then((res) => {
              const newIsValidWithDup = { ...isValid };
              newIsValidWithDup.idDup = res.data;
              setIsValid(newIsValidWithDup);
            })
            .catch((err) => {
              console.log(err);
            });
        };
        checkIdDup();
      }
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

    const formData = new FormData();
    // ""에 key 값 넣기
    formData.append(
      "data",
      new Blob([JSON.stringify(userInfo)], {
        type: "application/json",
      })
    );
    if (profileImgFile) formData.append("file", profileImgFile);

    await axios
      .post(requests.member.postSignUp(), {
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          // 로그인시켜서 홈으로 보내기
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>으아아</h4>

      <div style={{ margin: "10px" }}>
        {isValid.email && isValid.emailDup ? (
          <div>
            <p>이메일</p>
            <input
              id="email"
              type="email"
              value={userInfo.email}
              onChange={signupHandler}
              placeholder="example@naver.com"
              maxLength="320"
            />
          </div>
        ) : isValid.email ? (
          <div>
            <p>이메일</p>
            <input
              id="email"
              type="email"
              value={userInfo.email}
              onChange={signupHandler}
              placeholder="example@naver.com"
              maxLength="320"
            />
            <p>이미 존재하는 email 입니다.</p>
          </div>
        ) : (
          <div>
            <p>이메일</p>
            <input
              id="email"
              type="email"
              value={userInfo.email}
              onChange={signupHandler}
              placeholder="example@naver.com"
              maxLength="320"
            />
            <p>유효하지 않은 email 형식입니다.</p>
          </div>
        )}

        {isValid.password ? (
          <div>
            <p>비밀번호</p>
            <input
              id="password"
              type="password"
              value={userInfo.password}
              onChange={signupHandler}
              maxLength="20"
            />
          </div>
        ) : (
          <div>
            <p>비밀번호</p>
            <input
              id="password"
              type="password"
              value={userInfo.password}
              onChange={signupHandler}
              maxLength="20"
            />
            <p>비밀번호 형식 오류</p>
          </div>
        )}

        {isValid.passwordCheck ? (
          <div>
            <p>비밀번호 확인</p>
            <input
              id="passwordCheck"
              type="password"
              value={userInfo.passwordCheck}
              onChange={signupHandler}
              maxLength="20"
            />
          </div>
        ) : (
          <div>
            <p>비밀번호 확인</p>
            <input
              id="passwordCheck"
              type="password"
              value={userInfo.passwordCheck}
              onChange={signupHandler}
              maxLength="20"
            />
            <p>비밀번호가 일치하지 않습니다</p>
          </div>
        )}

        {isValid.id && isValid.idDup ? (
          <div>
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
        ) : isValid.id ? (
          <div>
            <p>ID</p>
            <input
              id="id"
              type="text"
              value={userInfo.id}
              placeholder=""
              onChange={signupHandler}
              maxLength="15"
            />
            <p>이미 존재하는 ID입니다</p>
          </div>
        ) : (
          <div>
            <p>ID</p>
            <input
              id="id"
              type="text"
              value={userInfo.id}
              placeholder=""
              onChange={signupHandler}
              maxLength="15"
            />
            <p>유효하지 않은 ID 형식입니다</p>
          </div>
        )}

        {isValid.name ? (
          <div>
            <p>Name</p>
            <input
              id="name"
              type="text"
              value={userInfo.name}
              placeholder=""
              onChange={signupHandler}
              maxLength="15"
            />
          </div>
        ) : (
          <div>
            <p>Name</p>
            <input
              id="name"
              type="text"
              value={userInfo.name}
              placeholder=""
              onChange={signupHandler}
              maxLength="15"
            />
            <p>이름 형식 오류</p>
          </div>
        )}
        <div>
          <p>소개</p>
          <textarea
            id="introduction"
            type="text"
            value={userInfo.introduction}
            onChange={signupHandler}
            placeholder="프로필에 표시될 소개 문구를 작성해주세요."
          />
        </div>
        <div>
          <p>프로필 사진</p>
          <input
            type="file"
            accept={"image/*"}
            id="profileImgUpload"
            onChange={saveProfileImgFile}
            ref={profileImgRef}
          />
        </div>
        <br />
        {profileImgFile ? (
          <img
            src={profileImgFile}
            alt="프로필 사진 업로드"
            width="100px"
            height="100px"
          />
        ) : (
          ""
        )}
      </div>
      <button type="button" onClick={signUpPost}>
        가입완료 확인버튼
      </button>
    </div>
  );
}
