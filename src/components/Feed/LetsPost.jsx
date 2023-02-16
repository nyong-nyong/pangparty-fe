import { Link } from "react-router-dom";
import cat from "../../assets/grayCat.svg";
import Button from "../common/Button";
import "./LetsPost.scss";

export default function LetsPost() {
  return (
    <div className="LetsPostWrapper">
      <img src={cat} alt="" />
      <p>아직 작성된 게시글이 없어요</p>
      <div className="LstsPangBtnContainer">
        <Link to="/feed/create">
          <Button color="blue-1">글 쓰러 가기</Button>
        </Link>
        <Link to="/search">
          <Button color="orange-1">팔로우 하러 가기</Button>
        </Link>
      </div>
    </div>
  );
}
