import { useState } from "react";

export default function SignUpEmail() {
  const [userInfo, setUserInfo] = useState({
    id: "",
    email: "",
    password: "",
    name: "",
    imgUrl: "",
    introduction: "",
  });

  const signupHandler = (e) => {
    const tg = e.target.id;
    const newInfo = { ...userInfo };
    newInfo[tg] = e.target.value;
    setUserInfo(newInfo);
  };

  const signUpPost = () => {
    console.log(userInfo);
  };

  return (
    <div>
      <h4 style={{ textAlign: "center" }}>으아아</h4>
      <div style={{ margin: "10px" }}>
        <div>
          <p>이메일</p>
          <input
            id="email"
            type="email"
            value={userInfo.email}
            onChange={signupHandler}
            placeholder="example@naver.com"
          />
        </div>
        <div>
          <p>비밀번호</p>
          <input
            id="password"
            type="password"
            value={userInfo.password}
            onChange={signupHandler}
          />
        </div>
        <div>
          <p>ID</p>
          <input
            id="id"
            type="text"
            value={userInfo.id}
            placeholder="somtha"
            onChange={signupHandler}
          />
        </div>
        <div>
          <p>Name</p>
          <input
            id="name"
            type="text"
            value={userInfo.name}
            placeholder="솜따"
            onChange={signupHandler}
          />
        </div>
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
            id="imgUrl"
            type="file"
            value={userInfo.imgUrl}
            onChange={signupHandler}
          />
        </div>
      </div>
      <button type="button" onClick={signUpPost}>
        가입완료 확인버튼
      </button>
    </div>
  );
}
