import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";
import Pang from "../components/CreateEvent/Pang";

export default function IntroEventPage() {
  return (
    <div>
      <h1>여기는 이벤트 소개 페이지입니다.</h1>
      <Pang />

      <Link to="/piece">
      </Link>
        <Button>참여하기</Button>

      <PhotoAlbum />
    </div>
  );
}
