import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import PhotoAlbum from "../components/PhotoAlbum/PhotoAlbum";

export default function IntroEventPage() {
  return (
    <div>
      <h1>여기는 이벤트 소개 페이지입니다.</h1>

      <Link to="/rollingpaper">
        <Button>✏️롤링페이퍼 조회 (피스리스트)</Button>
      </Link>

      <PhotoAlbum />
    </div>
  );
}
