import { Link } from "react-router-dom";
import cat from "../assets/grayCat.svg";
import Button from "../components/common/Button";
import "../components/Feed/LetsPost.scss";

export default function LetsPost() {
  return (
    <div className="LetsPostWrapper">
      <h1 className="Error">앗! 페이지를 찾을 수가 없어요.</h1>
      <img src={cat} alt="" />
      <div className="LstsPangBtnContainer">
        {/* <Link to="/feed/create">
          <Button color="blue-1">글 쓰러 가기</Button>
        </Link> */}
        <br />
        <br />
        <Link to="/">
          <Button color="orange-1">홈으로 돌아가기</Button>
        </Link>
      </div>
    </div>
  );
}
