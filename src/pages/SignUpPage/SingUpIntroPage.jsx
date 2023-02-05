import { Link } from "react-router-dom";

export default function SignUpIntro() {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>회원가입</h4>
      <p>팡파레를 시작하기 위해 회원가입을 해볼까요?</p>
      <button type="button">카카오로 시작하기</button>
      <button type="button">구글로 시작하기</button>
      <Link to="/signup/email">
        <button type="button">이메일로 가입하기</button>
      </Link>
    </div>
  );
}
